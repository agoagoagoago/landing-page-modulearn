import { useState } from 'react'
import { Send, ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 sm:right-20 w-48 sm:w-80 h-48 sm:h-80 bg-emerald-500 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-emerald-400 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Copy */}
          <div className="text-center md:text-left">
            <span className="inline-block text-emerald-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-3">
              Take the First Step
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
              Ready to find your <span className="text-emerald-400">learning leaks</span>?
            </h2>
            <p className="text-navy-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Book a free ModuLearn Diagnostic Session. We&rsquo;ll map your child&rsquo;s current mastery level across
              the syllabus, identify the exact gaps, and show you a clear plan to bridge them. No obligation, no hard sell.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base text-navy-200"><strong className="text-white">Step 1:</strong> Fill in the form or WhatsApp us</p>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base text-navy-200"><strong className="text-white">Step 2:</strong> Free diagnostic assessment of your child&rsquo;s gaps</p>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-sm sm:text-base text-navy-200"><strong className="text-white">Step 3:</strong> Receive a personalised ModuLearn Mastery Plan</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Send className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">Thank you!</h3>
                <p className="text-sm sm:text-base text-navy-500">
                  We&rsquo;ll reach out within 24 hours to schedule your free diagnostic session.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-1">Schedule Your Diagnostic Trial</h3>
                <p className="text-xs sm:text-sm text-navy-400 mb-4 sm:mb-6">Free, no-obligation assessment session</p>
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label htmlFor="parent-name" className="block text-sm font-medium text-navy-700 mb-1">Parent&rsquo;s Name</label>
                    <input
                      id="parent-name"
                      type="text"
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900 text-base"
                      placeholder="e.g. Mrs. Tan"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-navy-700 mb-1">Contact Number</label>
                    <input
                      id="contact"
                      type="tel"
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900 text-base"
                      placeholder="+65 9XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-navy-700 mb-1">Student&rsquo;s Level</label>
                    <select
                      id="level"
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900 bg-white text-base"
                    >
                      <option value="">Select level</option>
                      <option>Secondary 1-2 (IP)</option>
                      <option>Secondary 3-4 (IP)</option>
                      <option>Secondary 3-4 (O-Level)</option>
                      <option>JC1 (A-Level)</option>
                      <option>JC2 (A-Level)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">Subject(s) Needed</label>
                    <select
                      id="subject"
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900 bg-white text-base"
                    >
                      <option value="">Select subject</option>
                      <option>Math only</option>
                      <option>Physics only</option>
                      <option>Both Math & Physics</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">Anything else we should know?</label>
                    <textarea
                      id="message"
                      rows="2"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900 resize-none text-base sm:rows-3"
                      placeholder="e.g. Current grade, target grade..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 sm:py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Schedule Your Diagnostic Trial Now
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
