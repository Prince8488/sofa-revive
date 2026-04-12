'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useEffect, useState } from 'react'

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const desktopImage = '/images/sofa-banner-hero.webp'
  const mobileImage = '/images/sofa-banner-hero.webp'

  return (
    <section className="md:pt-25 relative overflow-hidden bg-white px-6 pb-5 pt-20 text-slate-900">
      {isClient && (
        <Image
          src={isMobile ? mobileImage : desktopImage}
          alt="A beautifully restored sofa by SofaRevive"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-20">
          {/* LEFT: CONTENT (The Authority Pillar) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star fill-blue-600 text-blue-600"
                  aria-hidden="true"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                  Bangalore's #1 Furniture Clinic
                </span>
              </div>

              <h1 className="h1 font-roboto">
                Sofa Restoration <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                  Redefined.
                </span>
              </h1>

              <p className="p max-w-lg">
                With our sofa restoration redefined, we offer premium sofa
                repair and custom upholstery designed for longevity. We bring
                the showroom finish back to your doorstep.
              </p>
            </div>

            {/* DIRECT CALL TO ACTION */}
            <div className="flex flex-col gap-4 pt-0 sm:flex-row">
              <Link href="/quote" className="w-full cursor-pointer sm:w-auto">
                <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-slate-950 px-10 py-5 text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-200 transition-all hover:bg-gray-800">
                  Book Free Inspection <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/gallery" className="w-full cursor-pointer sm:w-auto">
                <button className="w-full cursor-pointer rounded-2xl border border-zinc-200 bg-white px-10 py-6 text-[11px] font-black uppercase tracking-widest text-zinc-900 transition-all hover:bg-zinc-50 active:scale-95 sm:w-auto">
                  Explore Our Gallery
                </button>
              </Link>
            </div>

            {/* TRUST INDICATORS: CLEAN & LINEAR */}
            <div className="flex items-center gap-8 border-t border-blue-100 pt-6">
              <div className="flex items-center gap-2 text-blue-700">
                <ShieldCheck
                  size={18}
                  className="lucide lucide-shield-check text-blue-600"
                />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  1Y Warranty
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle2
                  size={18}
                  className="lucide lucide-shield-check text-blue-600"
                />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Branded Materials
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: THE "PRODUCT" (Clean, High-Contrast Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-[12px] border-white shadow-2xl ring-1 ring-slate-100">
              {isClient && (
                <Image
                  src={isMobile ? mobileImage : desktopImage}
                  alt="A beautifully restored sofa, showcasing the quality of our upholstery work."
                  width={isMobile ? 800 : 1200}
                  height={isMobile ? 600 : 900}
                  priority
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}

              {/* MINIMALIST FLOATING LABEL */}
              <div className="absolute right-6 top-6 rounded-full border border-slate-200/50 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">
                <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-800"></span>
                  Craftsmanship Excellence
                </p>
              </div>
            </div>

            {/* GEOMETRIC ACCENT */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-gray-100 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
