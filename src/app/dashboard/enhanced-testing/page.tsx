"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Send, 
  Copy, 
  AlertCircle, 
  CheckCircle, 
  Code,
  Zap,
  Bell,
  Settings
} from "lucide-react"
import { Heading } from "@/components/heading"
import { useUser } from "@clerk/nextjs"

// Dynamic examples based on user context
const generateExampleRequests = (userEmail?: string) => ({
  basic: {
    category: "sales",
    fields: {
      userId: "user_abc123",
      email: userEmail || "customer@example.com",
      amount: 99.99,
      plan: "pro"
    },
    description: "New user upgrade to Pro plan"
  } as any,
  enhanced: {
    category: "sales", 
    fields: {
      userId: "user_abc123",
      email: userEmail || "customer@example.com",
      amount: 99.99,
      plan: "pro",
      previousPlan: "free",
      currency: "USD",
      paymentMethod: "credit_card"
    },
    description: "User upgraded from Free to Pro plan",
    severity: "INFO",
    priority: "MEDIUM",
    source: "billing-service",
    correlationId: `corr_${Date.now()}`,
    tags: ["billing", "upgrade", "revenue"],
    metadata: {
      userAgent: navigator?.userAgent || "Unknown",
      ipAddress: "192.168.1.100",
      sessionId: `sess_${Date.now()}`,
      environment: "production",
      version: "v2.1.0",
      customData: {
        campaignId: "launch2024",
        referralSource: "organic"
      }
    }
  } as any,
  critical: {
    category: "system-alert",
    fields: {
      service: "payment-processor",
      errorCode: "CONN_TIMEOUT",
      affectedUsers: 1247,
      downtime: "2m 34s"
    },
    description: "Payment processor experiencing connection timeouts",
    severity: "CRITICAL",
    priority: "CRITICAL", 
    source: "monitoring-service",
    tags: ["system", "payment", "outage", "urgent"],
    metadata: {
      environment: "production",
      region: "us-east-1",
      timestamp: new Date().toISOString(),
      customData: {
        alertRuleId: "rule_payment_health",
        threshold: "5s",
        actualLatency: "12.4s"
      }
    }
  } as any
})

