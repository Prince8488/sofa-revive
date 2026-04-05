'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Hammer,
  Sparkles,
  Layers,
} from 'lucide-react'

const ProcessSection = () => {
  const processSteps = [
    {
      id: '01',
      title: 'Frame Reinforcement',
      description:
        "We don't just change the cloth. Our team strips the sofa down to its skeleton, replacing worn-out webbing and reinforcing joints with industrial-grade adhesives and seasoned wood blocks.",
      icon: <Hammer size={20} />,
      tag: 'Structural',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '02',
      title: 'Premium Cushioning',
      description:
        "Using high-density 40-count foam and pocket springs, we ensure your sofa feels 'showroom new' for years. We layer it with poly-fill for that signature plush finish.",
      icon: <Layers size={20} />,
      tag: 'Comfort',
      image:
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '03',
      title: 'Deep Sanitization',
      description:
        'Before the new fabric goes on, the entire internal structure undergoes a multi-point anti-dust mite and anti-fungal treatment to ensure a healthy living environment.',
      icon: <Droplets size={20} />,
      tag: 'Hygiene',
      image:
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '04',
      title: 'Precision Upholstery',
      description:
        'Our master tailors use computerized stitching and pattern matching. Every fold and seam is inspected for 100% symmetry before the final QC stamp.',
      icon: <Sparkles size={20} />,
      tag: 'Finish',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    <section className="min-h-screen border-t border-slate-100 bg-white px-4 py-10 selection:bg-blue-100 md:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 lg:flex-row lg:gap-16">
        {/* LEFT: THE MOTIVATION (Sticky on Desktop) */}
        <div className="w-full space-y-8 lg:sticky lg:top-10 lg:w-[35%]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              <ShieldCheck size={12} fill="currentColor" /> Quality First
            </div>
            <h2 className="h2">
              How We <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Work.
              </span>
            </h2>
            <p className="p max-w-sm">
              From the moment we pick up your furniture to the final stitch, we
              follow a rigorous industrial restoration process.
            </p>
          </motion.div>

          {/* Side Summary Cards */}
          <div className="hidden flex-col gap-4 md:flex">
            <div className="group rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6 transition-colors hover:border-blue-200">
              <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-blue-600">
                Current Focus
              </p>
              <h4 className="mb-1 flex items-center gap-2 font-bold text-slate-900">
                Deep Assessment{' '}
                <ChevronRight size={14} className="text-slate-300" />
              </h4>
              <p className="text-xs font-medium leading-relaxed text-slate-500">
                We identify structural weaknesses, wood-rot, and fabric fatigue.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[1.5rem] bg-blue-600 p-5 text-white shadow-xl shadow-blue-100">
              <CheckCircle2 size={24} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                  Warranty
                </p>
                <p className="text-sm font-bold tracking-tight">
                  12 Months on Structure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: THE CONTENT AREA (Scrolling) */}
        <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 p-6 md:p-12 lg:w-[65%] lg:p-16">
          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white shadow-lg shadow-slate-200">
                      {step.id}
                    </span>
                    <h3 className="h3">{step.title}</h3>
                  </div>
                  <span className="hidden rounded-full border border-slate-200 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-400 sm:block">
                    {step.tag}
                  </span>
                </div>

                {/* Actual Process Image */}
                <div className="group relative aspect-video w-full overflow-hidden rounded-[2rem] border-4 border-white bg-slate-200 shadow-sm transition-all duration-500 hover:border-blue-50 hover:shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 transition-colors group-hover:bg-transparent" />
                </div>

                <p className="p max-w-2xl">{step.description}</p>
              </motion.div>
            ))}

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="border-t border-slate-200 pt-12 text-center"
            >
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                Ready to start?
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:gap-4 hover:bg-blue-600"
              >
                Get Your Estimate <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
