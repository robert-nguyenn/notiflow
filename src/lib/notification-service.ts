import { db } from "@/db"
import { Event, NotificationChannel, ChannelType, DeliveryStatus, Severity, Priority } from "@prisma/client"
import { DiscordClient } from "./discord-client"
import { WebhookClient } from "./webhook-client"
import { EmailClient } from "./email-client"

interface NotificationContext {
  event: Event & {
    EventCategory: {
      name: string
      emoji: string | null
      color: number
    } | null
  }
  user: {
    id: string
    email: string
    discordId: string | null
  }
}

interface ProcessingResult {
  success: boolean
  notificationId?: string
  error?: string
  duration: number
}

export class NotificationService {
  private discordClient: DiscordClient
  private webhookClient: WebhookClient
  private emailClient: EmailClient

  constructor() {
    this.discordClient = new DiscordClient(process.env.DISCORD_BOT_TOKEN)
    this.webhookClient = new WebhookClient()
    this.emailClient = new EmailClient()
  }

  async processEvent(context: NotificationContext): Promise<ProcessingResult[]> {
    const startTime = Date.now()
    const { event, user } = context

    try {
      // Get applicable routing rules
      const routingRules = await this.getApplicableRoutingRules(event, user.id)
      
      // If no routing rules, use default behavior (Discord DM)
      if (routingRules.length === 0) {
        return [await this.processDefaultNotification(context)]
      }

      // Process each routing rule
      const results: ProcessingResult[] = []
      for (const rule of routingRules) {
        const ruleResults = await this.processRoutingRule(context, rule)
        results.push(...ruleResults)
      }

      return results

    } catch (error) {
      const duration = Date.now() - startTime
      console.error("Error processing event:", error)
      return [{
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        duration
      }]
    }
  }

  private async getApplicableRoutingRules(event: Event, userId: string) {
    const routingRules = await db.routingRule.findMany({
      where: {
        userId,
        isActive: true,
      },
      include: {
        notificationChannels: true,
      },
      orderBy: {
        priority: 'desc',
      },
    })

    // Filter rules based on conditions
    return routingRules.filter(rule => this.evaluateRuleConditions(rule.conditions as any, event))
  }

  private evaluateRuleConditions(conditions: any, event: Event): boolean {
    if (!conditions || !conditions.rules) return true

    const { logic, rules } = conditions
    
    const results = rules.map((rule: any) => {
      return this.evaluateCondition(rule, event)
    })

    return logic === "OR" ? results.some(Boolean) : results.every(Boolean)
  }

  private evaluateCondition(condition: any, event: Event): boolean {
    const { field, operator, value, caseSensitive = false } = condition
    
    // Get field value from event
    let fieldValue: any
    if (field.startsWith('fields.')) {
      const fieldPath = field.substring(7)
      fieldValue = (event.fields as any)?.[fieldPath]
    } else if (field.startsWith('metadata.')) {
      const fieldPath = field.substring(9)
      fieldValue = (event.metadata as any)?.[fieldPath]
    } else {
      fieldValue = (event as any)[field]
    }

    if (fieldValue === undefined || fieldValue === null) return false

    // Convert to string for comparison if needed
    const stringValue = String(fieldValue)
    const compareValue = String(value)
    
    const compareStr = caseSensitive ? stringValue : stringValue.toLowerCase()
    const targetStr = caseSensitive ? compareValue : compareValue.toLowerCase()

    switch (operator) {
      case "equals":
        return compareStr === targetStr
      case "contains":
        return compareStr.includes(targetStr)
      case "startsWith":
        return compareStr.startsWith(targetStr)
      case "endsWith":
        return compareStr.endsWith(targetStr)
      case "regex":
        try {
          const regex = new RegExp(compareValue, caseSensitive ? "g" : "gi")
          return regex.test(stringValue)
        } catch {
          return false
        }
      case "gt":
        return Number(fieldValue) > Number(value)
      case "lt":
        return Number(fieldValue) < Number(value)
      case "gte":
        return Number(fieldValue) >= Number(value)
      case "lte":
        return Number(fieldValue) <= Number(value)
      default:
        return false
    }
  }

