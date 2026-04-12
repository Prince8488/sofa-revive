'use client'
import Image from 'next/image'

import {
  Sparkles,
  Droplets,
  Wind,
  Briefcase,
  ArrowUpRight,
  Layers,
  ShieldCheck,
} from 'lucide-react'
import Link from 'next/link'

export default function SofaPolishingClient() {
  const polishingFeatures = [
    {
      title: 'Lustre Restoration',
      desc: 'Specialized substances applied to restore the deep, original shine to tables, chairs, and armoires.',
      icon: <Sparkles className="text-gray-800" size={20} />,
      img: '/images/lustre-Restoration.webp',
    },
    {
      title: 'Grain Preservation',
      desc: 'Techniques that nourish dry wood and highlight natural patterns without compromising the finish.',
      icon: <Droplets className="text-gray-800" size={20} />,
      img: '/images/wodden-sofa-polishing-after.webp',
    },
    {
      title: 'Detail Buffing',
      desc: 'Soft-bristle precision work for intricate grooves and antique carvings to ensure a uniform glow.',
      icon: <Wind className="text-gray-800" size={20} />,
      img: '/images/grain-preservation.webp',
    },
  ]

  return (
    <div className="bg-white pt-5 text-slate-800 selection:bg-gray-800 selection:text-white">
      {/* 1. INDUSTRY HERO */}
      <section className="border-b border-slate-100 bg-slate-50 px-6 pb-12 pt-20">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-800">
            <Briefcase size={12} /> Master Wood Finishing
          </div>
          <h1
            className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Unmatched Wood Polishing Services
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-700">
            Reliable, professional, and creative solutions. We go beyond mere
            aesthetics, focusing on the preservation and long-term health of
            your wooden heirlooms and corporate furnishings.
          </p>
        </div>
      </section>

      {/* 2. CORE POLISHING GRID */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {polishingFeatures.map((feature, index) => (
            <div
              key={index}
              className="group cursor-default rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mb-2 flex items-center gap-2">
                {feature.icon}
                <h3 className="text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-slate-700">
                {feature.desc}
              </p>
              <Link
                href="/gallery"
                className="flex cursor-pointer items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-800 transition-all hover:gap-2"
              >
                Process Details <ArrowUpRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RESTORATIVE PROCESS SECTION (Z-PATTERN) */}
      <section className="overflow-hidden border-t border-slate-50 bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <h2
              className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Furniture That Looks <br /> New, Every Day
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Our master polishers understand that wood is organic. We work
              meticulously with the grain to return lost lustre. For intricate
              detail work, we use soft-bristle techniques to ensure the solution
              penetrates every groove before final buffing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                <Layers size={16} className="text-gray-800" /> Multi-Stage
                Buffing Process
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                <ShieldCheck size={16} className="text-gray-800" /> Protective
                Surface Sealing
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
              alt="Artisan wood polishing"
              fill
              className="object-cover grayscale-[30%] transition-all duration-700 hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION & INSTITUTIONAL CARE */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 text-center lg:grid-cols-2 lg:text-left">
          <div className="space-y-6">
            <h2
              className="text-2xl font-bold leading-tight md:text-3xl"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Preserve the Lifespan <br /> of Your Assets
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-400 lg:mx-0">
              Our creative staff provides personal consultations to navigate the
              vast variety of polishing combinations. From hardware care to
              designer-grade materials, we tell your story by preserving what
              lasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 lg:justify-start">
              <Link
                href="/quote"
                className="cursor-pointer rounded bg-gray-800 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-900"
              >
                Request Consultation
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="group rounded-2xl bg-slate-800 p-6 text-center">
              <div className="mb-1 text-2xl font-bold italic tracking-tighter text-white transition-colors group-hover:text-gray-400">
                Deep
              </div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                Nourishment
              </div>
            </div>
            <div className="group rounded-2xl bg-slate-800 p-6 text-center">
              <div className="mb-1 text-2xl font-bold italic tracking-tighter text-white transition-colors group-hover:text-gray-400">
                High
              </div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                Lustre Finish
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL ACTION */}
      <section className="border-t border-slate-100 bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-xl space-y-6">
          <h2
            className="text-2xl font-black uppercase tracking-tight text-slate-900"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Institutional Quality. <br />
            <span className="text-gray-800 underline decoration-slate-200 underline-offset-8">
              Artisan Finesse.
            </span>
          </h2>
          <p className="text-[10px] font-bold uppercase leading-loose tracking-widest text-slate-600">
            From antique dressers to modern boardroom tables, SofaRevive
            delivers the standard of excellence Bangalore demands.
          </p>
          <Link href="/quote" className="cursor-pointer">
            <button className="cursor-pointer rounded-lg bg-slate-950 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-gray-800 active:scale-95">
              Receive Your Complimentary Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
