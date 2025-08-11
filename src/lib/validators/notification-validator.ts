import { z } from "zod"

export const CHANNEL_TYPE_ENUM = z.enum([
  "DISCORD",
  "WEBHOOK", 
  "EMAIL",
  "SLACK",
  "TEAMS",
  "SMS",
  "PUSH"
])

export const DISCORD_CONFIG_VALIDATOR = z.object({
  userId: z.string(),
  embedColor: z.string().optional(),
  includeTimestamp: z.boolean().default(true),
  mentionUser: z.boolean().default(false),
})

export const WEBHOOK_CONFIG_VALIDATOR = z.object({
  url: z.string().url(),
  method: z.enum(["POST", "PUT", "PATCH"]).default("POST"),
  headers: z.record(z.string()).optional(),
  authentication: z.object({
    type: z.enum(["bearer", "basic", "apikey"]),
    token: z.string(),
    headerName: z.string().optional(),
  }).optional(),
  timeout: z.number().min(1000).max(30000).default(5000),
})

export const EMAIL_CONFIG_VALIDATOR = z.object({
  to: z.union([z.string().email(), z.array(z.string().email())]),
  cc: z.union([z.string().email(), z.array(z.string().email())]).optional(),
  bcc: z.union([z.string().email(), z.array(z.string().email())]).optional(),
  subject: z.string().optional(),
  templateId: z.string().optional(),
})

export const NOTIFICATION_CHANNEL_VALIDATOR = z.object({
  name: z.string().min(1).max(50),
  type: CHANNEL_TYPE_ENUM,
  config: z.union([
    DISCORD_CONFIG_VALIDATOR,
    WEBHOOK_CONFIG_VALIDATOR,
    EMAIL_CONFIG_VALIDATOR,
    z.record(z.any()), // Allow other configurations
  ]),
  isActive: z.boolean().default(true),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]).default("MEDIUM"),
  retryConfig: z.object({
    maxRetries: z.number().min(0).max(10).default(3),
    retryDelay: z.number().min(100).max(300000).default(1000),
    backoffMultiplier: z.number().min(1).max(5).default(2),
  }).optional(),
})

export const ROUTING_CONDITION_VALIDATOR = z.object({
  field: z.string(),
  operator: z.enum(["equals", "contains", "startsWith", "endsWith", "regex", "gt", "lt", "gte", "lte"]),
  value: z.union([z.string(), z.number(), z.boolean()]),
  caseSensitive: z.boolean().default(false),
})

export const ROUTING_RULE_VALIDATOR = z.object({
  name: z.string().min(1).max(100),
  conditions: z.object({
    logic: z.enum(["AND", "OR"]).default("AND"),
    rules: z.array(ROUTING_CONDITION_VALIDATOR),
  }),
  actions: z.object({
    channels: z.array(z.string()).min(1),
    template: z.string().optional(),
    delay: z.number().min(0).max(86400000).optional(), // Max 24 hours
    suppressDuplicates: z.boolean().default(false),
    aggregateWindow: z.number().min(0).max(3600000).optional(), // Max 1 hour
  }),
  priority: z.number().min(0).max(100).default(0),
  isActive: z.boolean().default(true),
})

export type NotificationChannelConfig = z.infer<typeof NOTIFICATION_CHANNEL_VALIDATOR>
export type RoutingRuleConfig = z.infer<typeof ROUTING_RULE_VALIDATOR>
