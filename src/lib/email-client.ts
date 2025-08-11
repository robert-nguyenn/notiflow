interface EmailData {
  to: string | string[]
  cc?: string | string[]
  bcc?: string | string[]
  subject: string
  html: string
  templateId?: string
}

export class EmailClient {
  private apiKey: string
  private baseUrl: string

  constructor() {
    // Use Resend as the default email service (you can switch to others)
    this.apiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY || ""
    this.baseUrl = "https://api.resend.com"
  }

  async send(emailData: EmailData): Promise<void> {
    if (!this.apiKey) {
      console.warn("No email API key configured, skipping email send")
      return
    }

    try {
      // Using Resend API (you can modify for other providers)
      const response = await fetch(`${this.baseUrl}/emails`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'notifications@notifyflow.com',
          to: Array.isArray(emailData.to) ? emailData.to : [emailData.to],
          cc: emailData.cc,
          bcc: emailData.bcc,
          subject: emailData.subject,
          html: emailData.html,
        }),
      })

      if (!response.ok) {
        throw new Error(`Email send failed: ${response.statusText}`)
      }

      const result = await response.json()
      console.log("Email sent successfully:", result.id)

    } catch (error) {
      console.error("Email send error:", error)
      throw error
    }
  }

  // Helper method to send notification emails
  async sendNotification(event: any, userEmail: string): Promise<void> {
    const subject = `[NotifyFlow] ${event.EventCategory?.name || 'Event'} - ${event.severity || 'INFO'}`
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">NotifyFlow</h1>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; margin-bottom: 20px;">
            ${event.EventCategory?.emoji || '📢'} ${event.EventCategory?.name || 'Event'} Notification
          </h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Event Details</h3>
            <p><strong>Message:</strong> ${event.formattedMessage}</p>
            <p><strong>Severity:</strong> <span style="background: ${this.getSeverityColor(event.severity)}; color: white; padding: 4px 8px; border-radius: 4px;">${event.severity || 'INFO'}</span></p>
            <p><strong>Time:</strong> ${new Date(event.createdAt).toLocaleString()}</p>
            <p><strong>Event ID:</strong> ${event.id}</p>
          </div>

          ${Object.keys(event.fields || {}).length > 0 ? `
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Event Data</h3>
            ${Object.entries(event.fields as object || {}).map(([key, value]) => 
              `<p><strong>${key}:</strong> ${value}</p>`
            ).join('')}
          </div>
          ` : ''}
        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
          <p>This notification was sent by NotifyFlow. You can manage your notification settings in your dashboard.</p>
        </div>
      </div>
    `

    await this.send({
      to: userEmail,
      subject,
      html,
    })
  }

  private getSeverityColor(severity: string): string {
    const colorMap: Record<string, string> = {
      DEBUG: '#6c757d',
      INFO: '#17a2b8', 
      WARNING: '#ffc107',
      ERROR: '#dc3545',
      CRITICAL: '#ff0000',
    }
    return colorMap[severity] || '#17a2b8'
  }
}
