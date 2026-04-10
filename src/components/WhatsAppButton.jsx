import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6594521667?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20ModuLearn%20tuition."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
