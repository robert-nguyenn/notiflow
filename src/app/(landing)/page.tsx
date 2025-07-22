import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Check, Star } from "lucide-react"
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
    category: "user_signup",
    fields: {
      plan: "Premium",
      email: "alex.smith@company.com",
      revenue: 99.00,
      source: "organic"
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-brand-25 via-brand-50 to-brand-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        {/* Floating decorative elements */}
        <div className="absolute top-24 left-10 w-20 h-20 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full blur-xl opacity-20 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full blur-xl opacity-20 animate-pulse pointer-events-none" style={{animationDelay: '2s'}}></div>

        <MaxWidthWrapper className="text-center relative z-10 flex flex-col items-center justify-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-12 w-full">
            <div className="flex items-center gap-3 mb-6 animate-fade-in justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">🚀</span>
              </div>
              <span className="text-brand-600 font-semibold text-2xl">NotifyFlow</span>
            </div>

            <div className="w-full flex flex-col items-center">
              <Heading>
                <span>Smart Business Alerts</span>
                <br />
                <span className="relative bg-gradient-to-r from-purple-600 via-brand-700 to-indigo-600 text-transparent bg-clip-text">
                  That Actually Matter
                </span>
              </Heading>
            </div>

            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty mx-auto">
              NotifyFlow transforms how you monitor your business. Get intelligent,
              contextual notifications for <span className="font-semibold text-gray-700">revenue milestones, user behaviors, and critical events</span> delivered to Discord, Slack, or anywhere you work.
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start mx-auto w-full max-w-lg">
              {[
                "AI-powered smart filtering reduces notification noise",
                "Multi-platform delivery (Discord, Slack, Teams, Email)",
                "Advanced analytics and trend detection",
                "Custom webhook integrations with 50+ services",
                "Real-time dashboard with business insights"
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-16 w-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800"
              >
                Start Free Trial
                <span className="ml-2">→</span>
              </ShinyButton>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 justify-center w-full mt-4">
              <span className="flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 pt-16 border-t border-gray-200 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brand-700">10,000+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brand-700">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brand-700">50M+</div>
                <div className="text-sm text-gray-600">Events Processed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-brand-700">&lt;100ms</div>
                <div className="text-sm text-gray-600">Global Latency</div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-gradient-to-b from-brand-25 to-brand-50 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-gradient-to-r from-brand-700 via-brand-600 to-indigo-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-2xl backdrop-blur-sm">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="NotifyFlow Avatar"
                    username="NotifyFlow"
                    timestamp="Today at 2:45PM"
                    badgeText="Growth"
                    badgeColor="#10b981"
                    title="� Revenue Milestone Reached!"
                    content={{
                      milestone: "$50,000 MRR",
                      growth: "+23% this month",
                      trend: "🔥 Fastest growth yet"
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="NotifyFlow Avatar"
                    username="NotifyFlow"
                    timestamp="Today at 2:12PM"
                    badgeText="Premium"
                    badgeColor="#8b5cf6"
                    title="⭐ New Premium Subscriber"
                    content={{
                      user: "Sarah Chen",
                      email: "s.chen@techstartup.io",
                      plan: "Annual Premium - $299",
                      source: "Product Hunt"
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="NotifyFlow Avatar"
                    username="NotifyFlow"
                    timestamp="Today at 1:33PM"
                    badgeText="Alert"
                    badgeColor="#ef4444"
                    title="� High Traffic Spike Detected"
                    content={{
                      traffic: "500% above normal",
                      source: "Social media viral post",
                      action: "Auto-scaled servers"
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="NotifyFlow Avatar"
                    username="NotifyFlow"
                    timestamp="Today at 12:58PM"
                    badgeText="Feature"
                    badgeColor="#3b82f6"
                    title="🎯 Feature Usage Milestone"
                    content={{
                      feature: "AI Analytics",
                      users: "1,000+ active users",
                      adoption: "+45% this week"
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 bg-white">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Advanced Intelligence
            </div>
            <Heading className="mb-4">Built for modern businesses that scale</Heading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the power of intelligent notifications with our cutting-edge features designed for growing businesses.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 lg:grid-rows-2 w-full">
            {/* first bento grid element - AI Smart Filtering */}
            <div className="relative lg:row-span-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl lg:rounded-l-3xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lg:rounded-l-3xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="px-8 pb-6 pt-8 sm:px-10 sm:pt-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🤖</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">AI-Powered Smart Filtering</p>
                      <p className="text-sm text-blue-600 font-medium">Intelligent Noise Reduction</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our AI learns your patterns and automatically filters out noise, 
                    sending only the notifications that truly matter to your business.
                  </p>
                </div>

                <div className="relative flex-1 px-8 pb-8 sm:px-10">
                  <div className="h-full bg-gray-900 rounded-xl p-4 shadow-inner">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="flex-1 text-center text-sm text-gray-400 font-medium">Smart Filter Dashboard</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 transform hover:scale-105 transition-transform">
                        <div className="text-green-400 text-xs font-bold uppercase tracking-wide">High Priority</div>
                        <div className="text-white text-sm font-medium">Revenue milestone reached</div>
                        <div className="text-green-300 text-xs mt-1">Confidence: 98%</div>
                      </div>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3 opacity-60">
                        <div className="text-yellow-400 text-xs font-bold uppercase tracking-wide">Filtered Out</div>
                        <div className="text-gray-400 text-sm line-through">Low-value signup</div>
                        <div className="text-yellow-300 text-xs mt-1">Auto-filtered by AI</div>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 transform hover:scale-105 transition-transform">
                        <div className="text-blue-400 text-xs font-bold uppercase tracking-wide">Medium Priority</div>
                        <div className="text-white text-sm font-medium">Feature usage spike</div>
                        <div className="text-blue-300 text-xs mt-1">Trending upward</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second bento grid element - Multi-Platform */}
            <div className="relative max-lg:row-start-1 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl max-lg:rounded-t-3xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-t-3xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">🌐</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">Multi-Platform Delivery</p>
                      <p className="text-sm text-purple-600 font-medium">Universal Integration</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Send notifications to Discord, Slack, Microsoft Teams, Email,
                    or any platform where your team collaborates.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 pb-8 sm:px-10">
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                    <div className="bg-[#5865f2] text-white p-4 rounded-xl text-center text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">Discord</div>
                    <div className="bg-[#4a154b] text-white p-4 rounded-xl text-center text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">Slack</div>
                    <div className="bg-[#6264a7] text-white p-4 rounded-xl text-center text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">Teams</div>
                    <div className="bg-[#ea4335] text-white p-4 rounded-xl text-center text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">Email</div>
                  </div>
                </div>
              </div>
            </div>

            {/* third bento grid element - Analytics Dashboard */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">Advanced Analytics</p>
                      <p className="text-sm text-green-600 font-medium">Real-time Insights</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Get deep insights into your business patterns with trend analysis,
                    predictions, and actionable recommendations.
                  </p>
                </div>

                <div className="flex flex-1 items-center justify-center px-8 pb-8 sm:px-10">
                  <div className="w-full max-w-xs bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-inner border border-gray-200">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Revenue Growth</span>
                        <span className="text-2xl font-bold text-green-600">+23%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span className="font-medium">This Month</span>
                        <span className="font-medium">Target: 80%</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <div className="text-xs text-gray-600 text-center">
                          🎯 On track to exceed goals
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* fourth bento grid element - Advanced API */}
            <div className="relative lg:row-span-2 group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl max-lg:rounded-b-3xl lg:rounded-r-3xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-b-3xl lg:rounded-r-3xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="px-8 pb-6 pt-8 sm:px-10 sm:pt-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">Developer-First API</p>
                      <p className="text-sm text-gray-600 font-medium">Production Ready</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Powerful REST API with SDKs for popular languages, webhooks,
                    batch processing, and real-time streaming capabilities.
                  </p>
                </div>

                <div className="relative flex-1 px-8 pb-8 sm:px-10">
                  <div className="h-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                    <div className="flex bg-gray-800/60 border-b border-gray-700">
                      <div className="flex items-center gap-2 px-4 py-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex text-sm font-medium text-gray-400">
                        <div className="bg-gray-700/50 px-4 py-3 text-white border-r border-gray-600">
                          notifyflow.js
                        </div>
                        <div className="px-4 py-3 border-r border-gray-600">
                          webhook.py
                        </div>
                      </div>
                    </div>

                    <div className="p-4 h-full overflow-y-auto">
                      <div className="text-green-400 text-sm font-mono">
                        <div className="text-blue-400">await</div> <div className="text-yellow-400">fetch</div>(<div className="text-green-300">"https://api.notifyflow.com/events"</div>, {"{"}
                        <div className="ml-4 text-blue-400">method:</div> <div className="text-green-300">"POST"</div>,
                        <div className="ml-4 text-blue-400">headers:</div> {"{"} 
                        <div className="ml-8 text-orange-400">"Authorization":</div> <div className="text-green-300">"Bearer YOUR_API_KEY"</div>
                        <div className="ml-4">{"}"}, </div>
                        <div className="ml-4 text-blue-400">body:</div> <div className="text-yellow-400">JSON.stringify</div>({"{"})
                        <div className="ml-8 text-orange-400">category:</div> <div className="text-green-300">"revenue"</div>,
                        <div className="ml-8 text-orange-400">data:</div> {"{"} <div className="text-purple-400">amount:</div> <div className="text-cyan-400">99.00</div> {"}"}
                        <div className="ml-4">{"}"}</div>
                        {"}"})
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* New Advanced Features Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-brand-25">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <MaxWidthWrapper className="relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
              Enterprise-Ready Features
            </div>
            <Heading className="mb-6">Everything you need to scale</Heading>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From startups to enterprise, NotifyFlow adapts to your needs with advanced features 
              and enterprise-grade security that grows with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Machine learning algorithms analyze your data patterns and provide actionable 
                insights to optimize your business metrics and predict trends.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Predictive analytics
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Anomaly detection
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Smart recommendations
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Bank-grade security with end-to-end encryption, GDPR compliance, 
                and advanced access controls for your peace of mind.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  SOC 2 Type II compliant
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  End-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  RBAC & SSO support
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Processing</h3>
              <p className="text-gray-600 mb-4">
                Sub-second notification delivery with our global edge network 
                ensuring your team never misses critical events.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  &lt;100ms latency globally
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  99.99% uptime SLA
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Auto-scaling infrastructure
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">50+ Integrations</h3>
              <p className="text-gray-600 mb-4">
                Connect with your existing tools seamlessly. From CRMs to analytics platforms, 
                we integrate with everything you use.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Salesforce, HubSpot, Pipedrive
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Google Analytics, Mixpanel
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Custom webhook support
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600 mb-4">
                Deep dive into your notification performance with detailed analytics, 
                delivery reports, and engagement metrics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Delivery rate tracking
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Engagement analytics
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Custom dashboards
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Targeting</h3>
              <p className="text-gray-600 mb-4">
                Send the right message to the right person at the right time with 
                our advanced targeting and personalization engine.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Audience segmentation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Dynamic content
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  A/B testing
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative py-24 sm:py-32 bg-white">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Trusted by 10,000+ Businesses
            </h2>
            <Heading className="text-center">Success stories from our customers</Heading>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-8">
            {/* first customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 rounded-2xl">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
              </div>

              <p className="text-base sm:text-lg font-medium tracking-tight text-brand-950 text-pretty">
                "NotifyFlow transformed how we monitor our SaaS metrics. The AI filtering 
                is incredible - we only get notified about what actually matters. Revenue is up 40% 
                since implementing their smart alerts."
              </p>

              <div className="flex items-center gap-4 mt-2">
                <Image
                  src="/user-2.png"
                  className="rounded-full object-cover"
                  alt="Sarah Chen"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col">
                  <p className="font-semibold flex items-center">
                    Sarah Chen
                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
                  </p>
                  <p className="text-sm text-gray-600">CEO, TechFlow</p>
                </div>
              </div>
            </div>

            {/* second customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 rounded-2xl">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
              </div>

              <p className="text-base sm:text-lg font-medium tracking-tight text-brand-950 text-pretty">
                "The multi-platform integration is seamless. We get critical alerts in Slack, 
                Discord, and email simultaneously. The analytics dashboard helped us identify 
                patterns we never noticed before."
              </p>

              <div className="flex items-center gap-4 mt-2">
                <Image
                  src="/user-1.png"
                  className="rounded-full object-cover"
                  alt="Marcus Rodriguez"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col">
                  <p className="font-semibold flex items-center">
                    Marcus Rodriguez
                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
                  </p>
                  <p className="text-sm text-gray-600">CTO, DataVault</p>
                </div>
              </div>
            </div>

            {/* third customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 rounded-2xl">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
              </div>

              <p className="text-base sm:text-lg font-medium tracking-tight text-brand-950 text-pretty">
                "Enterprise-grade security with startup-friendly pricing. The real-time processing 
                is lightning fast, and their support team is incredibly responsive. Highly recommend!"
              </p>

              <div className="flex items-center gap-4 mt-2">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold flex items-center">
                    Alex Thompson
                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
                  </p>
                  <p className="text-sm text-gray-600">Founder, ScaleUp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <ShinyButton
              href="/sign-up"
              className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Join 10,000+ Happy Customers
            </ShinyButton>
            <p className="mt-4 text-sm text-gray-500">
              Start your free trial today • No credit card required
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <MaxWidthWrapper>
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🚀</span>
                  </div>
                  <span className="text-xl font-semibold">NotifyFlow</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Smart business alerts that actually matter. Transform how you monitor your 
                  business with AI-powered notifications and insights.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    𝕏
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    GitHub
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 NotifyFlow. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </>
  )
}

export default Page
