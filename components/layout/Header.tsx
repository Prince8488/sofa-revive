'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  Armchair,
  ChevronRight,
  ChevronDown,
  Menu,
  MessageSquare,
  Phone,
  X,
} from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface MobileDrawerProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const supportLinks = [
  { label: 'Terms Of Use', href: '/terms-of-use' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'FAQs', href: '/faq' },
]

const mobileServices = [
  {
    name: 'Upholstery',
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=300',
    href: '/services/sofa-upholstery',
  },
  {
    name: 'Repair',
    img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300',
    href: '/services/sofa-repair',
  },
  {
    name: 'Cleaning',
    img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300',
    href: '/services/sofa-polishing',
  },
  {
    name: 'Polishing',
    img: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=300',
    href: '/services/sofa-polishing',
  },
  {
    name: 'Custom',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300',
    href: '/services/sofa-repair',
  },
  {
    name: 'Refill',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300',
    href: '/services/sofa-upholstery',
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }, [pathname])

  return (
    <header
      className={`fixed top-0 z-[100] w-full bg-white shadow-lg transition-all  duration-300 ${
        isScrolled
          ? 'border-b border-slate-100 bg-white/80 shadow-sm backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <nav
        aria-label="Main navigation"
        role="navigation"
        className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20"
      >
        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="-ml-2 cursor-pointer p-2 text-slate-900"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex flex-1 md:justify-center lg:flex-none lg:justify-start">
          <Link href="/" className="group flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 p-1.5 text-white shadow-lg shadow-blue-100 transition-transform group-hover:scale-110">
              <Armchair size={18} />
            </div>
            <span className="text-xl font-black uppercase tracking-tighter text-slate-900">
              SOFA<span className="text-blue-600">REVIVE</span>
            </span>
          </Link>
        </div>

        {/* --- SEGREGATED DESKTOP MENU --- */}
        <DesktopNav />

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <Link href="/quote">
            <button className="cursor-pointer rounded-full bg-slate-900 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-blue-600 active:scale-95">
              Get Quote
            </button>
          </Link>
        </div>
      </nav>

      {/* --- SEGREGATED MOBILE DRAWER --- */}
      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

/** * DESKTOP NAVIGATION COMPONENT
 */
function DesktopNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeService, setActiveService] = useState(mobileServices[0])

  return (
    <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <li
          key={link.name}
          onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
          onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
          className="relative py-8"
        >
          <Link
            href={link.href}
            className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-blue-600"
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown
                size={12}
                className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            )}
          </Link>

          <AnimatePresence>
            {link.hasDropdown && isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="absolute left-1/2 top-[100%] flex w-[500px] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-slate-50 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                aria-label="Services dropdown"
              >
                <div className="flex w-1/2 flex-col gap-2 border-r border-slate-50 p-6">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Specialties
                  </p>
                  {mobileServices.map((service) => (
                    <Link
                      href={service.href}
                      key={service.name}
                      onMouseEnter={() => setActiveService(service)}
                    >
                      <div
                        className={`flex w-full items-center justify-between rounded-xl p-3 transition-all ${activeService.name === service.name ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        <span className="text-[11px] font-black uppercase tracking-wider">
                          {service.name}
                        </span>
                        <ChevronRight
                          size={14}
                          className={
                            activeService.name === service.name
                              ? 'opacity-100'
                              : 'opacity-0'
                          }
                        />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex w-1/2 flex-col gap-4 bg-slate-50 p-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={activeService.img}
                      alt={activeService.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-black uppercase leading-none tracking-widest text-blue-600">
                    Expert Care
                  </p>
                  <p className="text-xs font-medium leading-relaxed text-slate-500">
                    Professional {activeService.name.toLowerCase()} services.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  )
}

/** * MOBILE DRAWER COMPONENT (Industry Level Style)
 */
function MobileDrawer({ isOpen, setIsOpen }: MobileDrawerProps) {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. Accessible Backdrop: Handles click-to-close and focus trapping */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[998] bg-slate-900/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-y-0 left-0 z-[999] flex h-[100dvh] w-[88%] max-w-sm flex-col border-r border-slate-100 bg-white shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* --- HEADER: Identity & Close --- */}
            <div className="flex flex-none items-center justify-between border-b border-slate-50 p-6">
              <div className="flex flex-col">
                <span className="text-lg font-black uppercase leading-none text-slate-900">
                  SOFA<span className="text-blue-600">REVIVE</span>
                </span>
                <span className="mt-1 text-[9px] font-medium uppercase tracking-tighter text-slate-400">
                  Premium Furniture Care
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="-mr-2 p-2 text-slate-400 transition-colors hover:text-slate-900"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* --- BODY: Navigation & Services --- */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-8">
              {/* Main Navigation Group */}
              <div className="mb-10">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/60">
                  Main Menu
                </p>
                <nav className="flex flex-col">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      {link.hasDropdown ? (
                        <div className="py-1">
                          <button
                            onClick={() =>
                              setMobileServicesOpen(!mobileServicesOpen)
                            }
                            className="flex w-full items-center justify-between py-3 text-xl font-bold tracking-tight text-slate-800"
                          >
                            {link.name}
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="grid grid-cols-2 gap-3 py-4">
                                  {mobileServices.map((service) => (
                                    <Link
                                      href={service.href}
                                      key={service.name}
                                      className="group flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-2.5 transition-all active:scale-95"
                                    >
                                      <div className="relative aspect-square w-full overflow-hidden rounded-xl grayscale-[0.5] transition-all group-hover:grayscale-0">
                                        <Image
                                          src={service.img}
                                          alt={service.name}
                                          fill
                                          className="object-cover"
                                        />
                                      </div>
                                      <span className="text-center text-[10px] font-black uppercase tracking-tighter text-slate-600">
                                        {service.name}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center justify-between border-b border-slate-50/50 py-4 text-xl font-bold tracking-tight text-slate-800"
                        >
                          {link.name}
                          <ChevronRight size={16} className="text-slate-200" />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Legal & Support Section: Professional touch */}
              <div className="border-t border-slate-50 pb-4 pt-8">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Legal & Support
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {supportLinks.map((item: { label: string; href: string }) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-xs font-semibold text-slate-500 transition-colors hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* --- FOOTER: High-Impact Actions --- */}
            <div className="flex-none border-t border-slate-100 bg-slate-50/80 p-6">
              <p className="mb-4 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                Ready to revive your sofa?
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <a
                    href="tel:+919304059249"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-4 text-slate-900 shadow-sm transition-all active:scale-95"
                    aria-label="Call us at +919304059249"
                  >
                    <Phone size={16} className="text-blue-600" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">
                      Call Now
                    </span>
                  </a>
                  <a
                    href="https://wa.me/919304059249"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 text-white shadow-lg shadow-green-200 transition-all active:scale-95"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <MessageSquare size={16} fill="white" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">
                      WhatsApp
                    </span>
                  </a>
                </div>

                <Link href="/quote" className="w-full">
                  <button className="w-full rounded-2xl bg-blue-600 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-blue-100 transition-all active:scale-95">
                    Book Inspection
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
