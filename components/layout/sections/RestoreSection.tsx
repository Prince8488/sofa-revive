'use client'

import { motion } from 'framer-motion'
import Icon from '@/components/icons'
import Link from 'next/link'

const RestoreSection = () => {
  const points = [
    {
      icon: <Icon name="History" size={18} />,
      title: 'Preserve the Legacy',
      desc: 'Modern furniture is often built to be replaced. Your vintage piece was built to last—it just needs a second life.',
    },
    {
      icon: <Icon name="Leaf" size={18} />,
      title: 'Eco-Conscious Choice',
      desc: 'Restoring a sofa saves it from a landfill and reduces the carbon footprint of manufacturing a new one.',
    },
    {
      icon: <Icon name="Sparkles" size={18} />,
      title: 'Tailored Comfort',
      desc: "Why settle for 'off-the-shelf' when you can choose the exact density and fabric that fits your lifestyle.",
    },
  ]

  return (
    <section className="relative overflow-hidden border-slate-200 bg-slate-50 px-6 py-10 text-slate-900 md:py-10">
      {/* Subtle Background Accent */}
      <div className="absolute right-0 top-0 -z-10 hidden h-full w-1/3 rounded-l-[5rem] bg-white lg:block" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-12">
        {/* LEFT: THE EMOTIONAL HOOK */}
        <div className="space-y-8 lg:sticky lg:top-32 lg:col-span-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600"
            >
              <Icon name="Heart" size={14} fill="currentColor" /> Why Restore?
            </motion.div>

            <h2 className="h2 font-roboto font-black leading-[0.9] tracking-tighter">
              Don't let <br />
              go to waste.
            </h2>

            <p className="p max-w-lg leading-relaxed text-slate-500">
              In a world of "fast-furniture," quality is becoming a luxury. Your
              existing sofa has a superior frame—give it the premium finish it
              deserves.
            </p>
          </div>

          <Link href="/quote">
            <button className="group flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-slate-900 px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-slate-200 transition-all hover:bg-gray-800 active:scale-95">
              Start Your Revival{' '}
              <Icon
                name="ArrowRight"
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </Link>
        </div>

        {/* RIGHT: THE COMPACT PROOF */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 gap-3">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl border border-slate-200/50 bg-white p-5 transition-all duration-300 hover:border-gray-200 hover:shadow-md md:p-6"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-slate-200 bg-slate-50 text-slate-600 transition-all duration-500 group-hover:bg-gray-800 group-hover:text-white">
                    {point.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold tracking-tight text-slate-900">
                      {point.title}
                    </h3>
                    <p className="max-w-md text-sm leading-snug text-slate-500">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compact Trust Badge */}
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-100/50 px-6 py-4">
            <Icon
              name="ShieldCheck"
              size={24}
              className="shrink-0 text-gray-800"
            />
            <div className="leading-tight">
              <p className="text-[13px] font-bold italic text-slate-900">
                94% Cheaper than Premium New Purchases
              </p>
              <p className="mt-0.5 text-[9px] font-black uppercase tracking-widest text-gray-800">
                Industrial quality • fraction of the cost
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RestoreSection
