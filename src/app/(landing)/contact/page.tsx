import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Mail, MessageSquare, Phone, MapPin, Clock, Zap, Users, Headphones } from "lucide-react"

const ContactPage = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-10 pointer-events-none"></div>

      <MaxWidthWrapper className="relative z-10 py-24 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-100 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <MessageSquare className="size-4 text-blue-400" />
            <span>Get in Touch</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Contact Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about NotifyFlow? Need help getting started? Our team is here to support your business intelligence needs.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* General Support */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 h-full">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl w-fit mb-6">
                <Headphones className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">General Support</h3>
              <p className="text-gray-300 mb-6">
                Need help with your account, billing, or using NotifyFlow? Our support team is ready to assist.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-blue-400" />
                  <a href="mailto:support@notifyflow.com" className="text-blue-400 hover:text-blue-300 underline">
                    support@notifyflow.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-gray-400" />
                  <span className="text-gray-300">24/7 for Pro users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sales */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-green-500/30 transition-all duration-300 h-full">
              <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl w-fit mb-6">
                <Users className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sales & Enterprise</h3>
              <p className="text-gray-300 mb-6">
                Interested in enterprise solutions or have questions about pricing? Let's discuss your needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-green-400" />
                  <a href="mailto:sales@notifyflow.com" className="text-green-400 hover:text-green-300 underline">
                    sales@notifyflow.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-gray-400" />
                  <span className="text-gray-300">Mon-Fri, 9AM-5PM PST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical */}
          <div className="relative group md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 h-full">
              <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl w-fit mb-6">
                <Zap className="size-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Support</h3>
              <p className="text-gray-300 mb-6">
                API issues, integration questions, or technical challenges? Our engineers are here to help.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="size-5 text-purple-400" />
                  <a href="mailto:technical@notifyflow.com" className="text-purple-400 hover:text-purple-300 underline">
                    technical@notifyflow.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-gray-400" />
                  <span className="text-gray-300">Mon-Fri, 8AM-8PM PST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <section className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
            <p className="text-gray-300 text-lg">
              Can't find what you're looking for? Drop us a line and we'll get back to you quickly.
            </p>
          </div>

          <form className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Support</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
              >
                <MessageSquare className="size-5 group-hover:scale-110 transition-transform duration-200" />
                Send Message
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
              <p className="text-gray-400 text-sm mt-4">
                We'll get back to you within 24 hours
              </p>
            </div>
          </form>
        </section>

        {/* Office Info */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Mail className="size-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-300">hello@notifyflow.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
                  <Phone className="size-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 9AM-5PM PST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                  <MapPin className="size-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">How quickly do you respond to support requests?</h4>
                <p className="text-gray-300 text-sm">We respond to all inquiries within 24 hours. Pro users receive priority support with faster response times.</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Do you offer technical implementation support?</h4>
                <p className="text-gray-300 text-sm">Yes! Our technical team can help you integrate NotifyFlow with your existing systems and workflows.</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Can I schedule a demo?</h4>
                <p className="text-gray-300 text-sm">Absolutely! Contact our sales team to schedule a personalized demo of NotifyFlow's features.</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Do you offer enterprise pricing?</h4>
                <p className="text-gray-300 text-sm">Yes, we have special pricing for enterprise customers with volume discounts and custom features.</p>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  )
}

export default ContactPage
