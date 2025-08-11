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

  // Mock data for demonstration
  const { data: channels = [] } = useQuery({
    queryKey: ["notification-channels"],
    queryFn: async () => {
      // This would be a real API call
      return [
        {
          id: "1",
          name: "Discord Alerts",
          type: "DISCORD", 
          isActive: true,
          priority: "HIGH",
          config: { userId: "123456789" }
        },
        {
          id: "2",
          name: "Webhook Integration",
          type: "WEBHOOK",
          isActive: false,
          priority: "MEDIUM", 
          config: { url: "https://api.example.com/webhook" }
        }
      ] as NotificationChannel[]
    }
  })

  const { data: recentEvents = [] } = useQuery({
    queryKey: ["enhanced-events"],
    queryFn: async () => {
      // This would be a real API call
      return [
        {
          id: "1",
          name: "user-signup",
          severity: "INFO",
          priority: "MEDIUM",
          source: "auth-service",
          tags: ["user", "signup", "onboarding"],
          createdAt: new Date().toISOString(),
          deliveryStatus: "DELIVERED",
          processingDuration: 245
        },
        {
          id: "2", 
          name: "payment-failed",
          severity: "ERROR",
          priority: "HIGH",
          source: "payment-service",
          tags: ["payment", "error", "billing"],
          createdAt: new Date(Date.now() - 300000).toISOString(),
          deliveryStatus: "FAILED",
          processingDuration: 1200
        },
        {
          id: "3",
          name: "system-alert",
          severity: "CRITICAL",
          priority: "CRITICAL",
          source: "monitoring",
          tags: ["system", "performance", "alert"],
          createdAt: new Date(Date.now() - 600000).toISOString(),
          deliveryStatus: "DELIVERED",
          processingDuration: 89
        }
      ] as EnhancedEvent[]
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
                {Math.round((recentEvents.filter(e => e.deliveryStatus === "DELIVERED").length / recentEvents.length) * 100)}%
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
                {Math.round(recentEvents.reduce((sum, e) => sum + (e.processingDuration || 0), 0) / recentEvents.length)}ms
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
            {recentEvents.map((event) => (
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
                    {event.tags.map((tag) => (
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
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Detailed analytics and metrics will be displayed here, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
              <li>Event volume over time</li>
              <li>Delivery success rates by channel</li>
              <li>Processing latency metrics</li>
              <li>Error patterns and trends</li>
              <li>Channel performance comparison</li>
            </ul>
          </Card>
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
