import { db } from "@/db"
import { Event } from "@prisma/client"
import { DiscordClient } from "./discord-client"

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

  constructor() {
    this.discordClient = new DiscordClient(process.env.DISCORD_BOT_TOKEN)
  }

  async processEvent(context: NotificationContext): Promise<ProcessingResult[]> {
    const startTime = Date.now()
    const { event, user } = context

    try {
      // For now, use the default Discord notification behavior
      // This maintains compatibility while we fix the Prisma client issues
      return [await this.processDefaultNotification(context)]

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

      return {
        success: true,
        notificationId: "discord-default",
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

  private buildDiscordEmbed(event: Event) {
    const category = (event as any).EventCategory
    
    // Get severity and priority from the event if they exist
    const severity = (event as any).severity || "INFO"
    const priority = (event as any).priority || "MEDIUM"
    
    return {
      title: `${category?.emoji || this.getSeverityEmoji(severity)} ${
        category?.name ? category.name.charAt(0).toUpperCase() + category.name.slice(1) : "Event"
      }`,
      description: event.formattedMessage,
      color: category?.color || this.getSeverityColor(severity),
      timestamp: new Date().toISOString(),
      fields: [
        {
          name: "Severity",
          value: severity,
          inline: true,
        },
        {
          name: "Priority", 
          value: priority,
          inline: true,
        },
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

  private getSeverityEmoji(severity: string): string {
    const emojiMap: Record<string, string> = {
      DEBUG: "🐛",
      INFO: "ℹ️",
      WARNING: "⚠️",
      ERROR: "❌",
      CRITICAL: "🚨",
    }
    return emojiMap[severity] || "📢"
  }

  private getSeverityColor(severity: string): number {
    const colorMap: Record<string, number> = {
      DEBUG: 0x6c757d,
      INFO: 0x17a2b8,
      WARNING: 0xffc107,
      ERROR: 0xdc3545,
      CRITICAL: 0xff0000,
    }
    return colorMap[severity] || 0x17a2b8
  }
}