  private async processRoutingRule(context: NotificationContext, rule: any): Promise<ProcessingResult[]> {
    const { actions } = rule
    const results: ProcessingResult[] = []

    // Check for duplicate suppression
    if (actions.suppressDuplicates) {
      const isDuplicate = await this.checkForDuplicates(context.event, actions.aggregateWindow || 300000)
      if (isDuplicate) {
        return [{
          success: true,
          duration: 0,
          notificationId: "suppressed"
        }]
      }
    }

    // Process delay
    if (actions.delay && actions.delay > 0) {
      await new Promise(resolve => setTimeout(resolve, actions.delay))
    }

    // Send to each channel
    for (const channelId of actions.channels) {
      const channel = await db.notificationChannel.findUnique({
        where: { id: channelId },
      })

      if (channel && channel.isActive) {
        const result = await this.sendToChannel(context, channel, actions.template)
        results.push(result)
      }
    }

    return results
  }

  private async processDefaultNotification(context: NotificationContext): Promise<ProcessingResult> {
    const startTime = Date.now()
    const { event, user } = context

    if (!user.discordId) {
      return {
        success: false,
        error: "No Discord ID configured",
        duration: Date.now() - startTime
      }
    }

    try {
      const dmChannel = await this.discordClient.createDM(user.discordId)
      
      const eventData = this.buildDiscordEmbed(event)
      await this.discordClient.sendEmbed(dmChannel.id, eventData)

      // Create notification record
      const notification = await db.notification.create({
        data: {
          eventId: event.id,
          channelId: "default-discord",
          status: "DELIVERED",
          attempts: 1,
          deliveredAt: new Date(),
          metadata: { channel: "discord", type: "dm" }
        },
      })

      return {
        success: true,
        notificationId: notification.id,
        duration: Date.now() - startTime
      }

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        duration: Date.now() - startTime
      }
    }
  }

  private async sendToChannel(
    context: NotificationContext, 
    channel: NotificationChannel, 
    templateId?: string
  ): Promise<ProcessingResult> {
    const startTime = Date.now()

    // Create notification record
    const notification = await db.notification.create({
      data: {
        eventId: context.event.id,
        channelId: channel.id,
        status: "PENDING",
        attempts: 0,
      },
    })

    try {
      let success = false

      switch (channel.type) {
        case "DISCORD":
          success = await this.sendDiscordNotification(context, channel, templateId)
          break
        case "WEBHOOK":
          success = await this.sendWebhookNotification(context, channel, templateId)
          break
        case "EMAIL":
          success = await this.sendEmailNotification(context, channel, templateId)
          break
        default:
          throw new Error(`Unsupported channel type: ${channel.type}`)
      }

      // Update notification status
      await db.notification.update({
        where: { id: notification.id },
        data: {
          status: success ? "DELIVERED" : "FAILED",
          attempts: 1,
          deliveredAt: success ? new Date() : undefined,
        },
      })

      return {
        success,
        notificationId: notification.id,
        duration: Date.now() - startTime
      }

    } catch (error) {
      // Update notification with failure
      await db.notification.update({
        where: { id: notification.id },
        data: {
          status: "FAILED",
          attempts: 1,
          failureReason: error instanceof Error ? error.message : "Unknown error",
        },
      })

      return {
        success: false,
        notificationId: notification.id,
        error: error instanceof Error ? error.message : "Unknown error",
        duration: Date.now() - startTime
      }
    }
  }

  private async sendDiscordNotification(
    context: NotificationContext, 
    channel: NotificationChannel, 
    templateId?: string
  ): Promise<boolean> {
    const config = channel.config as any
    const embed = this.buildDiscordEmbed(context.event, templateId)
    
    const dmChannel = await this.discordClient.createDM(config.userId)
    await this.discordClient.sendEmbed(dmChannel.id, embed)
    
    return true
  }

  private async sendWebhookNotification(
    context: NotificationContext, 
    channel: NotificationChannel, 
    templateId?: string
  ): Promise<boolean> {
    const config = channel.config as any
    const payload = this.buildWebhookPayload(context.event, templateId)
    
    await this.webhookClient.send(config, payload)
    return true
  }

  private async sendEmailNotification(
    context: NotificationContext, 
    channel: NotificationChannel, 
    templateId?: string
  ): Promise<boolean> {
    const config = channel.config as any
    const emailData = this.buildEmailData(context.event, config, templateId)
    
    await this.emailClient.send(emailData)
    return true
  }

  private buildDiscordEmbed(event: Event, templateId?: string) {
    const category = (event as any).EventCategory
    
    return {
      title: `${category?.emoji || this.getSeverityEmoji(event.severity)} ${
        category?.name ? category.name.charAt(0).toUpperCase() + category.name.slice(1) : "Event"
      }`,
      description: event.formattedMessage,
      color: category?.color || this.getSeverityColor(event.severity),
      timestamp: new Date().toISOString(),
      fields: [
        {
          name: "Severity",
          value: event.severity,
          inline: true,
        },
        {
          name: "Priority",
          value: event.priority,
          inline: true,
        },
        ...(event.source ? [{
          name: "Source",
          value: event.source,
          inline: true,
        }] : []),
        ...Object.entries((event.fields as object) || {}).map(([key, value]) => ({
          name: key,
          value: String(value),
          inline: true,
        })),
      ],
      footer: {
        text: `Event ID: ${event.id}`,
      },
    }
  }

  private buildWebhookPayload(event: Event, templateId?: string) {
    return {
      eventId: event.id,
      name: event.name,
      severity: event.severity,
      priority: event.priority,
      source: event.source,
      correlationId: event.correlationId,
      tags: event.tags,
      fields: event.fields,
      metadata: event.metadata,
      createdAt: event.createdAt.toISOString(),
      message: event.formattedMessage,
    }
  }

  private buildEmailData(event: Event, config: any, templateId?: string) {
    return {
      to: config.to,
      cc: config.cc,
      bcc: config.bcc,
      subject: config.subject || `${event.severity}: ${event.name}`,
      html: this.buildEmailHtml(event),
      templateId: templateId || config.templateId,
    }
  }

  private buildEmailHtml(event: Event): string {
    const category = (event as any).EventCategory
    
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: ${this.getSeverityColor(event.severity)};">
            ${category?.emoji || this.getSeverityEmoji(event.severity)} ${event.name}
          </h2>
          <p style="margin: 5px 0 0 0; color: #6c757d;">
            ${event.severity} • ${event.priority} Priority • ${event.createdAt.toLocaleString()}
          </p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <p>${event.formattedMessage}</p>
        </div>
        
        ${Object.keys(event.fields as object || {}).length > 0 ? `
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">Event Data</h3>
            ${Object.entries(event.fields as object || {}).map(([key, value]) => 
              `<p style="margin: 5px 0;"><strong>${key}:</strong> ${value}</p>`
            ).join('')}
          </div>
        ` : ''}
        
        <div style="border-top: 1px solid #dee2e6; padding-top: 15px; color: #6c757d; font-size: 12px;">
          Event ID: ${event.id}
          ${event.source ? ` • Source: ${event.source}` : ''}
          ${event.correlationId ? ` • Correlation ID: ${event.correlationId}` : ''}
        </div>
      </div>
    `
  }

  private async checkForDuplicates(event: Event, windowMs: number): Promise<boolean> {
    const windowStart = new Date(event.createdAt.getTime() - windowMs)
    
    const duplicate = await db.event.findFirst({
      where: {
        userId: event.userId,
        name: event.name,
        formattedMessage: event.formattedMessage,
        createdAt: {
          gte: windowStart,
          lt: event.createdAt,
        },
      },
    })

    return !!duplicate
  }

  private getSeverityEmoji(severity: Severity): string {
    const emojiMap = {
      DEBUG: "🐛",
      INFO: "ℹ️",
      WARNING: "⚠️",
      ERROR: "❌",
      CRITICAL: "🚨",
    }
    return emojiMap[severity] || "📢"
  }

  private getSeverityColor(severity: Severity): number {
    const colorMap = {
      DEBUG: 0x6c757d,
      INFO: 0x17a2b8,
      WARNING: 0xffc107,
      ERROR: 0xdc3545,
      CRITICAL: 0xff0000,
    }
    return colorMap[severity] || 0x17a2b8
  }
}