export default function EnhancedNotificationTesting() {
  const { user } = useUser()
  const [EXAMPLE_REQUESTS, setExampleRequests] = useState(generateExampleRequests())
  const [selectedExample, setSelectedExample] = useState<keyof ReturnType<typeof generateExampleRequests>>("enhanced")
  const [requestBody, setRequestBody] = useState("")
  const [response, setResponse] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [apiKey, setApiKey] = useState("")

  // Update examples when user data is available
  useEffect(() => {
    const examples = generateExampleRequests(user?.emailAddresses[0]?.emailAddress)
    setExampleRequests(examples)
    setRequestBody(JSON.stringify(examples.enhanced, null, 2))
  }, [user])

  const handleExampleChange = (example: keyof ReturnType<typeof generateExampleRequests>) => {
    setSelectedExample(example)
    setRequestBody(JSON.stringify(EXAMPLE_REQUESTS[example], null, 2))
  }

  const sendTestEvent = async () => {
    if (!apiKey) {
      alert("Please enter your API key")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/v1/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: requestBody
      })
      
      const data = await response.json()
      setResponse({ status: response.status, data })
    } catch (error) {
      setResponse({ 
        status: 'ERROR', 
        data: { message: error instanceof Error ? error.message : 'Unknown error' }
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      <div>
        <Heading className="text-3xl mb-2">Enhanced Notification Testing</Heading>
        <p className="text-gray-600">
          Test the new enhanced notification system with rich metadata, severity levels, and advanced routing.
        </p>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <Zap className="size-8 text-blue-500 mx-auto mb-2" />
          <h3 className="font-semibold">Rich Metadata</h3>
          <p className="text-sm text-gray-600">Include detailed context and custom data</p>
        </Card>
        
        <Card className="p-4 text-center">
          <AlertCircle className="size-8 text-orange-500 mx-auto mb-2" />
          <h3 className="font-semibold">Severity Levels</h3>
          <p className="text-sm text-gray-600">DEBUG, INFO, WARNING, ERROR, CRITICAL</p>
        </Card>
        
        <Card className="p-4 text-center">
          <Settings className="size-8 text-purple-500 mx-auto mb-2" />
          <h3 className="font-semibold">Smart Routing</h3>
          <p className="text-sm text-gray-600">Route events based on conditions</p>
        </Card>
        
        <Card className="p-4 text-center">
          <Bell className="size-8 text-green-500 mx-auto mb-2" />
          <h3 className="font-semibold">Multi-Channel</h3>
          <p className="text-sm text-gray-600">Discord, Webhook, Email, and more</p>
        </Card>
      </div>

      <Tabs defaultValue="test" className="space-y-6">
        <TabsList>
          <TabsTrigger value="test">Test Events</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="docs">API Documentation</TabsTrigger>
        </TabsList>

        <TabsContent value="test" className="space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="Enter your API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label>Quick Examples</Label>
                <div className="flex gap-2 mt-2">
                  {Object.keys(EXAMPLE_REQUESTS).map((key) => (
                    <Button
                      key={key}
                      variant={selectedExample === key ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleExampleChange(key as keyof ReturnType<typeof generateExampleRequests>)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Request Body</Label>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(requestBody)}
                    className="flex items-center gap-1"
                  >
                    <Copy className="size-3" />
                    Copy
                  </Button>
                </div>
                <textarea
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                  className="w-full h-96 p-3 border rounded-md font-mono text-sm"
                  placeholder="Enter your event JSON..."
                />
              </div>

              <Button 
                onClick={sendTestEvent} 
                disabled={isLoading || !apiKey}
                className="flex items-center gap-2"
              >
                <Send className="size-4" />
                {isLoading ? "Sending..." : "Send Test Event"}
              </Button>
            </div>
          </Card>

          {response && (
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {response.status === 200 ? (
                  <CheckCircle className="size-5 text-green-500" />
                ) : (
                  <AlertCircle className="size-5 text-red-500" />
                )}
                <h3 className="font-semibold">
                  Response ({response.status})
                </h3>
              </div>
              <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          {Object.entries(EXAMPLE_REQUESTS).map(([key, example]: [string, any]) => (
            <Card key={key} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold capitalize">{key} Event</h3>
                <div className="flex gap-2">
                  {example.severity && (
                    <Badge className={
                      example.severity === "CRITICAL" ? "bg-red-100 text-red-800" :
                      example.severity === "ERROR" ? "bg-orange-100 text-orange-800" :
                      example.severity === "WARNING" ? "bg-yellow-100 text-yellow-800" :
                      "bg-blue-100 text-blue-800"
                    }>
                      {example.severity}
                    </Badge>
                  )}
                  {example.priority && (
                    <Badge variant="outline">{example.priority}</Badge>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{example.description}</p>
              
              <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
                {JSON.stringify(example, null, 2)}
              </pre>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4"
                onClick={() => handleExampleChange(key as keyof ReturnType<typeof generateExampleRequests>)}
              >
                Use This Example
              </Button>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="docs" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code className="size-5" />
              Enhanced API Documentation
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">New Request Schema</h4>
                <div className="bg-gray-100 p-4 rounded-md">
                  <pre className="text-sm">{`{
  "category": "string",           // Required: Event category name
  "fields": {...},               // Optional: Event data fields
  "description": "string",       // Optional: Event description
  "severity": "DEBUG|INFO|WARNING|ERROR|CRITICAL", // New!
  "priority": "LOW|MEDIUM|HIGH|CRITICAL",          // New!
  "source": "string",            // New: Source service/system
  "correlationId": "string",     // New: For event correlation
  "parentEventId": "string",     // New: For event hierarchies
  "tags": ["string"],            // New: Searchable tags
  "metadata": {                  // New: Rich metadata
    "userAgent": "string",
    "ipAddress": "string",
    "sessionId": "string",
    "environment": "development|staging|production",
    "version": "string",
    "customData": {...}
  }
}`}</pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Enhanced Response</h4>
                <div className="bg-gray-100 p-4 rounded-md">
                  <pre className="text-sm">{`{
  "message": "Event processed successfully",
  "eventId": "clx123...",
  "notifications": [
    {
      "success": true,
      "notificationId": "not_456...",
      "duration": 245
    }
  ],
  "metrics": {
    "totalProcessingTime": 245,
    "successfulNotifications": 1,
    "totalNotifications": 1
  }
}`}</pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">New Features</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-500 mt-0.5" />
                    <span><strong>Severity Levels:</strong> Classify events by importance (DEBUG to CRITICAL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-500 mt-0.5" />
                    <span><strong>Priority System:</strong> Set processing priority (LOW to CRITICAL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-500 mt-0.5" />
                    <span><strong>Event Correlation:</strong> Link related events with correlation IDs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-500 mt-0.5" />
                    <span><strong>Rich Metadata:</strong> Include detailed context and environment info</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-500 mt-0.5" />
                    <span><strong>Tagging System:</strong> Organize events with searchable tags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-green-500 mt-0.5" />
                    <span><strong>Performance Metrics:</strong> Track processing times and success rates</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
