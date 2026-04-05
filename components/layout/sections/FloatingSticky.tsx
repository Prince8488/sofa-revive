'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Plus } from 'lucide-react'

export default function FloatingSticky() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '919304059249'

  // Removed the "Quote" item from this list
  const menuItems = [
    {
      icon: <MessageCircle size={22} />,
      label: 'WhatsApp',
      color: 'bg-green-500',
      onClick: () => window.open(`https://wa.me/${phoneNumber}`, '_blank'),
    },
    {
      icon: <Phone size={22} />,
      label: 'Call',
      color: 'bg-slate-900',
      onClick: () => (window.location.href = `tel:+${phoneNumber}`),
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex hidden flex-col items-end gap-4 md:block lg:block">
      <AnimatePresence>
        {isOpen && (
          <div className="mb-2 flex flex-col items-end gap-3">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{
                  delay: i * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex items-center gap-3"
              >
                <span className="rounded-lg border border-slate-100 bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-700 shadow-sm backdrop-blur-md">
                  {item.label}
                </span>
                <button
                  onClick={item.onClick}
                  className={`${item.color} flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-xl transition-all hover:scale-110 active:scale-90`}
                >
                  {item.icon}
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 135 : 0 }}
        aria-label="Contact us on WhatsApp or Call"
        className={`flex h-16 w-16 items-center justify-center rounded-3xl shadow-2xl transition-colors ${
          isOpen ? 'bg-slate-100 text-slate-900' : 'bg-slate-900 text-white'
        }`}
      >
        <Plus size={32} />
      </motion.button>
    </div>
  )
}
