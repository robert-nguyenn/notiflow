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
      router.push("/sign-up?intent=upgrade")
    }
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20 sm:py-24 overflow-hidden min-h-screen">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>

      <MaxWidthWrapper className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            <Crown className="size-4 text-purple-600" />
            <span>Enterprise Intelligence Platform</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Unlock the
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                Full Power
              </span>
              <br />
              <span className="text-2xl sm:text-3xl text-gray-600 font-medium">of NotifyFlow</span>
            </h1>
          </div>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Pricing header */}
              <div className="px-8 py-8 text-center bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Star className="size-4" />
                  <span>ENTERPRISE TIER</span>
                  <Star className="size-4" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">NotifyFlow Pro</h3>
                <p className="text-gray-600">Complete business intelligence solution</p>
              </div>

              {/* Pricing */}
              <div className="px-8 py-6 text-center border-b border-gray-100">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black text-gray-900">$49</span>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">/month</span>
                    <span className="text-purple-600 text-xs">billed annually</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-2">Cancel anytime • No setup fees</p>
              </div>

              {/* Features */}
              <div className="px-8 py-8">
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Everything you need to scale</h4>
                    <p className="text-gray-600 text-sm">Enterprise-grade features for serious businesses</p>
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Check className="size-4 text-white" />
                      </div>
                      <span className="text-gray-700">Unlimited real-time alerts & notifications</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Check className="size-4 text-white" />
                      </div>
                      <span className="text-gray-700">Advanced AI-powered analytics & insights</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Check className="size-4 text-white" />
                      </div>
                      <span className="text-gray-700">Multi-channel integration (Discord, Slack, Teams)</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Check className="size-4 text-white" />
                      </div>
                      <span className="text-gray-700">Custom event categories & smart filtering</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Check className="size-4 text-white" />
                      </div>
                      <span className="text-gray-700">Priority support & dedicated success manager</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Check className="size-4 text-white" />
                      </div>
                      <span className="text-gray-700">Advanced security & compliance features</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Check className="size-4 text-white" />
                      </div>
                      <span className="text-gray-700">99.9% uptime SLA guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="px-8 py-8 bg-gradient-to-r from-purple-50 to-blue-50 border-t border-gray-100">
                <ShinyButton
                  onClick={handleGetAccess}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group rounded-xl"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Rocket className="size-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>Start Your Intelligence Journey</span>
                    <Zap className="size-5 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                </ShinyButton>
                
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="size-4 text-green-500" />
                    <span>Secure & Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="size-4 text-blue-500" />
                    <span>Instant Setup</span>
                  </div>
                </div>
                
                <p className="text-center text-gray-500 text-xs mt-4">
                  Join 500+ businesses already using NotifyFlow to transform their operations
                </p>
              </div>
            </div>
          </div>

          {/* Bottom features */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="size-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Real-time alerts delivered in milliseconds</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="size-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with end-to-end encryption</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="size-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Targeting</h3>
                <p className="text-gray-600">AI-powered smart filtering and categorization</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default PricingPage
