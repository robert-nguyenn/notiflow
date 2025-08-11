import { db } from "@/db"
import { NextRequest, NextResponse } from "next/server"
import { startOfDay, startOfWeek, startOfMonth, subDays } from "date-fns"

export const GET = async (req: NextRequest) => {
  try {
    const authHeader = req.headers.get("Authorization")
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const apiKey = authHeader.split(" ")[1]
    
    const user = await db.user.findUnique({
      where: { apiKey },
      include: { 
        events: {
          orderBy: { createdAt: 'desc' },
          take: 100,
          include: {
            EventCategory: {
              select: { name: true, emoji: true, color: true }
            }
          }
        },
        EventCategories: true
      },
    })

    if (!user) {
      return NextResponse.json({ message: "Invalid API key" }, { status: 401 })
    }

    const searchParams = req.nextUrl.searchParams
    const timeRange = searchParams.get("range") || "24h"
    
    // Calculate time boundaries
    const now = new Date()
    let startDate: Date
    
    switch (timeRange) {
      case "1h":
        startDate = new Date(now.getTime() - 60 * 60 * 1000)
        break
      case "24h":
        startDate = startOfDay(now)
        break
      case "7d":
        startDate = startOfWeek(now)
        break
      case "30d":
        startDate = startOfMonth(now)
        break
      default:
        startDate = startOfDay(now)
    }

    // Filter events by time range
    const recentEvents = user.events.filter(event => 
      new Date(event.createdAt) >= startDate
    )

    // Calculate analytics
    const totalEvents = recentEvents.length
    const deliveredEvents = recentEvents.filter(e => e.deliveryStatus === "DELIVERED").length
    const successRate = totalEvents > 0 ? (deliveredEvents / totalEvents) * 100 : 0
    
    const processingTimes = recentEvents
      .map(e => e.processingDuration)
      .filter(Boolean) as number[]
    const avgProcessingTime = processingTimes.length > 0 
      ? Math.round(processingTimes.reduce((sum, time) => sum + time, 0) / processingTimes.length)
      : 0

    // Events by category
    const eventsByCategory = user.EventCategories.map(category => {
      const categoryEvents = recentEvents.filter(e => e.eventCategoryId === category.id)
      const previousPeriodStart = new Date(startDate.getTime() - (now.getTime() - startDate.getTime()))
      const previousPeriodEvents = user.events.filter(e => 
        new Date(e.createdAt) >= previousPeriodStart && 
        new Date(e.createdAt) < startDate &&
        e.eventCategoryId === category.id
      )
      
      const change = previousPeriodEvents.length > 0 
        ? ((categoryEvents.length - previousPeriodEvents.length) / previousPeriodEvents.length) * 100
        : categoryEvents.length > 0 ? 100 : 0

      return {
        category: category.name,
        count: categoryEvents.length,
        change: Math.round(change * 10) / 10
      }
    })

    // Events by severity (if enhanced data exists)
    const severityCounts = {
      DEBUG: 0,
      INFO: 0,
      WARNING: 0,
      ERROR: 0,
      CRITICAL: 0
    }

    recentEvents.forEach(event => {
      // For now, default to INFO if no severity data
      const severity = (event as any).severity || "INFO"
      if (severity in severityCounts) {
        severityCounts[severity as keyof typeof severityCounts]++
      }
    })

    const eventsBySeverity = Object.entries(severityCounts).map(([severity, count]) => ({
      severity,
      count,
      percentage: totalEvents > 0 ? Math.round((count / totalEvents) * 100 * 10) / 10 : 0
    }))

    // Mock channel performance (extend when notification channels are implemented)
    const channelPerformance = [
      {
        channel: "Discord",
        success: Math.round(successRate * 10) / 10,
        total: deliveredEvents,
        avg_time: avgProcessingTime
      }
    ]

    return NextResponse.json({
      totalEvents,
      successRate: Math.round(successRate * 10) / 10,
      avgProcessingTime,
      activeChannels: 1, // Discord for now
      recentEvents: recentEvents.slice(0, 10).map(event => ({
        id: event.id,
        name: event.name,
        severity: (event as any).severity || "INFO",
        status: event.deliveryStatus,
        time: event.createdAt,
        category: event.EventCategory?.name,
        processingDuration: event.processingDuration
      })),
      eventsByCategory,
      eventsBySeverity,
      channelPerformance,
      trendsData: [], // TODO: Implement time-series data
    })

  } catch (error) {
    console.error("Analytics API error:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
