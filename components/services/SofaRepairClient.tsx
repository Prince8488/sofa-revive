'use client'

import Image from 'next/image'

import {
  ArrowUpRight,
  Briefcase,
  ShieldCheck,
  Armchair,
  PenTool,
  Sofa,
} from 'lucide-react'
import Link from 'next/link'

export default function SofaRepairClient() {
  const services = [
    {
      title: 'Sofa Restoration',
      desc: 'Comprehensive structural and aesthetic overhauls for high-traffic corporate breakout areas.',
      icon: <Sofa className="text-gray-800" size={20} />,
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Recliner Mechanics',
      desc: 'Precision maintenance for motorized reclining systems in executive cabins and lounge rooms.',
      icon: <Armchair className="text-gray-800" size={20} />,
      img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Custom Upholstery',
      desc: 'Specialized material sourcing including fire-retardant fabrics and premium Italian leathers.',
      icon: <PenTool className="text-gray-800" size={20} />,
      img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    <div className="bg-white pt-5 text-slate-800 selection:bg-gray-800 selection:text-white">
      {/* 1. INDUSTRY HERO */}
      <section className="bg-slate-50 px-6 pb-12 pt-20">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-800">
            <Briefcase size={12} /> Institutional Furniture Management
          </div>
          <h1
            className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Asset Restoration for Corporate & Hospitality
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
            Professional lifecycle management for your seating assets. We help
            facility managers reduce replacement costs through expert on-site
            restoration and structural maintenance.
          </p>
        </div>
      </section>

      {/* 2. CORE SERVICE GRID */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-200"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mb-2 flex items-center gap-2">
                {service.icon}
                <h3 className="text-base font-bold text-slate-900">
                  {service.title}
                </h3>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-slate-700">
                {service.desc}
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

      {/* 3. HOSPITALITY SECTOR FOCUS */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <h2
              className="text-2xl font-bold leading-tight md:text-3xl"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Hospitality & Resort <br /> Seating Solutions
            </h2>
            <p className="border-l-2 border-gray-600 pl-4 text-sm italic leading-relaxed text-slate-400">
              First impressions set the tone for guest retention. Our quarterly
              programs ensure your lobby and dining furniture never shows signs
              of wear.
            </p>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2 italic">
                <ShieldCheck size={14} className="text-gray-500" /> Structural
                frame leveling and reinforcement
              </li>
              <li className="flex items-center gap-2 italic">
                <ShieldCheck size={14} className="text-gray-500" />{' '}
                Commercial-grade stain protection treatments
              </li>
              <li className="flex items-center gap-2 italic">
                <ShieldCheck size={14} className="text-gray-500" /> Specialized
                leather conditioning for fine dining
              </li>
            </ul>
            <Link
              href="/quote"
              className="inline-block cursor-pointer rounded bg-gray-800 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-900"
            >
              Join Maintenance Program
            </Link>
          </div>
          <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury Restaurant Interior"
              fill
              className="object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4. CORPORATE INFRASTRUCTURE FOCUS */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="relative order-2 h-full overflow-hidden rounded-2xl lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000"
            alt="Tech Park Office Lounge"
            fill
            className="object-cover shadow-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 space-y-6 lg:order-2">
          <h2
            className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Tech Park & Corporate <br /> Breakout Management
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Bengaluru’s tech hubs require furniture that stands up to 24/7
            usage. We provide on-site repair schedules that align with your
            facility downtime, ensuring zero disruption to your employees.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-xl font-bold italic text-slate-900">24h</div>
              <div className="text-[10px] font-bold uppercase text-slate-600">
                Rapid Response
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-xl font-bold italic text-slate-900">ESG</div>
              <div className="text-[10px] font-bold uppercase text-slate-600">
                Sustainable Repair
              </div>
            </div>
          </div>
          <Link
            href="/quote"
            className="flex cursor-pointer items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-800 underline-offset-4 hover:underline"
          >
            Request Institutional Pricing <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* 5. FINAL ACTION */}
      <section className="border-t border-slate-100 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2
            className="text-2xl font-black uppercase text-slate-900 md:text-3xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Professional Excellence. <br />
            <span className="text-gray-800 underline decoration-slate-200 underline-offset-8">
              Our Standard.
            </span>
          </h2>
          <p className="text-xs font-bold uppercase leading-loose tracking-widest text-slate-600">
            Trusted by Bangalore’s leading tech parks, boutique hotels, and
            medical facilities. Experience the DreamDecore standard.
          </p>
          <Link href="/quote" className="cursor-pointer">
            <button className="cursor-pointer rounded-lg bg-slate-950 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-gray-800">
              Receive Your Complimentary Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
