import { BookOpen, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500" />
              <span className="text-base sm:text-lg font-bold text-white">The Learning Cave</span>
            </div>
            <p className="text-sm leading-relaxed">
              Singapore&rsquo;s data-driven tuition centre. We use the ModuLearn Mastery Path to
              systematically bring students from where they are to where they want to be.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-2 text-sm">
              <li><a href="#problem" className="hover:text-emerald-400 transition-colors">Why ModuLearn</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#tutor" className="hover:text-emerald-400 transition-colors">Our Tutor</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Book a Trial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
                <span>Singapore (Location provided upon booking)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-emerald-500" />
                <a href="https://wa.me/6594521667" className="hover:text-emerald-400 transition-colors">+65 9452 1667</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>hello@thelearningcave.sg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-navy-500">
          <p>&copy; {new Date().getFullYear()} The Learning Cave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
