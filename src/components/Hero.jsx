import { ArrowRight, BarChart3, GraduationCap, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-400 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-300 text-xs sm:text-sm font-medium">Now enrolling for 2026 intake</span>
          </div>

          <h1 className="animate-fade-in-up text-[28px] leading-[1.2] sm:text-5xl lg:text-6xl font-bold text-white sm:leading-tight tracking-tight">
            From &lsquo;Stuck&rsquo; to an &lsquo;A&rsquo;:
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              The Data-Driven Path to
            </span>
            Math & Physics Mastery.
          </h1>

          <p className="animate-fade-in-up-delay mt-4 sm:mt-6 text-base sm:text-xl text-navy-200 max-w-3xl mx-auto leading-relaxed">
            Most tuition is a black box. With <strong className="text-emerald-400">ModuLearn</strong>, we eliminate the guesswork
            by tracking every concept you master in real-time. Join over{' '}
            <strong className="text-white">200+ students</strong> who have bridged the gap to excellence.
          </p>

          <div className="animate-fade-in-up-delay-2 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center px-2 sm:px-0">
            <a
              href="#contact"
              className="animate-pulse-glow inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-colors"
            >
              Book a Free Diagnostic Session
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Social proof bar */}
          <div className="animate-fade-in-up-delay-2 mt-10 sm:mt-14 grid grid-cols-3 gap-2 sm:gap-0 sm:divide-x sm:divide-navy-600 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
                <span className="text-xl sm:text-2xl font-bold text-white">12+</span>
              </div>
              <span className="text-xs sm:text-sm text-navy-300">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
                <span className="text-xl sm:text-2xl font-bold text-white">NUS</span>
              </div>
              <span className="text-xs sm:text-sm text-navy-300">Master&rsquo;s Pedigree</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-gold-400" />
                <span className="text-xl sm:text-2xl font-bold text-white">220+</span>
              </div>
              <span className="text-xs sm:text-sm text-navy-300">Happy Parents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
