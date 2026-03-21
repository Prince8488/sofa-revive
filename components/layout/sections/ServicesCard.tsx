"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState, useCallback } from "react";
import Image from "next/image";

export default function ServiceCard({ service }: { service: any }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;

    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  }, []);

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
    >
      {/* INTERACTIVE SLIDER BOX */}
      <div
        className="relative h-64 md:h-72 overflow-hidden cursor-ew-resize touch-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        role="slider"
        aria-valuenow={sliderPos}
        aria-label={`Before and after comparison for ${service.title}`}
      >
        <Image
          src={service.image}
          alt={`${service.title} after restoration`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75 ease-out z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={service.beforeImage || service.image}
            alt={`${service.title} before restoration`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale-[0.6] brightness-75"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white/80 shadow-xl z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-2 bg-white rounded-full" />
              <div className="w-0.5 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>

        {/* Floating Labels - Standardized [10px] scale */}
        <div className="absolute top-4 left-4 z-30 bg-black/40 backdrop-blur px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest pointer-events-none">
          Before
        </div>
        <div className="absolute top-4 right-4 z-30 bg-blue-600 px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest pointer-events-none">
          After
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="p-6">
        <div className="flex justify-between items-center text-center mb-4">
          <h3 className="text-lg font-bold tracking-tight text-slate-900">
            {service.title}
          </h3>
        </div>

        <ul className="space-y-2.5 mb-8">
          {service.features.map((f: string, i: number) => (
            <li
              key={i}
              className="text-xs text-slate-500 flex items-center gap-2 italic font-medium"
            >
              <CheckCircle2 size={14} className="text-green-500" /> {f}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="w-full py-4 bg-slate-950 text-white rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all active:scale-[0.97] shadow-sm"
        >
          View Case Study
        </button>
      </div>
    </motion.div>
  );
}
