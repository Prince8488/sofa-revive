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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // Mobile accordion state
  const [activeService, setActiveService] = useState(mobileServices[0]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-white"
      }`}
      style={{ WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none" }}
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative">
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 -ml-2 text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
            aria-label="Open main menu"
          >
            <Menu size={28} />
          </button>
        </div>

        <div className="flex-1 flex md:justify-center sm:justify-center lg:justify-start lg:flex-none">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <Armchair size={18} />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase text-slate-900">
              SOFA<span className="text-blue-600">REVIVE</span>
            </span>
          </Link>
        </div>

        {/* DESKTOP MENU (Megamenu Pattern) */}
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
                      <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">
                        Our Specialties
                      </p>
                      {mobileServices.map((service) => (
                        <Link href={service.href} key={service.name}>
                          <button
                            onMouseEnter={() => setActiveService(service)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left ${
                              activeService.name === service.name
                                ? "bg-blue-50 text-blue-600"
                                : "text-slate-600 hover:bg-slate-50"
                            }`}
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
                          </button>
                        </Link>
                      ))}
                    </div>
                    <div className="w-1/2 p-6 bg-slate-50 flex flex-col gap-4">
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeService.name}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={activeService.img}
                              alt={activeService.name}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">
                        Expert Care
                      </p>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        Professional {activeService.name.toLowerCase()} for
                        premium furniture.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/quote">
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-[10px] font-black uppercase tracking-widest">
              Get Quote
            </button>
          </Link>
        </div>
      </nav>

      {/* MOBILE DRAWER (Improved for Megamenu feel) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[999] lg:hidden flex flex-col h-screen w-full"
          >
            <div className="p-5 flex justify-between items-center border-b border-slate-50">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                  <Armchair size={18} />
                </div>
                <span className="text-xl font-black uppercase text-slate-900">
                  SOFA<span className="text-blue-600">REVIVE</span>
                </span>
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <React.Fragment key={link.name}>
                    {link.hasDropdown ? (
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="py-5 text-2xl font-black uppercase tracking-tighter border-b border-slate-50 flex justify-between items-center text-left"
                      >
                        {link.name}
                        <ChevronDown
                          size={24}
                          className={`text-blue-600 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="py-5 text-2xl font-black uppercase tracking-tighter border-b border-slate-50 flex justify-between items-center"
                      >
                        {link.name}
                        <ChevronRight size={20} className="text-slate-300" />
                      </Link>
                    )}

                    {/* MOBILE ACCORDION CONTENT */}
                    <AnimatePresence>
                      {link.hasDropdown && mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-slate-50/50 rounded-2xl my-2"
                        >
                          <div className="grid grid-cols-2 gap-3 p-4">
                            {mobileServices.map((service) => (
                              <Link
                                href={service.href}
                                key={service.name}
                                onClick={() => setIsOpen(false)}
                                className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-2"
                              >
                                <div className="relative aspect-square w-full rounded-xl overflow-hidden">
                                  <Image
                                    src={service.img}
                                    alt={service.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-tighter text-slate-800">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
              </nav>
            </div>

            {/* QUICK CONTACTS */}
            <div className="p-5 border-t border-slate-100 bg-white">
              <div className="flex gap-3">
                <a
                  href="tel:919304059249"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 rounded-2xl text-white shadow-lg"
                >
                  <Phone size={16} />
                  <span className="text-[11px] font-black uppercase tracking-widest">
                    Call
                  </span>
                </a>
                <a
                  href="https://wa.me/919304059249"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] rounded-2xl text-white shadow-lg"
                >
                  <MessageSquare size={16} fill="white" />
                  <span className="text-[11px] font-black uppercase tracking-widest">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
