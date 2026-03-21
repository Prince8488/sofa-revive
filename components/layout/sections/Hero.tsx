"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    /**
     * FIX: Added 'min-h-screen' and 'flex items-center' to ensure vertical centering.
     * pt-24 (mobile) and md:pt-32 (desktop) provides the safe zone for your header.
     */
    <section className="relative bg-slate-50 min-h-screen flex items-center pt-24 md:pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Subtle Accent - Industry Aesthetic */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -z-10 tracking-tighter" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Badge: Standardized 10px font for premium look */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-[10px] font-bold mb-6 uppercase tracking-[0.15em]">
            <ShieldCheck size={12} className="shrink-0" /> Top Rated in
            Bangalore
          </div>

          {/* Heading: Balanced leading and tracking for "Premium" feel */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Premium Sofa Care <br className="hidden sm:block" />
            at your{" "}
            <span className="text-blue-600 relative inline-block">
              Doorstep.
              <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-100 -z-10 hidden md:block" />
            </span>
          </h1>

          {/* Body: High-readability font scale */}
          <p className="text-sm md:text-base lg:text-lg text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
            Expert repairs and luxury upholstery. We provide institutional-grade
            furniture restoration with a 10-year warranty on structural frames.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <button
              type="button"
              className="w-full sm:w-auto bg-slate-950 text-white px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-2xl active:scale-95 hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group"
            >
              Book Inspection
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <div className="flex items-center gap-3 py-2">
              <div className="flex -space-x-2.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative w-8 h-8 md:w-9 md:h-9">
                    <Image
                      src={`https://i.pravatar.cc/100?u=${i + 10}`}
                      alt="Customer review"
                      fill
                      sizes="36px"
                      className="rounded-full bg-slate-200 border-2 border-white object-cover shadow-sm"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[11px] font-black text-slate-900 uppercase tracking-tighter">
                  4.8 Rating
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  10k+ Reviews
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Responsive Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {/* Card 1: Brand Stats */}
          <div className="bg-blue-600 rounded-[2rem] p-6 md:p-10 text-white flex flex-col justify-between aspect-square shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
            <ShieldCheck size={32} className="text-blue-200" />
            <div>
              <div className="text-2xl md:text-3xl font-black italic mb-1 tracking-tighter">
                100%
              </div>
              <h3 className="text-[10px] md:text-xs font-bold leading-tight uppercase tracking-[0.2em] opacity-90">
                Institutional <br /> Quality Assured
              </h3>
            </div>
          </div>

          {/* Card 2: Professional Visual */}
          <div className="relative rounded-[2rem] aspect-square w-full shadow-2xl overflow-hidden bg-slate-200 border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
              alt="Luxury sofa restoration"
              fill
              priority
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
