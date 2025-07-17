# Clock Skew Fix Instructions

The JWT clock skew error you're experiencing is a common development issue. Here are the solutions:

## Quick Fixes:

### 1. Sync Your System Clock
- **Windows**: 
  - Right-click on the clock in the taskbar
  - Select "Adjust date/time"
  - Turn OFF "Set time automatically" and then turn it back ON
  - Or run: `w32tm /resync` in Command Prompt as Administrator

### 2. Clerk Development Settings
In your Clerk Dashboard (dashboard.clerk.com):
- Go to Configure → Sessions
- Enable "Allow clock skew" for development
- Set clock skew tolerance to 60 seconds

### 3. Environment Variables
Add to your `.env.local` file:
```
CLERK_JWT_VERIFICATION_OPTIONS='{"clockTolerance": "60s"}'
```

### 4. If Still Having Issues
- Clear browser cookies and localStorage
- Restart your development server
- Try incognito/private browsing mode

## The changes I made:

1. **Enhanced Cards Layout**: Added proper min-heights to prevent stretching
2. **Fixed Branding**: Changed "PingPanda" to "NotifyFlow" throughout the codebase
3. **Improved Clerk Styling**: Added custom appearance to match your brand
4. **Added Debug Mode**: Enhanced middleware for better error reporting in development

Your app should now look much better with properly sized cards and consistent branding!
