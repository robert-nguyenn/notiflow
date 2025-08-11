import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { FileText, Scale, AlertTriangle, Shield, Clock, Zap } from "lucide-react"

const TermsPage = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>

      <MaxWidthWrapper className="relative z-10 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
            <Scale className="size-4 text-blue-600" />
            <span>Legal Terms & Conditions</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using NotifyFlow's business intelligence platform.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 mb-12 shadow-lg">
          <p className="text-gray-600">
            <strong>Last Updated:</strong> January 15, 2025 • <strong>Effective Date:</strong> January 15, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <div className="grid gap-12">
            
            {/* Agreement */}
            <section className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <FileText className="size-6 text-gray-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  These Terms of Service ("Terms") govern your use of NotifyFlow's business intelligence and notification platform ("Service") provided by NotifyFlow Technologies Inc. ("Company," "we," "us," or "our").
                </p>
                <p>
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.
                </p>
                
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-200">
                      <strong>Important:</strong> These Terms constitute a legally binding agreement. Please read them carefully and contact us if you have any questions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Description */}
            <section className="bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                  <Zap className="size-6 text-gray-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Service Description</h2>
              </div>
              
              <div className="text-gray-600 space-y-6 text-lg">
                <p>
                  NotifyFlow provides a comprehensive business intelligence platform that includes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                    <h4 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Core Features
                    </h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Real-time event monitoring and alerts</li>
                      <li>• Multi-platform notification delivery</li>
                      <li>• Custom event categorization</li>
                      <li>• Analytics dashboard and reporting</li>
                      <li>• API access and integrations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                    <h4 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Service Levels
                    </h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Free tier with limited features</li>
                      <li>• Pro subscription with full access</li>
                      <li>• Enterprise solutions available</li>
                      <li>• 24/7 customer support (Pro+)</li>
                      <li>• 99.5% uptime commitment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section className="bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
                  <Shield className="size-6 text-gray-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">User Accounts & Responsibilities</h2>
              </div>
              
              <div className="text-gray-600 space-y-6 text-lg">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Creation</h3>
                  <ul className="space-y-2">
                    <li>• You must provide accurate and complete information when creating an account</li>
                    <li>• You are responsible for maintaining the security of your account credentials</li>
                    <li>• One person may not maintain multiple free accounts</li>
                    <li>• You must be at least 18 years old to create an account</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">User Responsibilities</h3>
                  <div className="grid gap-4">
                    {[
                      { title: "Compliance", desc: "Use the Service in compliance with all applicable laws and regulations" },
                      { title: "Security", desc: "Keep your login credentials secure and report any unauthorized access" },
                      { title: "Content", desc: "Ensure all event data and notifications comply with our acceptable use policy" },
                      { title: "Respect", desc: "Respect the rights of other users and do not interfere with their use of the Service" }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 bg-slate-900/30 p-4 rounded-xl border border-white/5">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section className="bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
                  <AlertTriangle className="size-6 text-gray-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Acceptable Use Policy</h2>
              </div>
              
              <div className="text-gray-600 space-y-6 text-lg">
                <p>You agree not to use the Service to:</p>
                
                <div className="grid gap-3">
                  {[
                    "Send spam, malicious, or unsolicited notifications",
                    "Violate any applicable laws or regulations",
                    "Infringe on intellectual property rights",
                    "Transmit malware, viruses, or harmful code",
                    "Attempt to gain unauthorized access to our systems",
                    "Use the Service for illegal or fraudulent activities",
                    "Abuse or overload our infrastructure beyond fair use limits",
                    "Resell or redistribute access to the Service without authorization"
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 bg-red-900/10 border border-red-500/20 p-4 rounded-xl">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mt-6">
                  <p className="text-orange-200">
                    <strong>Violation Consequences:</strong> Violation of this policy may result in immediate termination of your account and legal action if necessary.
                  </p>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl">
                  <Clock className="size-6 text-gray-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
              </div>
              
              <div className="text-gray-600 space-y-6 text-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscription Plans</h3>
                    <ul className="space-y-2">
                      <li>• <strong className="text-gray-900">Free Plan:</strong> Limited features, no payment required</li>
                      <li>• <strong className="text-gray-900">Pro Plan:</strong> $49/month, billed annually</li>
                      <li>• <strong className="text-gray-900">Enterprise:</strong> Custom pricing available</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Billing Terms</h3>
                    <ul className="space-y-2">
                      <li>• Payments are processed securely through Stripe</li>
                      <li>• Subscriptions renew automatically unless cancelled</li>
                      <li>• No refunds for partial months</li>
                      <li>• Price changes require 30 days notice</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
                  <p className="text-yellow-200">
                    <strong>Cancellation:</strong> You may cancel your subscription at any time. Your access will continue until the end of your current billing period.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl">
                  <Scale className="size-6 text-gray-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              
              <div className="text-gray-600 space-y-4 text-lg">
                <p>
                  To the fullest extent permitted by applicable law, NotifyFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                
                <ul className="space-y-2 ml-6">
                  <li>• Loss of profits, data, use, or goodwill</li>
                  <li>• Service interruptions or delays</li>
                  <li>• Failure to deliver notifications due to third-party issues</li>
                  <li>• Unauthorized access to or alteration of your data</li>
                </ul>

                <div className="bg-gray-900/30 border border-gray-500/30 rounded-xl p-6 mt-6">
                  <p className="text-gray-200">
                    <strong>Service Level Agreement:</strong> We commit to 99.5% uptime. In the event of extended service interruptions, Pro subscribers may be eligible for service credits.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
                  <AlertTriangle className="size-6 text-gray-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Termination</h2>
              </div>
              
              <div className="text-gray-600 space-y-4 text-lg">
                <p>
                  Either party may terminate this agreement at any time:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Your Rights</h4>
                    <p>You may terminate your account at any time through your account settings or by contacting support.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Our Rights</h4>
                    <p>We may terminate or suspend your account immediately for violations of these Terms or for any other reason with 30 days notice.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">Effect of Termination</h4>
                    <p>Upon termination, your access to the Service will cease, and your data will be deleted within 30 days unless you request an earlier deletion.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="text-gray-600 space-y-4 text-lg">
                <p>
                  If you have questions about these Terms of Service, please contact us:
                </p>
                
                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-900">Email:</strong>{" "}
                      <a href="mailto:legal@notifyflow.com" className="text-blue-400 hover:text-blue-300 underline">
                        legal@notifyflow.com
                      </a>
                    </div>
                    <div>
                      <strong className="text-gray-900">Address:</strong> NotifyFlow Technologies Inc., 123 Tech Street, San Francisco, CA 94105
                    </div>
                    <div>
                      <strong className="text-gray-900">Business Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM PST
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default TermsPage
