'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useMediaQuery from '@/hooks/useMediaQuery'

type ServiceCardProps = {
  service: any
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [sliderPos, setSliderPos] = useState(50)

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect()
    const x =
      'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX

    const position = ((x - container.left) / container.width) * 100
    setSliderPos(Math.max(0, Math.min(100, position)))
  }, [])

  const image = isMobile ? `${service.image}&ar=3:4&fit=crop` : service.image
  const beforeImage = isMobile
    ? `${service.beforeImage || service.image}&ar=3:4&fit=crop`
    : service.beforeImage || service.image

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl"
    >
      {/* INTERACTIVE SLIDER BOX */}
      <div
        className="relative h-64 cursor-ew-resize touch-none overflow-hidden md:h-72"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        role="slider"
        aria-valuenow={sliderPos}
        aria-label={`Before and after comparison for ${service.title}`}
      >
        <Image
          src={image}
          alt={`${service.title} after restoration`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div
          className="absolute inset-0 z-10 h-full w-full overflow-hidden transition-all duration-75 ease-out"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${service.title} before restoration`}
            fill
            className="object-cover brightness-75 grayscale-[0.6]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-white/80 shadow-xl"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-gray-800 shadow-lg">
            <div className="flex gap-0.5">
              <div className="h-2 w-0.5 rounded-full bg-white" />
              <div className="h-2 w-0.5 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* Floating Labels */}
        <div className="pointer-events-none absolute left-4 top-4 z-30 rounded bg-black/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">
          Before
        </div>
        <div className="pointer-events-none absolute right-4 top-4 z-30 rounded bg-gray-800 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          After
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between text-center">
          <h3 className="h3">{service.title}</h3>
        </div>

        <ul className="mb-8 space-y-2.5">
          {service.features.map((f: string, i: number) => (
            <li
              key={i}
              className="flex items-center gap-2 text-xs font-medium italic text-slate-700"
            >
              <CheckCircle2 size={14} className="text-green-500" /> {f}
            </li>
          ))}
        </ul>

        {/* Wrap Button in Link */}
        <Link
          href={service.href || '#'}
          className="block w-full cursor-pointer"
          aria-label={`View case study for ${service.title}`}
        >
          <button
            type="button"
            className="w-full cursor-pointer rounded-xl bg-slate-950 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-sm transition-all hover:bg-gray-800 active:scale-[0.97]"
          >
            View Case Study
          </button>
        </Link>
      </div>
    </motion.div>
  )
}
