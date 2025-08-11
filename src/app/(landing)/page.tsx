import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Check, Star, Zap, Shield, Target, Sparkles, Rocket, ArrowRight, Play, BarChart3, Clock, Users } from "lucide-react"
import { ShinyButton } from "@/components/shiny-button"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Icons } from "@/components/icons"

const Page = () => {
  const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "revenue_milestone",
    fields: {
      tier: "Enterprise",
      email: "ceo@techcorp.com",
      value: 250000,
      channel: "direct_sales"
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

  return (
    <>
      {/* Hero Section - Cleaner and more focused */}
      <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>

        <MaxWidthWrapper className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1">
                <Star className="size-4 text-yellow-500 fill-current" />
                <Star className="size-4 text-yellow-500 fill-current" />
                <Star className="size-4 text-yellow-500 fill-current" />
                <Star className="size-4 text-yellow-500 fill-current" />
                <Star className="size-4 text-yellow-500 fill-current" />
              </div>
              <span>Trusted by 500+ businesses worldwide</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 leading-tight">
                Smart Business
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Notifications
                </span>
                <br />
                <span className="text-3xl sm:text-4xl text-gray-600 font-medium">Made Simple</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business monitoring with intelligent alerts that reach your team 
                <span className="font-semibold text-purple-600"> instantly</span> and 
                <span className="font-semibold text-blue-600"> exactly</span> when they need them.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { icon: Zap, text: "Real-time alerts", desc: "Instant notifications", color: "text-yellow-600" },
                { icon: Shield, text: "Enterprise secure", desc: "Bank-level encryption", color: "text-green-600" },
                { icon: Target, text: "Smart targeting", desc: "Right person, right time", color: "text-blue-600" }
              ].map((item, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <item.icon className={`size-8 ${item.color} mb-3 mx-auto`} />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.text}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-12">
              <ShinyButton
                href="/sign-up"
                className="flex-1 h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-5" />
              </ShinyButton>
              
              <button className="flex-1 h-14 text-lg font-semibold bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Play className="size-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 mt-12">
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
                <Check className="size-4 text-green-500" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
                <Check className="size-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
                <Check className="size-4 text-green-500" />
                Cancel anytime
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200">
              {[
                { value: "500+", label: "Active Users", icon: Users },
                { value: "99.9%", label: "Uptime", icon: BarChart3 },
                { value: "50K+", label: "Events Daily", icon: Zap },
                { value: "<100ms", label: "Response Time", icon: Clock }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <stat.icon className="size-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Live Demo Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              See NotifyFlow in
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"> Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch real notifications being delivered to your favorite platforms in real-time.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Zap className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Live Notification Feed</h3>
                    <p className="text-purple-100">Real-time business intelligence alerts</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <MockDiscordUI>
                  <AnimatedList>
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="NotifyFlow Avatar"
                      username="NotifyFlow"
                      timestamp="Now"
                      badgeText="Revenue"
                      badgeColor="#10b981"
                      title="🎉 Revenue Milestone Reached!"
                      content={{
                        milestone: "$1M ARR Achieved",
                        growth: "+156% this quarter",
                        trend: "🚀 Exponential growth trajectory"
                      }}
                    />
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="NotifyFlow Avatar"
                      username="NotifyFlow"
                      timestamp="2 min ago"
                      badgeText="Sales"
                      badgeColor="#8b5cf6"
                      title="💼 New Enterprise Deal"
                      content={{
                        client: "TechCorp Industries",
                        value: "$50K Annual Contract",
                        plan: "Enterprise Pro",
                        source: "Direct Sales"
                      }}
                    />
                    <DiscordMessage
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="NotifyFlow Avatar"
                      username="NotifyFlow"
                      timestamp="5 min ago"
                      badgeText="Performance"
                      badgeColor="#3b82f6"
                      title="⚡ System Performance Alert"
                      content={{
                        metric: "API Response Time",
                        status: "Optimal performance",
                        improvement: "15% faster than yesterday"
                      }}
                    />
                  </AnimatedList>
                </MockDiscordUI>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Features Section - Clean and focused */}
      <section className="py-20 bg-white">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="size-4" />
              <span>Powerful Features</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to stay
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                ahead of the game
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for modern teams who need reliable, intelligent notifications that actually help them work better.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI-Powered Intelligence */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100 hover:border-purple-300 transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="size-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Intelligence</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  AI-powered algorithms analyze your business patterns and deliver insights that matter, exactly when you need them.
                </p>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">Intelligence Score</span>
                    <span className="text-2xl font-bold text-purple-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Pattern Recognition</span>
                      <span className="text-green-600 font-medium">✓ Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Smart Filtering</span>
                      <span className="text-green-600 font-medium">✓ Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Platform Delivery */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="size-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Universal Delivery</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Reach your team wherever they are. Seamlessly integrate with Slack, Discord, Teams, email, and 100+ more platforms.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Slack", icon: "💼", color: "from-[#4a154b] to-[#350d36]" },
                    { name: "Discord", icon: "💬", color: "from-[#5865f2] to-[#4752c4]" },
                    { name: "Teams", icon: "📱", color: "from-[#6264a7] to-[#464775]" },
                    { name: "Email", icon: "📧", color: "from-blue-600 to-purple-600" }
                  ].map((platform, idx) => (
                    <div key={idx} className={`bg-gradient-to-r ${platform.color} p-4 rounded-xl text-center text-white font-medium shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-2xl mb-2">{platform.icon}</div>
                      <div className="text-sm">{platform.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="group relative bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100 hover:border-green-300 transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="size-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Bank-grade encryption and SOC 2 compliance ensure your business data stays protected at every step.
                </p>
                
                <div className="space-y-3">
                  {[
                    { label: "End-to-End Encryption", status: "✓ Active" },
                    { label: "SOC 2 Type II", status: "✓ Certified" },
                    { label: "GDPR Compliant", status: "✓ Ready" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className="text-green-600 font-medium text-sm">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Simple, Clean Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <MaxWidthWrapper>
          <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="NotifyFlow Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold text-gray-900">
                  Notify<span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Flow</span>
                </span>
              </div>
              <p className="text-gray-600 max-w-md leading-relaxed mb-6">
                Smart business notifications that help modern teams stay connected and productive. 
                Built for companies who value simplicity and reliability.
              </p>
              <div className="flex space-x-3">
                <a href="mailto:robert.nguyenanh@gmail.com" className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors duration-200 group" title="Gmail">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/robert-nguyenn/" className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-200 group" title="LinkedIn">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/robert-nguyenn/notificationpanda" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200 group" title="GitHub">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="/pricing" className="hover:text-purple-600 transition-colors duration-200">Pricing</a></li>
                <li><a href="/compliance" className="hover:text-purple-600 transition-colors duration-200">Security & Compliance</a></li>
                <li><a href="/contact" className="hover:text-purple-600 transition-colors duration-200">API Documentation</a></li>
                <li><a href="/dashboard" className="hover:text-purple-600 transition-colors duration-200">Dashboard</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="/contact" className="hover:text-purple-600 transition-colors duration-200">Contact Sales</a></li>
                <li><a href="/contact" className="hover:text-purple-600 transition-colors duration-200">Technical Support</a></li>
                <li><a href="mailto:hello@notifyflow.com" className="hover:text-purple-600 transition-colors duration-200">Email Us</a></li>
                <li><a href="/pricing" className="hover:text-purple-600 transition-colors duration-200">Upgrade Account</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 NotifyFlow Technologies Inc. All rights reserved. Built for modern teams.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-purple-600 transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="hover:text-purple-600 transition-colors duration-200">Terms of Service</a>
              <a href="/compliance" className="hover:text-purple-600 transition-colors duration-200">Compliance</a>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  )
}

export default Page
