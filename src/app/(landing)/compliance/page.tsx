import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Shield, CheckCircle, Lock, Globe, Eye, FileCheck, Award, Users } from "lucide-react"

const CompliancePage = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50 min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>

      <MaxWidthWrapper className="relative z-10 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
            <Shield className="size-4 text-green-600" />
            <span>Security & Compliance Framework</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Compliance & Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NotifyFlow maintains the highest standards of security, privacy, and regulatory compliance to protect your business data.
          </p>
        </div>

        {/* Compliance Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: CheckCircle,
              title: "SOC 2 Type II",
              description: "Independently audited security controls",
              status: "Certified",
              color: "from-green-600 to-emerald-600"
            },
            {
              icon: Globe,
              title: "GDPR Ready",
              description: "EU General Data Protection Regulation",
              status: "Compliant",
              color: "from-blue-600 to-cyan-600"
            },
            {
              icon: Eye,
              title: "CCPA Ready",
              description: "California Consumer Privacy Act",
              status: "Compliant",
              color: "from-purple-600 to-pink-600"
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 h-full text-center shadow-lg">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mb-6`}>
                  <item.icon className="size-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="size-4" />
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid gap-12">
          
          {/* Security Framework */}
          <section className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
                <Lock className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Security Framework</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Data Protection</h3>
                <div className="space-y-4">
                  {[
                    { feature: "AES-256 Encryption", description: "Data encrypted at rest and in transit" },
                    { feature: "End-to-End Security", description: "Secure communication channels" },
                    { feature: "Access Controls", description: "Role-based permissions and MFA" },
                    { feature: "Data Segregation", description: "Tenant isolation and secure boundaries" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div className="flex gap-3">
                        <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-gray-900 font-medium">{item.feature}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Infrastructure Security</h3>
                <div className="space-y-4">
                  {[
                    { feature: "Cloud-Native Architecture", description: "Built on secure cloud infrastructure" },
                    { feature: "Regular Security Audits", description: "Third-party security assessments" },
                    { feature: "Vulnerability Management", description: "Continuous monitoring and patching" },
                    { feature: "Incident Response", description: "24/7 security monitoring and response" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div className="flex gap-3">
                        <CheckCircle className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-gray-900 font-medium">{item.feature}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Compliance */}
          <section className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                <Eye className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Privacy Compliance</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* GDPR */}
              <div className="bg-white/50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="size-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">GDPR Compliance</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Right to be forgotten</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Data portability</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Consent management</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Data breach notification</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Privacy by design</span>
                  </li>
                </ul>
              </div>

              {/* CCPA */}
              <div className="bg-white/50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="size-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">CCPA Compliance</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Right to know</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Right to delete</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Right to opt-out</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Non-discrimination</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Consumer disclosures</span>
                  </li>
                </ul>
              </div>

              {/* SOC 2 */}
              <div className="bg-white/50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="size-6 text-yellow-600" />
                  <h3 className="text-xl font-semibold text-gray-900">SOC 2 Type II</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Security controls</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Availability monitoring</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Processing integrity</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Confidentiality measures</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Independent audit</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Handling */}
          <section className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                <FileCheck className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Data Handling & Processing</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Data Collection</h3>
                <div className="space-y-4">
                  <div className="bg-white/50 p-5 rounded-xl border border-gray-200">
                    <h4 className="text-gray-900 font-medium mb-2">Minimal Data Collection</h4>
                    <p className="text-gray-600 text-sm">We collect only the data necessary to provide our services effectively.</p>
                  </div>
                  <div className="bg-white/50 p-5 rounded-xl border border-gray-200">
                    <h4 className="text-gray-900 font-medium mb-2">Transparent Processing</h4>
                    <p className="text-gray-600 text-sm">Clear documentation of how we collect, use, and store your data.</p>
                  </div>
                  <div className="bg-white/50 p-5 rounded-xl border border-gray-200">
                    <h4 className="text-gray-900 font-medium mb-2">Consent Management</h4>
                    <p className="text-gray-600 text-sm">Explicit consent mechanisms for all data processing activities.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Data Retention</h3>
                <div className="space-y-4">
                  <div className="bg-white/50 p-5 rounded-xl border border-gray-200">
                    <h4 className="text-gray-900 font-medium mb-2">Retention Policies</h4>
                    <p className="text-gray-600 text-sm">Data retained only as long as necessary for business and legal requirements.</p>
                  </div>
                  <div className="bg-white/50 p-5 rounded-xl border border-gray-200">
                    <h4 className="text-gray-900 font-medium mb-2">Secure Deletion</h4>
                    <p className="text-gray-600 text-sm">Secure data deletion processes when retention period expires.</p>
                  </div>
                  <div className="bg-white/50 p-5 rounded-xl border border-gray-200">
                    <h4 className="text-gray-900 font-medium mb-2">Backup Management</h4>
                    <p className="text-gray-600 text-sm">Encrypted backups with automatic deletion schedules.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Integrations */}
          <section className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
                <Users className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Third-Party Security</h2>
            </div>
            
            <div className="text-gray-600 space-y-6 text-lg">
              <p>
                NotifyFlow integrates with various third-party services to deliver notifications and process payments. We carefully vet all partners for security and compliance.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="size-5 text-green-600" />
                    Trusted Partners
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Stripe:</strong> PCI DSS Level 1 certified payment processing</li>
                    <li>• <strong>Discord/Slack:</strong> Enterprise-grade communication platforms</li>
                    <li>• <strong>AWS:</strong> SOC 2 Type II compliant cloud infrastructure</li>
                    <li>• <strong>Cloudflare:</strong> DDoS protection and WAF security</li>
                  </ul>
                </div>

                <div className="bg-white/50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                    <Shield className="size-5 text-blue-600" />
                    Due Diligence
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Security audits of all integrations</li>
                    <li>• Regular compliance assessments</li>
                    <li>• Data processing agreements</li>
                    <li>• Incident response coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl">
                <Award className="size-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Certifications & Audits</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "SOC 2 Type II",
                  description: "Annual independent security audits",
                  status: "Current",
                  date: "Valid through December 2025"
                },
                {
                  title: "ISO 27001",
                  description: "Information security management",
                  status: "In Progress",
                  date: "Certification expected Q2 2025"
                },
                {
                  title: "Penetration Testing",
                  description: "Third-party security assessments",
                  status: "Quarterly",
                  date: "Last tested January 2025"
                }
              ].map((cert, index) => (
                <div key={index} className="bg-white/50 p-6 rounded-xl border border-gray-200 text-center shadow-lg">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl mb-4">
                    <Award className="size-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-800 px-3 py-1 rounded-full text-sm">
                    <CheckCircle className="size-3" />
                    {cert.status}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{cert.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Security & Compliance Contact</h2>
            <div className="text-gray-600 space-y-6 text-lg">
              <p>
                For security-related inquiries, compliance questions, or to report security issues:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-gray-900 font-semibold mb-4">Security Team</h4>
                  <div className="space-y-2 text-gray-600">
                    <p><strong className="text-gray-900">Email:</strong> robert.nguyenanh@gmail.com</p>
                    <p><strong className="text-gray-900">Phone:</strong> +1 859-691-8194</p>
                    <p><strong className="text-gray-900">Response Time:</strong> Within 24 hours</p>
                  </div>
                </div>

                <div className="bg-white/50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-gray-900 font-semibold mb-4">Compliance Office</h4>
                  <div className="space-y-2 text-gray-600">
                    <p><strong className="text-gray-900">Location:</strong> Danville, Kentucky, USA</p>
                    <p><strong className="text-gray-900">Business Hours:</strong> Mon-Fri, 9AM-5PM EST</p>
                    <p><strong className="text-gray-900">Emergency:</strong> 24/7 incident response</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default CompliancePage
