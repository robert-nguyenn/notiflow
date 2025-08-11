interface WebhookConfig {
  url: string
  method: "POST" | "PUT" | "PATCH"
  headers?: Record<string, string>
  authentication?: {
    type: "bearer" | "basic" | "apikey"
    token: string
    headerName?: string
  }
  timeout: number
}

export class WebhookClient {
  async send(config: WebhookConfig, payload: any): Promise<void> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...config.headers,
    }

    // Add authentication
    if (config.authentication) {
      switch (config.authentication.type) {
        case "bearer":
          headers['Authorization'] = `Bearer ${config.authentication.token}`
          break
        case "basic":
          headers['Authorization'] = `Basic ${Buffer.from(config.authentication.token).toString('base64')}`
          break
        case "apikey":
          const headerName = config.authentication.headerName || 'X-API-Key'
          headers[headerName] = config.authentication.token
          break
      }
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), config.timeout)

    try {
      const response = await fetch(config.url, {
        method: config.method,
        headers,
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      if (!response.ok) {
        throw new Error(`Webhook request failed: ${response.status} ${response.statusText}`)
      }
    } finally {
      clearTimeout(timeout)
    }
  }
}
