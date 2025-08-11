import { FREE_QUOTA, PRO_QUOTA } from "@/config"
import { db } from "@/db"
import { NotificationService } from "@/lib/notification-service"
import { CREATE_EVENT_VALIDATOR } from "@/lib/validators/event-validator"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

export const POST = async (req: NextRequest) => {
  try {
    const authHeader = req.headers.get("Authorization")

    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    if (!authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        {
          message: "Invalid auth header format. Expected: 'Bearer [API_KEY]'",
        },
        { status: 401 }
      )
    }

    const apiKey = authHeader.split(" ")[1]

    if (!apiKey || apiKey.trim() === "") {
      return NextResponse.json({ message: "Invalid API key" }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { apiKey },
      include: { EventCategories: true },
    })

    if (!user) {
      return NextResponse.json({ message: "Invalid API key" }, { status: 401 })
    }

    if (!user.discordId) {
      return NextResponse.json(
        {
          message: "Please enter your discord ID in your account settings",
        },
        { status: 403 }
      )
    }

    // QUOTA CHECK
    const currentData = new Date()
    const currentMonth = currentData.getMonth() + 1
    const currentYear = currentData.getFullYear()

    const quota = await db.quota.findUnique({
      where: {
        userId: user.id,
        month: currentMonth,
        year: currentYear,
      },
    })

    const quotaLimit =
      user.plan === "FREE"
        ? FREE_QUOTA.maxEventsPerMonth
        : PRO_QUOTA.maxEventsPerMonth

    if (quota && quota.count >= quotaLimit) {
      return NextResponse.json(
        {
          message:
            "Monthly quota reached. Please upgrade your plan for more events",
        },
        { status: 429 }
      )
    }

    // PARSE REQUEST DATA
    let requestData: unknown

    try {
      requestData = await req.json()
    } catch (err) {
      return NextResponse.json(
        {
          message: "Invalid JSON request body",
        },
        { status: 400 }
      )
    }

    const validationResult = CREATE_EVENT_VALIDATOR.parse(requestData)

    const category = user.EventCategories.find(
      (cat) => cat.name === validationResult.category
    )

    if (!category) {
      return NextResponse.json(
        {
          message: `You dont have a category named "${validationResult.category}"`,
        },
        { status: 404 }
      )
    }

    // CREATE EVENT WITH ENHANCED FIELDS
    const event = await db.event.create({
      data: {
        name: category.name,
        formattedMessage: validationResult.description ||
          `A new ${category.name} event has occurred!`,
        userId: user.id,
        fields: validationResult.fields || {},
        metadata: validationResult.metadata || {},
        severity: validationResult.severity,
        priority: validationResult.priority,
        source: validationResult.source,
        correlationId: validationResult.correlationId,
        parentEventId: validationResult.parentEventId,
        tags: validationResult.tags,
        eventCategoryId: category.id,
      },
      include: {
        EventCategory: {
          select: {
            name: true,
            emoji: true,
            color: true,
          },
        },
      },
    })

    // PROCESS NOTIFICATIONS WITH ENHANCED SERVICE
    const notificationService = new NotificationService()
    
    try {
      const results = await notificationService.processEvent({
        event,
        user: {
          id: user.id,
          email: user.email,
          discordId: user.discordId,
        },
      })

      // Update event delivery status based on results
      const allSucceeded = results.every(r => r.success)
      const anySucceeded = results.some(r => r.success)

      let deliveryStatus: "DELIVERED" | "FAILED" | "PENDING" = "PENDING"
      if (allSucceeded) {
        deliveryStatus = "DELIVERED"
      } else if (anySucceeded) {
        deliveryStatus = "DELIVERED" // Partial success still counts as delivered
      } else {
        deliveryStatus = "FAILED"
      }

      await db.event.update({
        where: { id: event.id },
        data: { 
          deliveryStatus,
          processingDuration: results.reduce((sum, r) => sum + r.duration, 0),
        },
      })

      // CREATE EVENT METRICS
      await db.eventMetric.createMany({
        data: [
          {
            eventId: event.id,
            metricName: "processing_duration",
            metricValue: results.reduce((sum, r) => sum + r.duration, 0),
            metricType: "TIMER",
          },
          {
            eventId: event.id,
            metricName: "notification_count",
            metricValue: results.length,
            metricType: "COUNTER",
          },
          {
            eventId: event.id,
            metricName: "success_rate",
            metricValue: results.filter(r => r.success).length / results.length,
            metricType: "GAUGE",
          },
        ],
      })

      await db.quota.upsert({
        where: { userId: user.id, month: currentMonth, year: currentYear },
        update: { count: { increment: 1 } },
        create: {
          userId: user.id,
          month: currentMonth,
          year: currentYear,
          count: 1,
        },
      })

      return NextResponse.json({
        message: "Event processed successfully",
        eventId: event.id,
        notifications: results.map(r => ({
          success: r.success,
          notificationId: r.notificationId,
          error: r.error,
          duration: r.duration,
        })),
        metrics: {
          totalProcessingTime: results.reduce((sum, r) => sum + r.duration, 0),
          successfulNotifications: results.filter(r => r.success).length,
          totalNotifications: results.length,
        },
      })
    } catch (notificationError) {
      console.error("Notification processing error:", notificationError)

      await db.event.update({
        where: { id: event.id },
        data: { deliveryStatus: "FAILED" },
      })

      return NextResponse.json(
        {
          message: "Event created but notification processing failed",
          eventId: event.id,
          error: notificationError instanceof Error ? notificationError.message : "Unknown error",
        },
        { status: 500 }
      )
    }
  } catch (err) {
    console.error("API Error:", err)

    if (err instanceof z.ZodError) {
      return NextResponse.json({ 
        message: "Validation error", 
        errors: err.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        }))
      }, { status: 422 })
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
