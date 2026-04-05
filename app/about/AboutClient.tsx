'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Hammer,
  Leaf,
  Microscope,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutClient() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white pb-20 pt-20 text-studio-900 selection:bg-brand-100 selection:text-brand-900 md:pt-32">
      {/* 1. HERO: THE MANIFESTO */}
      <section className="relative mb-24 px-6 md:mb-32">
        <div className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-50/50 via-transparent to-transparent opacity-70" />

        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="mb-6 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-brand-600">
              <span className="h-[1px] w-8 bg-brand-200" />
              Anti-Fast Furniture • Since 2014
              <span className="h-[1px] w-8 bg-brand-200" />
            </p>
            <h1 className="text-4xl font-black uppercase italic leading-[1.1] tracking-tighter md:text-6xl">
              We don't just repair. <br />
              <span className="animate-gradient bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 bg-clip-text text-transparent">
                We Reimagine.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-sm font-medium leading-relaxed text-studio-500 opacity-90 md:text-base">
              Most furniture today is built to be replaced. At DreamDecore, we
              believe the best piece in your home is the one you already own. We
              combine Bengaluru’s heritage craftsmanship with modern material
              science to give legacies a second life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TECHNICAL AUTHORITY */}
      <section className="mb-32 px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden rounded-[2.5rem] border border-studio-200/60 bg-studio-100 shadow-2xl shadow-brand-900/5 md:grid-cols-3">
          {[
            {
              icon: <Microscope />,
              title: 'Material Science',
              text: "We use multi-density Sleepwell™ foam and high-tensile webbing for a 'better-than-new' ergonomic feel.",
            },
            {
              icon: <Hammer />,
              title: 'Structural Integrity',
              text: 'Every restoration starts with a frame audit. We reinforce joints with industrial-grade fasteners.',
            },
            {
              icon: <Sparkles />,
              title: 'Contract Grade',
              text: 'Our fabrics exceed 50,000 rub counts, sourced from premium mills in Italy and Turkey.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer space-y-6 bg-white p-12 transition-all duration-500"
            >
              <div className="text-brand-600 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tight transition-colors group-hover:text-brand-600">
                {item.title}
              </h3>
              <p className="text-xs font-medium leading-relaxed text-studio-500">
                {item.text}
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SUSTAINABILITY */}
      <section className="mx-0 mb-32 border border-studio-100/50 bg-studio-50 px-6 py-24 md:mx-6 md:rounded-[4rem]">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-green-700 shadow-sm">
              <Leaf size={12} className="animate-pulse" /> Eco-Conscious Choice
            </div>
            <h2 className="mb-8 text-3xl font-black uppercase italic tracking-tighter md:text-5xl">
              Restoration is a <br />{' '}
              <span className="text-brand-600">Radical Act.</span>
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-studio-600 md:text-base">
              Every sofa restored is 40kg of carbon emissions saved and 60kg of
              wood kept out of Bengaluru's landfills. Choosing DreamDecore isn’t
              just a design choice; it’s a commitment to a circular economy.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-studio-200 pt-10">
              <div className="group cursor-default">
                <p className="text-4xl font-black italic text-brand-600">
                  5,000+
                </p>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-studio-400">
                  Pieces Saved
                </p>
              </div>
              <div className="group cursor-default">
                <p className="text-4xl font-black italic text-brand-600">
                  300 Tons
                </p>
                <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-studio-400">
                  Waste Diverted
                </p>
              </div>
            </div>
          </motion.div>

          <div className="group relative overflow-hidden rounded-[3rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000"
              alt="Two colleagues collaborating in a modern, eco-friendly office, symbolizing SofaRevive's commitment to sustainability."
              width={1000}
              height={1000}
              className="aspect-square w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </section>

      {/* 4. THE PROMISE */}
      <section className="mb-32 px-6">
        <div className="mx-auto max-w-4xl space-y-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50"
          >
            <Award className="h-8 w-8 text-brand-600" />
          </motion.div>
          <h2 className="text-3xl font-black uppercase italic tracking-tight md:text-4xl">
            The DreamDecore Warranty
          </h2>
          <p className="mx-auto max-w-2xl text-sm italic leading-relaxed text-studio-500 md:text-base">
            "Every restoration is accompanied by a signed Certificate of
            Quality. We provide a 5-year structural warranty because we don't
            just fix furniture—we build legacies."
          </p>
          <div className="flex flex-col justify-center gap-6 pt-12 sm:flex-row">
            <Link
              href="/quote"
              aria-label="Book a consultation to get a project audit"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative z-10 flex min-w-[280px] cursor-pointer items-center justify-center gap-4 rounded-3xl bg-blue-600 px-12 py-8 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_50px_rgba(37,99,235,0.4)] transition-all hover:shadow-blue-600/60"
              >
                <span>Book Your Audit</span>
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-2"
                />
              </motion.button>
            </Link>
            <Link
              href="/gallery"
              aria-label="View our gallery of completed projects"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#0f172a',
                  color: '#fff',
                }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer rounded-2xl border-2 border-studio-900 px-12 py-6 text-[10px] font-black uppercase tracking-widest text-studio-900 transition-all"
              >
                View Our Catalog
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
