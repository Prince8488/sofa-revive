"use client";

import { Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function StickyMobileBar() {
  const PHONE_NUMBER = "+919304059249";
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hi DreamDecore, I'd like to get a quote for furniture restoration.",
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-200 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center gap-3 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
      {/* Phone Call - Secondary Action */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 active:scale-95 transition-all"
        aria-label="Call DreamDecore"
      >
        <Phone size={14} strokeWidth={3} /> Call
      </a>
      {/* WhatsApp - Primary Action */}
      <Link
        href={"/quote"}
        className="flex-[2] bg-blue-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
        aria-label="Get free Quote"
      >
        <MessageSquare size={14} fill="currentColor" /> Get Free Quote
      </Link>
    </div>
  );
}
