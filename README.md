# 🐼 PingPanda - Enhanced Event Monitoring Platform

> Production-ready full-stack platform with advanced notification features and enterprise-grade analytics

[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2+-black.svg)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🚀 Overview

An advanced event monitoring and notification system that has been enhanced with enterprise-level features including severity levels, priority systems, rich metadata, multi-channel routing, analytics, and production-ready integrations.

## ⚡ Tech Stack

**Frontend**: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, React Query  
**Backend**: Prisma ORM, PostgreSQL (Neon), tRPC  
**Integrations**: Discord API, Resend Email, Clerk Auth, Stripe  
**Infrastructure**: Vercel-ready deployment with production optimizations

## ✨ Enhanced Features

### 🎯 **Advanced Notification System**
- **Severity Levels**: INFO, WARNING, ERROR, CRITICAL with color-coded routing
- **Priority System**: LOW, MEDIUM, HIGH, CRITICAL with escalation logic
- **Rich Metadata**: Source tracking, correlation IDs, custom tags
- **Multi-Channel Routing**: Discord, Email, Webhooks with intelligent fallbacks

### 📊 **Real-Time Analytics Dashboard**
- Live event metrics and success rates
- Category performance analysis
- Severity distribution tracking
- Processing time monitoring
- Custom date range filtering

### � **Production-Ready Features**
- Dynamic user data integration (no hardcoded test data)
- Real email service with Resend API
- Comprehensive analytics API
- Environment-based configuration
- Error handling and logging

### 🔌 **Developer Experience**
- Interactive testing interface for all notification features
- API documentation with real examples
- Type-safe development with TypeScript
- Hot-reload development environment

## 🛠️ Local Development Setup

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (or Neon cloud database)
- Discord Bot Token
- Resend API Key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pingpanda-enhanced.git
cd pingpanda-enhanced

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Fill in your API keys and database URL

# Setup database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/pingpanda"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""

# Discord Integration
DISCORD_BOT_TOKEN=""

# Email Service
RESEND_API_KEY=""
EMAIL_FROM="notifications@yourdomain.com"

# Stripe (for subscriptions)
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""

# Deployment
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 🚀 Production Deployment

### Deploy to Vercel

1. **Prepare Environment Variables**
   ```bash
   # Set all production environment variables in Vercel dashboard
   DATABASE_URL="your-production-db-url"
   DISCORD_BOT_TOKEN="your-bot-token"
   RESEND_API_KEY="your-resend-key"
   # ... other variables from .env.example
   ```

2. **Deploy with Vercel CLI**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Database Migration**
   ```bash
   # Run after deployment
   npx prisma db push
   ```

### Manual Deployment Steps

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Database setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Start production server**
   ```bash
   npm start
   ```

## 📖 API Documentation

### Enhanced Notification Endpoint

**POST** `/api/v1/events`

```typescript
{
  "category": "user-signup",
  "fields": {
    "email": "user@example.com",
    "name": "John Doe"
  },
  // Enhanced fields
  "severity": "INFO" | "WARNING" | "ERROR" | "CRITICAL",
  "priority": "LOW" | "MEDIUM" | "HIGH" | "CRITICAL",
  "source": "auth-service",
  "correlationId": "req-123-456",
  "tags": ["user", "signup", "onboarding"],
  "channels": ["DISCORD", "EMAIL"],
  "metadata": {
    "userAgent": "Mozilla/5.0...",
    "ipAddress": "192.168.1.1"
  }
}
```

### Analytics Endpoint

**GET** `/api/v1/analytics`

Query parameters:
- `range`: `1h`, `6h`, `24h`, `7d`, `30d`
- `category`: Filter by specific category
- `severity`: Filter by severity level

## 🔧 Testing the Enhanced Features

1. **Navigate to Enhanced Testing**
   - Go to `/dashboard/enhanced-testing`
   - Try different severity levels and priority combinations
   - Test multi-channel routing

2. **View Analytics**
   - Check `/dashboard/enhanced-notifications` 
   - Monitor real-time metrics
   - Analyze event distribution

3. **Test Email Integration**
   - Ensure RESEND_API_KEY is configured
   - Send test notifications with EMAIL channel
   - Check email delivery in your inbox

## 🎯 Production Checklist

- [x] Remove all hardcoded/test data
- [x] Implement real email service (Resend)
- [x] Create comprehensive analytics API
- [x] Add dynamic user data integration
- [x] Fix deployment URL configuration
- [x] Add environment variable documentation
- [x] Create production deployment guide
- [x] Test all enhanced notification features
- [x] Verify real-time analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

---

**Built with enterprise-grade architecture and production-ready best practices.**
