import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Check, Star, Zap, Shield, Target, Sparkles, Rocket } from "lucide-react"
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
      <section className="relative min-h-screen flex items-center py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-pink-800/20 to-purple-800/20 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-spin-slow pointer-events-none"></div>

        <MaxWidthWrapper className="text-center relative z-10 flex flex-col items-center justify-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-16 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-100 px-6 py-3 rounded-full text-sm font-medium animate-fade-in">
              <Sparkles className="size-4 text-purple-400" />
              <span>Revolutionary Alert Intelligence</span>
              <Sparkles className="size-4 text-purple-400" />
            </div>

            <div className="w-full flex flex-col items-center space-y-8">
              <Heading>
                <span className="text-white">Next-Generation</span>
                <br />
                <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
                  Business Intelligence
                </span>
                <br />
                <span className="text-gray-300 text-2xl">That Drives Results</span>
              </Heading>
            </div>

            <p className="text-lg text-gray-300 max-w-3xl text-center mx-auto leading-relaxed">
              Transform your business monitoring with <span className="text-purple-400 font-semibold">AI-powered insights</span>, 
              real-time alerts, and <span className="text-pink-400 font-semibold">intelligent automation</span> that help you stay ahead of every opportunity and challenge.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              {[
                { icon: Zap, text: "Lightning-fast real-time processing & alerts", color: "text-yellow-400" },
                { icon: Shield, text: "Enterprise-grade security with end-to-end encryption", color: "text-green-400" },
                { icon: Target, text: "Precision targeting with AI-driven smart filtering", color: "text-blue-400" },
                { icon: Rocket, text: "Multi-platform delivery across 100+ integrations", color: "text-purple-400" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <item.icon className={`size-6 shrink-0 ${item.color}`} />
                  <span className="text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl mx-auto justify-center">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-16 w-full text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 border-0"
              >
                <Rocket className="mr-3 size-5" />
                Launch Your Intelligence
                <Sparkles className="ml-3 size-5" />
              </ShinyButton>
              
              <button className="relative z-10 h-16 w-full text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                <Shield className="inline mr-2 size-5" />
                View Demo
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400 justify-center w-full mt-8">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Check className="size-4 text-green-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Check className="size-4 text-green-400" />
                30-day free trial
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Check className="size-4 text-green-400" />
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="mt-32 pt-16 border-t border-white/20 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full">
              <div className="space-y-3 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">500+</div>
                <div className="text-sm text-gray-300">Beta Users</div>
              </div>
              <div className="space-y-3 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">99.5%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
              <div className="space-y-3 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">50K+</div>
                <div className="text-sm text-gray-300">Events Processed</div>
              </div>
              <div className="space-y-3 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">&lt;200ms</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-purple-900/50" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-3xl bg-black/20 backdrop-blur-sm p-4 ring-1 ring-purple-500/20 lg:-m-4 lg:rounded-3xl lg:p-6 shadow-2xl border border-white/10">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="NotifyFlow Avatar"
                    username="NotifyFlow"
                    timestamp="Today at 3:42PM"
                    badgeText="Revenue"
                    badgeColor="#10b981"
                    title="💰 Major Revenue Milestone!"
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
                    timestamp="Today at 3:15PM"
                    badgeText="Enterprise"
                    badgeColor="#8b5cf6"
                    title="🎯 Enterprise Deal Closed"
                    content={{
                      client: "Fortune 500 Tech Corp",
                      value: "$500K Annual Contract",
                      plan: "Enterprise Pro - 3 Years",
                      source: "Direct Sales Team"
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="NotifyFlow Avatar"
                    username="NotifyFlow"
                    timestamp="Today at 2:58PM"
                    badgeText="Security"
                    badgeColor="#ef4444"
                    title="🛡️ Security Anomaly Detected"
                    content={{
                      event: "Unusual login pattern detected",
                      location: "Multiple geographic regions",
                      action: "Auto-triggered 2FA verification"
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="NotifyFlow Avatar"
                    username="NotifyFlow"
                    timestamp="Today at 2:33PM"
                    badgeText="Performance"
                    badgeColor="#3b82f6"
                    title="⚡ Performance Breakthrough"
                    content={{
                      metric: "API Response Time",
                      improvement: "50% faster than baseline",
                      impact: "Enhanced user experience globally"
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <section className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900">
        <MaxWidthWrapper className="flex flex-col items-center gap-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-100 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Zap className="size-4 text-purple-400 animate-pulse" />
              <span>Next-Gen Intelligence</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Built for enterprises that
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                demand excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the power of <span className="text-purple-400 font-semibold">quantum-level intelligence</span> with our cutting-edge features designed for 
              organizations that refuse to compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {/* AI-Powered Intelligence */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
                    <Zap className="size-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI-Powered Intelligence</h3>
                    <p className="text-purple-400 font-medium">Quantum Processing</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Our quantum AI algorithms analyze your business patterns in real-time, providing predictive insights and automated responses that anticipate your needs before they arise.
                </p>
                
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-400">INTELLIGENCE SCORE</span>
                    <span className="text-2xl font-bold text-purple-400">85%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Pattern Recognition</span>
                      <span className="text-green-400">✓ Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Predictive Analytics</span>
                      <span className="text-green-400">✓ Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Platform Delivery */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl">
                    <Target className="size-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Omnichannel Delivery</h3>
                    <p className="text-blue-400 font-medium">Universal Integration</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Deploy across 100+ platforms instantly. From Slack to Microsoft Teams, Discord to custom webhooks - your alerts reach every corner of your organization.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Discord", color: "from-[#5865f2] to-[#4752c4]", icon: "💬" },
                    { name: "Slack", color: "from-[#4a154b] to-[#350d36]", icon: "💼" },
                    { name: "Teams", color: "from-[#6264a7] to-[#464775]", icon: "📱" },
                    { name: "Webhooks", color: "from-purple-600 to-pink-600", icon: "🔗" }
                  ].map((platform, idx) => (
                    <div key={idx} className={`bg-gradient-to-r ${platform.color} p-4 rounded-xl text-center text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                      <div className="text-2xl mb-2">{platform.icon}</div>
                      <div className="text-sm">{platform.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-green-500/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl">
                    <Shield className="size-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Fortress-Level Security</h3>
                    <p className="text-green-400 font-medium">Zero-Trust Architecture</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Bank-grade encryption, SOC 2 compliance, and advanced threat detection ensure your business intelligence remains completely secure and private.
                </p>
                
                <div className="space-y-4">
                  {[
                    { label: "End-to-End Encryption", status: "Active", color: "text-green-400" },
                    { label: "SOC 2 Type II Compliant", status: "Certified", color: "text-blue-400" },
                    { label: "GDPR & CCPA Ready", status: "Compliant", color: "text-purple-400" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-slate-900/50 p-4 rounded-xl border border-white/5">
                      <span className="text-gray-300 font-medium">{item.label}</span>
                      <span className={`${item.color} font-bold text-sm`}>✓ {item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Modern Footer */}
      <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <MaxWidthWrapper className="relative z-10">
          <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Zap className="size-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white">
                  Notify<span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Flow</span>
                </span>
              </div>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-6">
                Next-generation business intelligence that transforms how enterprises monitor, 
                analyze, and respond to critical business events in real-time.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:hello@notifyflow.com" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 group" title="Email Us">
                  <span className="text-gray-400 group-hover:text-white">📧</span>
                </a>
                <a href="/contact" className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-200 group" title="Contact Support">
                  <span className="text-gray-400 group-hover:text-white">�</span>
                </a>
                <a href="https://github.com/robert-nguyenn/notificationpanda" className="w-10 h-10 bg-white/10 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 group" title="GitHub Repository">
                  <span className="text-gray-400 group-hover:text-white">�</span>
                </a>
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-bold text-white mb-6">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/pricing" className="hover:text-purple-400 transition-colors duration-200">Pricing</a></li>
                <li><a href="/compliance" className="hover:text-purple-400 transition-colors duration-200">Security & Compliance</a></li>
                <li><a href="/contact" className="hover:text-purple-400 transition-colors duration-200">API Documentation</a></li>
                <li><a href="/dashboard" className="hover:text-purple-400 transition-colors duration-200">Dashboard</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-white mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/contact" className="hover:text-purple-400 transition-colors duration-200">Contact Sales</a></li>
                <li><a href="/contact" className="hover:text-purple-400 transition-colors duration-200">Technical Support</a></li>
                <li><a href="mailto:hello@notifyflow.com" className="hover:text-purple-400 transition-colors duration-200">Email Us</a></li>
                <li><a href="/pricing" className="hover:text-purple-400 transition-colors duration-200">Upgrade Account</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NotifyFlow Technologies Inc. All rights reserved. Built for the future of enterprise intelligence.
            </p>
            <div className="flex space-x-8 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-purple-400 transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="hover:text-purple-400 transition-colors duration-200">Terms of Service</a>
              <a href="/compliance" className="hover:text-purple-400 transition-colors duration-200">Compliance</a>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  )
}

export default Page
