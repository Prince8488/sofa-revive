"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Armchair,
  ChevronRight,
  Menu,
  MessageSquare,
  Phone,
  X,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// 1. REUSABILITY: Centralized config for easy updates
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "/contact" },
];

const mobileServices = [
  {
    name: "Upholstery",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=300",
  },
  {
    name: "Repair",
    img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=300",
  },
  {
    name: "Cleaning",
    img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300",
  },
  {
    name: "Polishing",
    img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=300",
  },
  {
    name: "Custom",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300",
  },
  {
    name: "Refill",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. OPTIMIZATION: Track scroll for Glassmorphism
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
        {/* HAMBURGER (Mobile Trigger) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="p-2 -ml-2 text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* LOGO (Centered on mobile via flex-1, Left on desktop via lg:justify-start) */}
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

        {/* DESKTOP MENU (Mathematically Centered) */}
        <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[11px] font-black text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="tel:919304059249"
            className="hidden md:flex lg:flex items-center gap-2 group"
          >
            <div className="p-2 bg-slate-100 text-slate-900 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all ">
              <Phone size={14} />
            </div>
            <span className="hidden lg:flex md:flex text-[11px] font-bold tracking-widest text-slate-900 uppercase ">
              +91 93040 59249
            </span>
          </a>
          <Link href="/quote">
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-[10px] font-black uppercase tracking-widest">
              Get Quote
            </button>
          </Link>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[999] lg:hidden flex flex-col h-screen w-full overflow-hidden"
          >
            <div className="p-5 flex justify-between items-center border-b border-slate-50">
              <div className="flex-1 flex justify-center lg:relative lg:flex-none lg:left-0 lg:translate-x-0">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                    <Armchair size={18} />
                  </div>
                  <span className="text-xl font-black tracking-tighter uppercase text-slate-900">
                    SOFA<span className="text-blue-600">REVIVE</span>
                  </span>
                </Link>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 scroll-smooth">
              <nav className="flex flex-col mb-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-1.5xl font-black uppercase tracking-tighter active:text-blue-600 border-b border-slate-50 flex justify-between items-center"
                  >
                    {link.name}
                    <ChevronRight size={20} className="text-blue-600" />
                  </Link>
                ))}
              </nav>

              {/* 3. PERFORMANCE: Optimized Service Grid with Next Image */}
              <div className="grid grid-cols-3 gap-3 mb-12">
                {mobileServices.map((service) => (
                  <div
                    key={service.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
                      <Image
                        src={service.img}
                        alt={service.name}
                        fill
                        sizes="30vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[9px] font-black text-slate-800 uppercase text-center">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 bg-slate-50/50">
              <div className="flex gap-3">
                <a
                  href="tel:9876543210"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 rounded-2xl text-white"
                >
                  <Phone size={16} />
                  <span className="text-[11px] font-black uppercase">
                    Call Now
                  </span>
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] rounded-2xl text-white"
                >
                  <MessageSquare size={16} fill="white" />
                  <span className="text-[11px] font-black uppercase">
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
