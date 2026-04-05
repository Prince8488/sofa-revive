'use client'

import { Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function StickyMobileBar() {
  const PHONE_NUMBER = '+919304059249'

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 border-t border-slate-200 bg-white/80 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg md:hidden">
      {/* Phone Call - Secondary Action */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-100 py-4 text-[10px] font-black uppercase tracking-widest text-slate-900 transition-all active:scale-95"
        aria-label="Call DreamDecore"
      >
        <Phone size={14} strokeWidth={3} /> Call
      </a>
      {/* WhatsApp - Primary Action */}
      <Link
        href={'/quote'}
        className="flex flex-[2] items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-blue-600/20 transition-all active:scale-95"
        aria-label="Get free Quote"
      >
        <MessageSquare size={14} fill="currentColor" /> Get Free Quote
      </Link>
    </div>
  )
}
