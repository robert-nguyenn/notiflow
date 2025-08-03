"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Heading } from "@/components/heading"
import { ShinyButton } from "@/components/shiny-button"
import { Check, Zap, Shield, Target, Rocket, Crown, Star } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import { client } from "@/lib/client"
import { useMutation } from "@tanstack/react-query"

const PricingPage = () => {
  const router = useRouter()
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(false)

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post()
      return await res.json()
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url)
    },
  })

  const handleGetAccess = () => {
    if (user) {
      createCheckoutSession()
    } else {
      router.push("/sign-in?intent=upgrade")
    }
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 sm:py-32 overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-spin-slow pointer-events-none"></div>
      <div
        className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-xl opacity-20 animate-pulse pointer-events-none"
        style={{ animationDelay: "2s" }}
      ></div>

      <MaxWidthWrapper className="relative z-10">
        <div className="mx-auto text-center flex flex-col items-center gap-16 w-full">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-100 px-6 py-3 rounded-full text-sm font-medium animate-fade-in">
            <Crown className="size-4 text-purple-400" />
            <span>Enterprise Intelligence Platform</span>
            <Crown className="size-4 text-purple-400" />
          </div>

          {/* Main Heading */}
          <div className="w-full flex flex-col items-center space-y-4">
            <Heading>
              <span className="text-white">Unlock the</span>
              <br />
              <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
                Full Power
              </span>
              <br />
              <span className="text-gray-300 text-2xl">of AlertIQ</span>
            </Heading>
          </div>

          {/* Pricing Card */}
          <div className="w-full max-w-2xl">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-gradient"></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden">
                {/* Pricing header */}
                <div className="relative px-8 py-8 text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-b border-purple-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                      <Star className="size-4" />
                      <span>ENTERPRISE TIER</span>
                      <Star className="size-4" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">AlertIQ Pro</h3>
                    <p className="text-gray-300">Complete business intelligence solution</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="px-8 py-6 text-center border-b border-purple-500/20">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-black text-white">$49</span>
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-sm">/month</span>
                      <span className="text-purple-400 text-xs">billed annually</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Cancel anytime • No setup fees</p>
                </div>

                {/* Features */}
                <div className="px-8 py-8">
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-white mb-2">Everything you need to scale</h4>
                      <p className="text-gray-400 text-sm">Enterprise-grade features for serious businesses</p>
                    </div>
                    
                    <div className="grid gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Check className="size-4 text-white" />
                        </div>
                        <span className="text-gray-300">Unlimited real-time alerts & notifications</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Check className="size-4 text-white" />
                        </div>
                        <span className="text-gray-300">Advanced AI-powered analytics & insights</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Check className="size-4 text-white" />
                        </div>
                        <span className="text-gray-300">Multi-channel integration (Discord, Slack, Teams)</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Check className="size-4 text-white" />
                        </div>
                        <span className="text-gray-300">Custom event categories & smart filtering</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Check className="size-4 text-white" />
                        </div>
                        <span className="text-gray-300">Priority support & dedicated success manager</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Check className="size-4 text-white" />
                        </div>
                        <span className="text-gray-300">Advanced security & compliance features</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Check className="size-4 text-white" />
                        </div>
                        <span className="text-gray-300">99.9% uptime SLA guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-8 py-8 bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-t border-purple-500/20">
                  <ShinyButton
                    onClick={handleGetAccess}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] group border-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      <Rocket className="size-5 group-hover:scale-110 transition-transform duration-200" />
                      <span>Start Your Intelligence Journey</span>
                      <Zap className="size-5 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                  </ShinyButton>
                  
                  <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Shield className="size-4 text-green-400" />
                      <span>Secure & Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="size-4 text-blue-400" />
                      <span>Instant Setup</span>
                    </div>
                  </div>
                  
                  <p className="text-center text-gray-500 text-xs mt-4">
                    Join 10,000+ businesses already using AlertIQ to transform their operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom features */}
          <div className="w-full max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Zap className="size-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Real-time alerts delivered in milliseconds</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Shield className="size-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-400">Bank-level security with end-to-end encryption</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Target className="size-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Precision Targeting</h3>
                <p className="text-gray-400">AI-powered smart filtering and categorization</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default PricingPage
