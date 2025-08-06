import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Shield, Lock, Eye, Database, Bell, Users } from "lucide-react"

const PrivacyPage = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-10 pointer-events-none"></div>

      <MaxWidthWrapper className="relative z-10 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-100 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Shield className="size-4 text-purple-400" />
            <span>Privacy & Data Protection</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how NotifyFlow collects, uses, and protects your information.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-12">
          <p className="text-gray-300">
            <strong>Last Updated:</strong> January 15, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-purple max-w-none">
          <div className="grid gap-12">
            
            {/* Introduction */}
            <section className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                  <Eye className="size-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Introduction</h2>
              </div>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  NotifyFlow ("we," "our," or "us") is committed to protecting your privacy and maintaining the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our business intelligence and notification platform.
                </p>
                <p>
                  By using NotifyFlow, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our services.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                  <Database className="size-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  <ul className="text-gray-300 space-y-2 text-lg">
                    <li>• Account information (name, email address, password)</li>
                    <li>• Billing information (credit card details, billing address)</li>
                    <li>• Company information (company name, role, team size)</li>
                    <li>• Communication preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Usage Data</h3>
                  <ul className="text-gray-300 space-y-2 text-lg">
                    <li>• Event data and notifications you create or receive</li>
                    <li>• Dashboard interactions and feature usage</li>
                    <li>• API calls and integration data</li>
                    <li>• Performance metrics and analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Information</h3>
                  <ul className="text-gray-300 space-y-2 text-lg">
                    <li>• IP address, browser type, and device information</li>
                    <li>• Log files and error reports</li>
                    <li>• Cookies and similar tracking technologies</li>
                    <li>• Integration credentials (encrypted and secure)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
                  <Bell className="size-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
              </div>
              
              <div className="text-gray-300 space-y-4 text-lg">
                <p>We use the information we collect for the following purposes:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-3">Service Delivery</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Process and deliver notifications</li>
                      <li>• Maintain and improve our platform</li>
                      <li>• Provide customer support</li>
                      <li>• Monitor system performance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                    <h4 className="text-white font-semibold mb-3">Business Operations</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Process payments and billing</li>
                      <li>• Communicate service updates</li>
                      <li>• Analyze usage patterns</li>
                      <li>• Ensure platform security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
                  <Users className="size-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Information Sharing</h2>
              </div>
              
              <div className="text-gray-300 space-y-6 text-lg">
                <p>
                  We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Service Providers:</strong> We work with trusted third-party providers for payment processing, email delivery, and analytics. These providers are contractually required to protect your information.
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect our rights and safety.
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale, your information may be transferred as part of the business assets.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                  <Lock className="size-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Data Security</h2>
              </div>
              
              <div className="text-gray-300 space-y-6 text-lg">
                <p>
                  We implement industry-standard security measures to protect your information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>End-to-end encryption for data transmission</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>AES-256 encryption for data at rest</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Regular security audits and assessments</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Multi-factor authentication support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>SOC 2 Type II compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>GDPR and CCPA compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Shield className="size-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Your Rights</h2>
              </div>
              
              <div className="text-gray-300 space-y-4 text-lg">
                <p>You have the following rights regarding your personal information:</p>
                
                <div className="grid gap-4 mt-6">
                  {[
                    { title: "Access", description: "Request copies of your personal information" },
                    { title: "Correction", description: "Update or correct inaccurate information" },
                    { title: "Deletion", description: "Request deletion of your personal information" },
                    { title: "Portability", description: "Receive your data in a portable format" },
                    { title: "Objection", description: "Object to certain uses of your information" },
                    { title: "Restriction", description: "Request restriction of processing activities" }
                  ].map((right, index) => (
                    <div key={index} className="flex gap-4 bg-slate-900/30 p-4 rounded-xl border border-white/5">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-white">{right.title}:</strong> {right.description}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mt-8">
                  <p className="text-blue-200">
                    <strong>To exercise your rights,</strong> please contact us at{" "}
                    <a href="mailto:privacy@notifyflow.com" className="text-blue-400 hover:text-blue-300 underline">
                      privacy@notifyflow.com
                    </a>
                    {" "}or through your account settings.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <div className="text-gray-300 space-y-4 text-lg">
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-white">Email:</strong>{" "}
                      <a href="mailto:privacy@notifyflow.com" className="text-purple-400 hover:text-purple-300 underline">
                        privacy@notifyflow.com
                      </a>
                    </div>
                    <div>
                      <strong className="text-white">Address:</strong> NotifyFlow Technologies Inc., 123 Tech Street, San Francisco, CA 94105
                    </div>
                    <div>
                      <strong className="text-white">Response Time:</strong> We will respond to your inquiry within 30 days
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

export default PrivacyPage
