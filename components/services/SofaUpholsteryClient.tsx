'use client'

import Image from 'next/image'

import {
  Gem,
  Layers,
  Palette,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'

export default function SofaUpholsteryClient() {
  const features = [
    {
      title: 'Artisan Reupholstery',
      desc: 'Bring new life to heirlooms and antiques with sophisticated, modern tailoring.',
      icon: <Gem className="text-gray-800" size={20} />,
      img: '/images/sofa-banner.png',
    },
    {
      title: 'Padding Upgrades',
      desc: "Replace sagging cores with high-density foam and fiber-fill for a 'like-new' sit.",
      icon: <Layers className="text-gray-800" size={20} />,
      img: '/images/sofa-padding-upgrade.png',
    },
    {
      title: 'Premium Fabric Curation',
      desc: 'Extensive selection of designer fabrics, Italian leathers, and commercial materials.',
      icon: <Palette className="text-gray-800" size={20} />,
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    },
  ]

  return (
    <div className="bg-white pt-5 text-slate-800 selection:bg-gray-800 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="border-b border-slate-100 bg-slate-50 px-6 pb-12 pt-20">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-800">
            <Sparkles size={12} /> Unmatched Restoration
          </div>
          <h1
            className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Sophisticated Upholstery Restoration
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-700">
            Trusted by interior designers and families alike. We restore the
            value of your furniture with creative, professional solutions that
            tell your unique story.
          </p>
        </div>
      </section>

      {/* 2. CORE FEATURES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
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
                View Collection <ArrowUpRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMFORT & PADDING SECTION (Z-PATTERN) */}
      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <h2
              className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Restore the Comfort <br /> You Once Loved
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              Your sofa or recliner may be sagging, but the frame is often built
              to last. We specialize in replacing worn seat cores and adding
              custom fiber-fill to 'plump-up' backs and pillows.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                <CheckCircle2 size={16} className="text-gray-800" />{' '}
                High-Density Foam Replacement
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                <CheckCircle2 size={16} className="text-gray-800" /> Custom Seat
                Core Repair
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
              alt="Comfort restoration work"
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4. DESIGN & REMODELING SECTION */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative order-2 aspect-video overflow-hidden rounded-2xl border-4 border-slate-800 shadow-2xl lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000"
              alt="Premium office interior"
              fill
              className="object-cover shadow-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 space-y-6 lg:order-2">
            <h2
              className="text-2xl font-bold leading-tight md:text-3xl"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              A New Lease of Life <br /> for Your Interiors
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Remodeling your space? Don't discard your quality furniture. Our
              craftsmen help you navigate color changes and contemporary design
              needs with an extensive selection of premium fabrics.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-lg bg-slate-800 p-4">
                <div className="mb-1 text-xs font-bold uppercase text-gray-400">
                  Stain Resistant
                </div>
                <div className="text-[10px] text-slate-400">
                  Commercial Grade
                </div>
              </div>
              <div className="rounded-lg bg-slate-800 p-4">
                <div className="mb-1 text-xs font-bold uppercase text-gray-400">
                  Fire Retardant
                </div>
                <div className="text-[10px] text-slate-400">
                  Safety Standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION & CTA */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-20 text-center">
        <div className="relative z-10 mx-auto max-w-3xl space-y-8">
          <h2
            className="text-2xl font-black uppercase tracking-tight text-slate-900 md:text-3xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Your Story, Preserved.
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-700">
            Our creative staff is available for personal consultations to help
            you sort through endless upholstery combinations, hardware, and
            designer options.
          </p>
          <div className="pt-4">
            <Link href="/quote" className="cursor-pointer">
              <button className="cursor-pointer rounded-lg bg-slate-950 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-gray-800 active:scale-95">
                Receive Your Complimentary Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
