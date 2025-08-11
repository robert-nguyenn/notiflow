import { z } from "zod"
import { CATEGORY_NAME_VALIDATOR } from "./category-validator"

export const SEVERITY_ENUM = z.enum(["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"])
export const PRIORITY_ENUM = z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"])

export const EVENT_FIELDS_VALIDATOR = z.record(
  z.string(),
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.object({}).passthrough(), // Allow nested objects
    z.array(z.any()), // Allow arrays
  ])
)

export const EVENT_METADATA_VALIDATOR = z.object({
  userAgent: z.string().optional(),
  ipAddress: z.string().optional(),
  sessionId: z.string().optional(),
  requestId: z.string().optional(),
  environment: z.enum(["development", "staging", "production"]).optional(),
  version: z.string().optional(),
  customData: z.record(z.any()).optional(),
}).optional()

export const CREATE_EVENT_VALIDATOR = z.object({
  category: CATEGORY_NAME_VALIDATOR,
  fields: EVENT_FIELDS_VALIDATOR.optional(),
  description: z.string().optional(),
  severity: SEVERITY_ENUM.default("INFO"),
  priority: PRIORITY_ENUM.default("MEDIUM"),
  source: z.string().optional(),
  correlationId: z.string().optional(),
  parentEventId: z.string().optional(),
  tags: z.array(z.string()).default([]),
  metadata: EVENT_METADATA_VALIDATOR,
}).strict()

export const ENHANCED_EVENT_VALIDATOR = CREATE_EVENT_VALIDATOR.extend({
  templateId: z.string().optional(),
  routingRules: z.array(z.string()).optional(),
  scheduledFor: z.string().datetime().optional(),
  retryConfig: z.object({
    maxRetries: z.number().min(0).max(10).default(3),
    retryDelay: z.number().min(100).max(300000).default(1000),
    backoffMultiplier: z.number().min(1).max(5).default(2),
  }).optional(),
})

export type CreateEventRequest = z.infer<typeof CREATE_EVENT_VALIDATOR>
export type EnhancedEventRequest = z.infer<typeof ENHANCED_EVENT_VALIDATOR>
