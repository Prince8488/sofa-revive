'use client'

import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Icon from '@/components/icons'
import Link from 'next/link'

export default function StickyMobileBar() {
  const PHONE_NUMBER = '+916366921602'

  // 1. Track visibility state
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  // 2. Logic: If current scroll is greater than previous, hide it.
  // We add a 50px buffer so it doesn't flicker on tiny movements.
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.div
      /* 3. Animation properties */
      variants={{
        visible: { y: 0 },
        hidden: { y: '100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      /* 4. Original styling with minor tweaks for 'Genuine' feel */
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 border-t border-slate-200 bg-white/90 px-4 pb-[calc(16px+env(safe-area-inset-bottom))] pt-4 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl md:hidden"
    >
      {/* Phone Call - Secondary */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-100 py-4 text-[10px] font-black uppercase tracking-widest text-slate-900 transition-all active:scale-95"
        aria-label="Call Now"
      >
        <Icon name="Phone" size={14} strokeWidth={3} /> Call
      </a>

      {/* Quote - Primary Action */}
      <Link
        href={'/quote'}
        className="flex flex-[2] items-center justify-center gap-2 rounded-2xl bg-slate-950 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl shadow-slate-950/20 transition-all active:scale-95"
        aria-label="Get Free Quote"
      >
        <Icon name="MessageSquare" size={14} fill="currentColor" /> Get Free
        Quote
      </Link>
    </motion.div>
  )
}
