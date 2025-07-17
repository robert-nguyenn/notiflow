"use client"

import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { client } from "@/lib/client"
import { createCheckoutSession } from "@/lib/stripe"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "@tanstack/react-query"
import { CheckIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const Page = () => {
  const { user } = useUser()
  const router = useRouter()

  const INCLUDED_FEATURES = [
    "50,000 smart-filtered events per month",
    "Unlimited event categories",
    "AI-powered insights and analytics",
    "Multi-platform delivery (Discord, Slack, Teams, Email)", 
    "Advanced webhook integrations",
    "Real-time dashboard access",
    "Enterprise-grade security",
    "Priority support with 24/7 response"
  ]

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
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <MaxWidthWrapper className="relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Simple Pricing
          </div>
          <Heading className="text-center mb-6">Transparent, honest pricing</Heading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe in simple, fair pricing. Get lifetime access to NotifyFlow's 
            complete feature set with a single payment. No monthly fees, no surprises.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Pricing card with enhanced design */}
          <div className="relative bg-white rounded-3xl shadow-2xl ring-1 ring-gray-200 overflow-hidden">
            {/* Premium badge */}
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🚀 Most Popular
              </div>
            </div>

            <div className="lg:flex">
              {/* Left side - Features */}
              <div className="p-8 sm:p-12 lg:flex-auto lg:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading font-bold tracking-tight text-gray-900">
                      NotifyFlow Pro
                    </h3>
                    <p className="text-blue-600 font-semibold">Lifetime Access</p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  Invest once in NotifyFlow and revolutionize how you monitor your business
                  forever. Get AI-powered notifications, deep analytics, and multi-platform 
                  delivery that grows with your success.
                </p>

                <div className="flex items-center gap-x-4 mb-8">
                  <h4 className="text-lg font-bold text-gray-900">
                    What's included
                  </h4>
                  <div className="h-px flex-auto bg-gradient-to-r from-blue-200 to-purple-200" />
                </div>

                <ul className="grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-2 sm:gap-6">
                  {INCLUDED_FEATURES.map((feature, index) => (
                    <li key={feature} className="flex gap-3 items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                        <CheckIcon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right side - Pricing */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 sm:p-12 lg:w-80 lg:flex-shrink-0">
                <div className="rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-gray-200 lg:flex lg:flex-col lg:justify-center h-full">
                  <div className="mx-auto max-w-xs">
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        One-time payment
                      </div>
                      <p className="text-base font-semibold text-gray-600 mb-2">
                        Pay once, own forever
                      </p>
                      <p className="text-sm text-gray-500">No monthly subscriptions</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-baseline justify-center gap-x-2 mb-2">
                        <span className="text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          $149
                        </span>
                        <span className="text-lg font-semibold text-gray-600">
                          USD
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Compare to $29/month = $348/year
                      </p>
                    </div>

                    <Button 
                      onClick={handleGetAccess} 
                      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      Get NotifyFlow Pro
                    </Button>
                    
                    <div className="mt-6 space-y-2">
                      <p className="text-sm text-gray-600 font-medium">
                        ✅ Secure payment with Stripe
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        ✅ Start monitoring in minutes
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        ✅ 30-day money-back guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 mb-6">Trusted by developers and businesses worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl">🔒</div>
              <div className="text-sm font-medium text-gray-600">256-bit SSL</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl">💳</div>
              <div className="text-sm font-medium text-gray-600">Stripe Secure</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl">🛡️</div>
              <div className="text-sm font-medium text-gray-600">GDPR Compliant</div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Page
