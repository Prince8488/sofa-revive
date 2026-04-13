'use client'

import Icon from '@/components/icons'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FEATURES = [
  {
    icon: 'ShieldCheck',
    title: '1-Year Warranty',
    description: 'Full coverage on foam sag and stitch durability.',
  },
  {
    icon: 'Truck',
    title: 'Free Doorstep Pickup',
    description: 'Safe transport from your home to our workshop and back.',
  },
  {
    icon: 'Award',
    title: 'Branded Materials',
    description: 'We only use good quality materials.',
  },
  {
    icon: 'Clock',
    title: '7-Day Delivery',
    description: "Fast turnaround so you're not without your furniture.",
  },
]

// Placeholder high-quality avatar images
const SOCIAL_PROOF_AVATARS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
]

export default function WhyChooseUS() {
  return (
    <section className="relative border-slate-200 bg-slate-50 px-6 py-5 text-slate-900">
      {/* Decorative subtle dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#1f2937 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full  text-blue-600" />
                <span className="text-[11px] font-bold uppercase tracking-widest  text-blue-700">
                  Bengaluru's #1 Studio
                </span>
              </div>

              <h2 className="h2 font-roboto">
                Furniture Revival <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                  Without the Stress.
                </span>
              </h2>

              <p className="p max-w-lg">
                We don’t just patch up sofas; we re-engineer them. From
                high-density foam to premium fabrics, we bring showroom quality
                directly to your living room.
              </p>
            </div>

            {/* FEATURES GRID */}
            <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="group space-y-3">
                  <dt className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-gray-800 shadow-sm ring-1 ring-slate-200 transition-all duration-300 group-hover:bg-gray-800 group-hover:text-white">
                      <Icon name={feature.icon} size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[15px] font-bold uppercase tracking-tight text-slate-900">
                      {feature.title}
                    </span>
                  </dt>
                  <dd className="pl-14 text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* RIGHT: CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-lg lg:ml-auto"
          >
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/60 md:p-12">
              <h3 className="h3 mb-8">
                Request a{' '}
                <span className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
                  Price Estimate
                </span>
              </h3>

              <div className="space-y-4">
                <IconDetail icon="Ruler" text="Free Home Visit & Measurement" />
                <IconDetail
                  icon="Paintbrush"
                  text="50+ Fabric Swatches at Doorstep"
                />

                <div className="space-y-6 pt-8">
                  <a
                    href="tel:+916366921602"
                    className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-slate-950 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-slate-200 transition-all hover:bg-gray-800 active:scale-95"
                    aria-label="Get a free consultation by calling us"
                  >
                    <Icon name="Phone" size={16} /> Get Free Consultation
                  </a>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex -space-x-3">
                      {SOCIAL_PROOF_AVATARS.map((url, i) => (
                        <div
                          key={i}
                          className="h-10 w-10 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-sm"
                        >
                          <Image
                            src={url}
                            alt={`Customer ${i + 1}`}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                            sizes="40px"
                          />
                        </div>
                      ))}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gray-100 text-[10px] font-bold text-gray-800 shadow-sm">
                        +5k
                      </div>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                      Join 500+ Happy Households
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

type IconDetailProps = {
  icon: string
  text: string
}

function IconDetail({ icon, text }: IconDetailProps) {
  return (
    <div className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-100 border-slate-200 bg-slate-50 p-4 transition-all hover:border-gray-200 hover:bg-white">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-gray-800 shadow-sm transition-colors group-hover:bg-gray-800 group-hover:text-white">
        <Icon name={icon} size={18} />
      </div>
      <p className="text-sm font-bold tracking-tight text-slate-700">{text}</p>
    </div>
  )
}
