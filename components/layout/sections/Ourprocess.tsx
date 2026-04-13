import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/icons'

const ProcessSection = () => {
  const processSteps = [
    {
      id: '01',
      title: 'Frame Reinforcement',
      description:
        "We don't just change the cloth. Our team strips the sofa down to its skeleton, replacing worn-out webbing and reinforcing joints with industrial-grade adhesives and seasoned wood blocks.",
      icon: 'Hammer',
      tag: 'Structural',
      image: '/images/repair.webp',
    },
    {
      id: '02',
      title: 'Premium Cushioning',
      description:
        "Using high-density 40-count foam and pocket springs, we ensure your sofa feels 'showroom new' for years. We layer it with poly-fill for that signature plush finish.",
      icon: 'Layers',
      tag: 'Comfort',
      image: '/images/premium-cushioning.webp',
    },
    {
      id: '03',
      title: 'Deep Sanitization',
      description:
        'Before the new fabric goes on, the entire internal structure undergoes a multi-point anti-dust mite and anti-fungal treatment to ensure a healthy living environment.',
      icon: 'Droplets',
      tag: 'Hygiene',
      image: '/images/deep-senitization.webp',
    },
    {
      id: '04',
      title: 'Precision Upholstery',
      description:
        'Our master tailors use computerized stitching and pattern matching. Every fold and seam is inspected for 100% symmetry before the final QC stamp.',
      icon: 'Sparkles',
      tag: 'Finish',
      image: '/images/precious-upholstery.webp',
    },
  ]

  return (
    <section className="min-h-screen border-t border-slate-100 bg-white px-4 py-10 selection:bg-gray-200 md:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 lg:flex-row lg:gap-16">
        {/* LEFT */}
        <div className="w-full space-y-8 lg:sticky lg:top-10 lg:w-[35%]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              <Icon name="ShieldCheck" size={12} fill="currentColor" /> Quality
              First
            </div>

            <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-slate-900">
              Engineering <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Resilience.
              </span>
            </h2>

            <p className="p max-w-sm">
              From the moment we pick up your furniture to the final stitch, we
              follow a rigorous industrial restoration process.
            </p>
          </div>

          {/* SIDE CARDS */}
          <div className="hidden flex-col gap-4 md:flex">
            <div className="rounded-[1.5rem] border border-slate-100 border-slate-200 bg-slate-50 p-6">
              <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-gray-800">
                Current Focus
              </p>
              <h3 className="mb-1 flex items-center gap-2 font-bold text-slate-900">
                Deep Assessment <Icon name="ChevronRight" size={14} />
              </h3>
              <p className="text-xs font-medium leading-relaxed text-slate-500">
                We identify structural weaknesses, wood-rot, and fabric fatigue.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-[1.5rem] bg-gray-800 p-5 text-white shadow-md">
              <Icon name="CheckCircle2" size={24} />
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

        {/* RIGHT */}
        <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-slate-100 border-slate-200 bg-slate-50 p-6 md:p-12 lg:w-[65%] lg:p-16">
          <div className="space-y-10 md:space-y-10">
            {processSteps.map((step) => {
              return (
                <div key={step.id} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white shadow-lg">
                        {step.id}
                      </span>
                      <h3 className="h4">{step.title}</h3>
                    </div>

                    <span className="hidden rounded-full border border-slate-200 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-600 sm:block">
                      {step.tag}
                    </span>
                  </div>

                  {/* IMAGE */}
                  <div className="group relative aspect-video w-full overflow-hidden rounded-[2rem] border-4 border-white bg-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 transition group-hover:bg-transparent" />
                  </div>

                  <p className="p max-w-2xl">{step.description}</p>
                </div>
              )
            })}

            {/* CTA */}
            <div className="border-t border-slate-200 pt-5 text-center">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
                Ready to start?
              </p>

              <Link
                href="/quote"
                className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-gray-800"
              >
                Get Your Estimate <Icon name="ChevronRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
