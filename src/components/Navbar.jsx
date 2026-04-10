import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a href="#" className="flex items-center gap-1.5 sm:gap-2">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-500" />
            <div>
              <span className="text-base sm:text-lg font-bold text-navy-900 leading-none block">The Learning Cave</span>
              <span className="text-[9px] sm:text-[10px] font-medium text-emerald-600 tracking-widest uppercase">ModuLearn</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">Why ModuLearn</a>
            <a href="#features" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">How It Works</a>
            <a href="#tutor" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">Our Tutor</a>
            <a href="#pricing" className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors">Pricing</a>
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Free Trial
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 text-navy-700">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-navy-100 px-4 pb-4">
          <a href="#problem" onClick={() => setOpen(false)} className="block py-3.5 text-base font-medium text-navy-600 border-b border-navy-50">Why ModuLearn</a>
          <a href="#features" onClick={() => setOpen(false)} className="block py-3.5 text-base font-medium text-navy-600 border-b border-navy-50">How It Works</a>
          <a href="#tutor" onClick={() => setOpen(false)} className="block py-3.5 text-base font-medium text-navy-600 border-b border-navy-50">Our Tutor</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block py-3.5 text-base font-medium text-navy-600 border-b border-navy-50">Pricing</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-3 text-center bg-emerald-500 text-white px-5 py-3 rounded-lg text-base font-semibold"
          >
            Book Free Trial
          </a>
        </div>
      )}
    </nav>
  )
}
