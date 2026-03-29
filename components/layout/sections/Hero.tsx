"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white text-slate-900 pt-20 md:pt-30 pb-16 px-6 overflow-hidden">
      {/* 1. STRUCTURAL GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT: CONTENT (The Authority Pillar) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em]">
                <span className="w-8 h-[1px] bg-blue-600"></span>
                Bengaluru's Premier Studio
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-slate-950">
                Sofa Restoration <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
                  Redefined.
                </span>
              </h1>

              <p className="text-lg text-slate-700 max-w-lg leading-relaxed font-medium">
                Institutional-grade upholstery and structural repair for luxury
                homes. Delivered with a 1-year certified warranty.
              </p>
            </div>

            {/* DIRECT CALL TO ACTION */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/quote" className="w-full sm:w-auto cursor-pointer">
                <button className="w-full bg-slate-950 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 cursor-pointer">
                  Book Free Inspection <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            {/* TRUST INDICATORS: CLEAN & LINEAR */}
            <div className="flex items-center gap-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-600">
                <ShieldCheck size={18} className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  1Y Warranty
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 size={18} className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  ISO Certified
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: THE "PRODUCT" (Clean, High-Contrast Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&&auto=format&fit=crop&q=60&w=800"
                alt="Luxury Sofa"
                fill
                priority
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* MINIMALIST FLOATING LABEL */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/50 shadow-sm">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  Craftsmanship Excellence
                </p>
              </div>
            </div>

            {/* GEOMETRIC ACCENT */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
