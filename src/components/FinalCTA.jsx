import { useState } from 'react'
import { Send, ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 bg-emerald-500 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-emerald-400 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Copy */}
          <div>
            <span className="inline-block text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Take the First Step
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Ready to find your <span className="text-emerald-400">learning leaks</span>?
            </h2>
            <p className="text-navy-300 text-lg leading-relaxed mb-8">
              Book a free ModuLearn Diagnostic Session. We&rsquo;ll map your child&rsquo;s current mastery level across
              the syllabus, identify the exact gaps, and show you a clear plan to bridge them. No obligation, no hard sell.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-navy-200"><strong className="text-white">Step 1:</strong> Fill in the form or WhatsApp us</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-navy-200"><strong className="text-white">Step 2:</strong> Free diagnostic assessment of your child&rsquo;s gaps</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-navy-200"><strong className="text-white">Step 3:</strong> Receive a personalised ModuLearn Mastery Plan</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-7 w-7 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Thank you!</h3>
                <p className="text-navy-500">
                  We&rsquo;ll reach out within 24 hours to schedule your free diagnostic session.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-navy-900 mb-1">Schedule Your Diagnostic Trial</h3>
                <p className="text-sm text-navy-400 mb-6">Free, no-obligation assessment session</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="parent-name" className="block text-sm font-medium text-navy-700 mb-1">Parent&rsquo;s Name</label>
                    <input
                      id="parent-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900"
                      placeholder="e.g. Mrs. Tan"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-navy-700 mb-1">Contact Number</label>
                    <input
                      id="contact"
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900"
                      placeholder="+65 9XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-navy-700 mb-1">Student&rsquo;s Level</label>
                    <select
                      id="level"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900 bg-white"
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
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900 bg-white"
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
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-navy-900 resize-none"
                      placeholder="e.g. Current grade, target grade, upcoming exams..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    Schedule Your Diagnostic Trial Now
                    <ArrowRight className="h-5 w-5" />
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
