"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Armchair,
  ChevronRight,
  ChevronDown,
  Menu,
  MessageSquare,
  Phone,
  X,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Terms Of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "FAQs", href: "/faq" },
];

const mobileServices = [
  {
    name: "Upholstery",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=300",
    href: "/services/sofa-upholstery",
  },
  {
    name: "Repair",
    img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300",
    href: "/services/sofa-repair",
  },
  {
    name: "Cleaning",
    img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300",
    href: "/services/sofa-polishing",
  },
  {
    name: "Polishing",
    img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=300",
    href: "/services/sofa-polishing",
  },
  {
    name: "Custom",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300",
    href: "/services/sofa-repair",
  },
  {
    name: "Refill",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300",
    href: "/services/sofa-upholstery",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 shadow-lg  bg-white ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative">
        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 -ml-2 text-slate-900 cursor-pointer"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 flex md:justify-center lg:justify-start lg:flex-none">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-blue-100">
              <Armchair size={18} />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase text-slate-900">
              SOFA<span className="text-blue-600">REVIVE</span>
            </span>
          </Link>
        </div>

        {/* --- SEGREGATED DESKTOP MENU --- */}
        <DesktopNav />

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <Link href="/quote">
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-[10px] font-black uppercase tracking-widest cursor-pointer">
              Get Quote
            </button>
          </Link>
        </div>
      </nav>

      {/* --- SEGREGATED MOBILE DRAWER --- */}
      <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

/** * DESKTOP NAVIGATION COMPONENT
 */
function DesktopNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState(mobileServices[0]);

  return (
    <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
      {navLinks.map((link) => (
        <li
          key={link.name}
          onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
          onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
          className="relative py-8"
        >
          <Link
            href={link.href}
            className="text-[11px] font-black text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-[0.2em] flex items-center gap-1"
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown
                size={12}
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            )}
          </Link>

          <AnimatePresence>
            {link.hasDropdown && isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[500px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-50 overflow-hidden flex"
              >
                <div className="w-1/2 p-6 flex flex-col gap-2 border-r border-slate-50">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                    Specialties
                  </p>
                  {mobileServices.map((service) => (
                    <Link
                      href={service.href}
                      key={service.name}
                      onMouseEnter={() => setActiveService(service)}
                    >
                      <div
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${activeService.name === service.name ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"}`}
                      >
                        <span className="text-[11px] font-black uppercase tracking-wider">
                          {service.name}
                        </span>
                        <ChevronRight
                          size={14}
                          className={
                            activeService.name === service.name
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="w-1/2 p-6 bg-slate-50 flex flex-col gap-4">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={activeService.img}
                      alt={activeService.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">
                    Expert Care
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Professional {activeService.name.toLowerCase()} services.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}

/** * MOBILE DRAWER COMPONENT (Industry Level Style)
 */
function MobileDrawer({ isOpen, setIsOpen }) {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[998] lg:hidden"
            aria-hidden="true"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-y-0 left-0 w-[88%] max-w-sm bg-white z-[999] lg:hidden flex flex-col h-[100dvh] shadow-2xl border-r border-slate-100"
            role="dialog"
            aria-modal="true"
          >
            {/* --- HEADER: Identity & Close --- */}
            <div className="flex-none p-6 flex justify-between items-center border-b border-slate-50">
              <div className="flex flex-col">
                <span className="text-lg font-black uppercase text-slate-900 leading-none">
                  SOFA<span className="text-blue-600">REVIVE</span>
                </span>
                <span className="text-[9px] font-medium text-slate-400 uppercase tracking-tighter mt-1">
                  Premium Furniture Care
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* --- BODY: Navigation & Services --- */}
            <div className="flex-1 overflow-y-auto px-6 py-8 overscroll-contain">
              {/* Main Navigation Group */}
              <div className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/60 mb-4">
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
                            className="w-full py-3 text-xl font-bold tracking-tight text-slate-800 flex justify-between items-center"
                          >
                            {link.name}
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="grid grid-cols-2 gap-3 py-4">
                                  {mobileServices.map((service) => (
                                    <Link
                                      href={service.href}
                                      key={service.name}
                                      className="group bg-slate-50 p-2.5 rounded-2xl border border-slate-100 flex flex-col gap-2 active:scale-95 transition-all"
                                    >
                                      <div className="relative aspect-square w-full rounded-xl overflow-hidden grayscale-[0.5] group-hover:grayscale-0 transition-all">
                                        <Image
                                          src={service.img}
                                          alt={service.name}
                                          fill
                                          className="object-cover"
                                        />
                                      </div>
                                      <span className="text-[10px] font-black uppercase tracking-tighter text-slate-600 text-center">
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
                          className="py-4 text-xl font-bold tracking-tight text-slate-800 border-b border-slate-50/50 flex justify-between items-center"
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
              <div className="border-t border-slate-50 pt-8 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Legal & Support
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {supportLinks.map((item: { label: string; href: string }) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* --- FOOTER: High-Impact Actions --- */}
            <div className="flex-none p-6 bg-slate-50/80 border-t border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 text-center">
                Ready to revive your sofa?
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <a
                    href="tel:+919304059249"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 shadow-sm active:scale-95 transition-all"
                  >
                    <Phone size={16} className="text-blue-600" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">
                      Call Now
                    </span>
                  </a>
                  <a
                    href="https://wa.me/919304059249"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] rounded-2xl text-white shadow-lg shadow-green-200 active:scale-95 transition-all"
                  >
                    <MessageSquare size={16} fill="white" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">
                      WhatsApp
                    </span>
                  </a>
                </div>

                <Link href="/quote" className="w-full">
                  <button className="w-full py-4 bg-blue-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-100 active:scale-95 transition-all">
                    Book Inspection
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
