"use client"

import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Modal } from "@/components/ui/modal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Plus, 
  Webhook, 
  Mail, 
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Zap
} from "lucide-react"

interface NotificationChannel {
  id: string
  name: string
  type: string
  isActive: boolean
  priority: string
  config: any
}

interface EnhancedEvent {
  id: string
  name: string
  severity: string
  priority: string
  source?: string
  tags: string[]
  createdAt: string
  deliveryStatus: string
  processingDuration?: number
}

export const EnhancedNotificationDashboard = () => {
  const [isChannelModalOpen, setIsChannelModalOpen] = useState(false)
  const [selectedChannelType, setSelectedChannelType] = useState<string>("DISCORD")
  const queryClient = useQueryClient()

  // Fetch real notification channels (when implemented)
  const { data: channels = [] } = useQuery({
    queryKey: ["notification-channels"],
    queryFn: async () => {
      // For now, return Discord as the default channel
      return [
        {
          id: "1",
          name: "Discord Notifications",
          type: "DISCORD", 
          isActive: true,
          priority: "HIGH",
          config: { note: "Configure your Discord ID in Account Settings" }
        }
      ] as NotificationChannel[]
    }
  })

  // Fetch real events data
  const { data: recentEvents = [] } = useQuery({
    queryKey: ["enhanced-events"],
    queryFn: async () => {
      try {
        // This would use the actual user's API key
        const response = await fetch('/api/v1/analytics?range=24h', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('userApiKey') || ''}`
          }
        })
        
        if (!response.ok) {
          // Return empty array if not configured yet
          return []
        }
        
        const data = await response.json()
        return data.recentEvents || []
      } catch (error) {
        console.error("Failed to fetch events:", error)
        return []
      }
    }
  })

  // Fetch real analytics data
  const { data: analytics } = useQuery({
    queryKey: ["enhanced-analytics"],
    queryFn: async () => {
      try {
        const response = await fetch('/api/v1/analytics?range=24h')
        
        if (!response.ok) {
          // Return default values if not configured yet
          return {
            totalEvents: 0,
            successRate: 100,
            avgProcessingTime: 0,
            criticalAlerts: 0,
            categoriesData: [],
            severityDistribution: []
          }
        }
        
        const data = await response.json()
        return {
          totalEvents: data.totalEvents || 0,
          successRate: data.successRate || 100,
          avgProcessingTime: data.avgProcessingTime || 0,
          criticalAlerts: data.criticalAlerts || 0,
          categoriesData: data.categoriesData || [],
          severityDistribution: data.severityDistribution || []
        }
      } catch (error) {
        console.error("Failed to fetch analytics:", error)
        return {
          totalEvents: 0,
          successRate: 100,
          avgProcessingTime: 0,
          criticalAlerts: 0,
          categoriesData: [],
          severityDistribution: []
        }
      }
    }
  })

  const getChannelIcon = (type: string) => {
    switch (type) {
      case "DISCORD": return <MessageSquare className="size-4" />
      case "WEBHOOK": return <Webhook className="size-4" />
      case "EMAIL": return <Mail className="size-4" />
      default: return <Settings className="size-4" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "DELIVERED": return <CheckCircle className="size-4 text-green-500" />
      case "FAILED": return <XCircle className="size-4 text-red-500" />
      case "PENDING": return <Clock className="size-4 text-yellow-500" />
      default: return <AlertTriangle className="size-4 text-gray-500" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "CRITICAL": return "bg-red-100 text-red-800"
      case "ERROR": return "bg-orange-100 text-orange-800"
      case "WARNING": return "bg-yellow-100 text-yellow-800"
      case "INFO": return "bg-blue-100 text-blue-800"
      case "DEBUG": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "CRITICAL": return "bg-red-500"
      case "HIGH": return "bg-orange-500"
      case "MEDIUM": return "bg-yellow-500"
      case "LOW": return "bg-green-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Enhanced Notifications</h1>
          <p className="text-gray-600 mt-1">
            Manage your notification channels and monitor event processing
          </p>
        </div>
        <Button onClick={() => setIsChannelModalOpen(true)} className="flex items-center gap-2">
          <Plus className="size-4" />
          Add Channel
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Channels</p>
              <p className="text-2xl font-bold">{channels.filter(c => c.isActive).length}</p>
            </div>
            <Settings className="size-8 text-blue-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Events Today</p>
              <p className="text-2xl font-bold">{recentEvents.length}</p>
            </div>
            <Zap className="size-8 text-green-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold">
                {recentEvents.length > 0 
                  ? Math.round((recentEvents.filter((e: any) => e.deliveryStatus === "DELIVERED").length / recentEvents.length) * 100)
                  : 100}%
              </p>
            </div>
            <CheckCircle className="size-8 text-emerald-500" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Processing</p>
              <p className="text-2xl font-bold">
                {recentEvents.length > 0 
                  ? Math.round(recentEvents.reduce((sum: number, e: any) => sum + (e.processingDuration || 0), 0) / recentEvents.length)
                  : 0}ms
              </p>
            </div>
            <Clock className="size-8 text-purple-500" />
          </div>
        </Card>
      </div>

      <Tabs defaultValue="channels" className="space-y-6">
        <TabsList>
          <TabsTrigger value="channels">Notification Channels</TabsTrigger>
          <TabsTrigger value="events">Recent Events</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="channels" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.map((channel) => (
              <Card key={channel.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getChannelIcon(channel.type)}
                    <h3 className="font-semibold">{channel.name}</h3>
                  </div>
                  <Badge variant={channel.isActive ? "default" : "secondary"}>
                    {channel.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Type:</span> {channel.type}</p>
                  <p><span className="font-medium">Priority:</span> {channel.priority}</p>
                  {channel.type === "WEBHOOK" && (
                    <p><span className="font-medium">URL:</span> {channel.config.url}</p>
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Test</Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="space-y-3">
            {recentEvents.map((event: any) => (
              <Card key={event.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(event.deliveryStatus)}
                    <div>
                      <h3 className="font-semibold">{event.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getSeverityColor(event.severity)}>
                          {event.severity}
                        </Badge>
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(event.priority)}`} />
                        {event.source && (
                          <span className="text-sm text-gray-500">from {event.source}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {new Date(event.createdAt).toLocaleTimeString()}
                    </p>
                    {event.processingDuration && (
                      <p className="text-xs text-gray-400">
                        {event.processingDuration}ms
                      </p>
                    )}
                  </div>
                </div>

                {event.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {event.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          {/* Analytics Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Events</p>
                  <p className="text-2xl font-bold">{analytics?.totalEvents || 0}</p>
                </div>
                <Zap className="size-8 text-blue-500" />
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold">{analytics?.successRate || 100}%</p>
                </div>
                <CheckCircle className="size-8 text-green-500" />
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Processing</p>
                  <p className="text-2xl font-bold">{analytics?.avgProcessingTime || 0}ms</p>
                </div>
                <Clock className="size-8 text-orange-500" />
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Critical Alerts</p>
                  <p className="text-2xl font-bold">{analytics?.criticalAlerts || 0}</p>
                </div>
                <AlertTriangle className="size-8 text-red-500" />
              </div>
            </Card>
          </div>

          {/* Categories Performance */}
          {analytics?.categoriesData && analytics.categoriesData.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Category Performance</h3>
              <div className="space-y-3">
                {analytics.categoriesData.map((category: any) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <span className="font-medium">{category.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">{category.count} events</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-blue-500 rounded-full" 
                          style={{ width: `${(category.count / analytics.totalEvents) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Severity Distribution */}
          {analytics?.severityDistribution && analytics.severityDistribution.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Severity Distribution</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {analytics.severityDistribution.map((severity: any) => (
                  <div key={severity.severity} className="text-center">
                    <div className={`p-3 rounded-lg ${getSeverityColor(severity.severity)}`}>
                      <p className="font-semibold">{severity.severity}</p>
                      <p className="text-lg font-bold">{severity.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* No Data State */}
          {(!analytics || analytics.totalEvents === 0) && (
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">No Analytics Data Yet</h3>
              <p className="text-gray-600 mb-4">
                Start sending events to see detailed analytics and metrics here.
              </p>
              <Button onClick={() => window.location.href = '/dashboard/enhanced-testing'}>
                Send Test Events
              </Button>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Create Channel Modal */}
      <Modal 
        showModal={isChannelModalOpen} 
        setShowModal={setIsChannelModalOpen}
        className="max-w-2xl p-6"
      >
        <h2 className="text-xl font-semibold mb-4">Create Notification Channel</h2>
        
        <div className="space-y-4">
          <div>
            <Label>Channel Type</Label>
            <div className="flex gap-3 mt-2">
              {["DISCORD", "WEBHOOK", "EMAIL"].map((type) => (
                <Button
                  key={type}
                  variant={selectedChannelType === type ? "default" : "outline"}
                  onClick={() => setSelectedChannelType(type)}
                  className="flex items-center gap-2"
                >
                  {getChannelIcon(type)}
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="channelName">Channel Name</Label>
            <Input 
              id="channelName" 
              placeholder="e.g., production-alerts" 
              className="mt-1"
            />
          </div>

          {selectedChannelType === "WEBHOOK" && (
            <div>
              <Label htmlFor="webhookUrl">Webhook URL</Label>
              <Input 
                id="webhookUrl" 
                placeholder="https://api.example.com/webhook" 
                className="mt-1"
              />
            </div>
          )}

          {selectedChannelType === "EMAIL" && (
            <div>
              <Label htmlFor="emailTo">Email Recipients</Label>
              <Input 
                id="emailTo" 
                placeholder="alerts@company.com" 
                className="mt-1"
              />
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={() => setIsChannelModalOpen(false)}
            >
              Cancel
            </Button>
            <Button>Create Channel</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
