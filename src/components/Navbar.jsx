import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-emerald-500" />
            <div>
              <span className="text-lg font-bold text-navy-900 leading-none block">The Learning Cave</span>
              <span className="text-[10px] font-medium text-emerald-600 tracking-widest uppercase">ModuLearn</span>
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

          <button onClick={() => setOpen(!open)} className="md:hidden text-navy-700">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-navy-100 px-4 pb-4">
          <a href="#problem" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-navy-600">Why ModuLearn</a>
          <a href="#features" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-navy-600">How It Works</a>
          <a href="#tutor" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-navy-600">Our Tutor</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-navy-600">Pricing</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            Book Free Trial
          </a>
        </div>
      )}
    </nav>
  )
}
