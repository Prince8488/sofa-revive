import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/icons'

export default function Hero() {
  return (
    <section className="md:pt-25 relative overflow-hidden bg-white px-6 pb-5 pt-20 text-slate-900">
      {/* LIGHT BACKGROUND (instead of heavy image) */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-white opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <svg
                  width="12"
                  height="12"
                  className="fill-blue-600 text-blue-600"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                  Bangalore's #1 Furniture Clinic
                </span>
              </div>

              {/* SAME TYPOGRAPHY */}
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

            {/* CTA */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* BUTTON 1 */}
              <Link
                href="/quote"
                className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-white shadow-md transition-all hover:scale-105 hover:bg-gray-800 active:scale-95"
              >
                Book Free Inspection
              </Link>

              {/* BUTTON 2 */}
              <Link
                href="/gallery"
                className="flex cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-50 active:scale-95"
              >
                Explore Our Gallery
              </Link>
            </div>

            {/* TRUST */}
            <div className="flex items-center gap-8 border-t border-blue-100 pt-6">
              <div className="flex items-center gap-2 text-blue-700">
                <Icon name="ShieldCheck" size={18} className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  1Y Warranty
                </span>
              </div>

              <div className="flex items-center gap-2 text-blue-700">
                <Icon name="CheckCircle2" size={18} className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Branded Materials
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-[12px] border-white shadow-2xl ring-1 ring-slate-100">
              <Image
                src="/images/sofa-banner-hero.webp"
                alt="Sofa restoration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                priority
                fetchPriority="high"
                quality={65}
              />

              {/* FLOATING LABEL */}
              <div className="absolute right-6 top-6 rounded-full border border-slate-200/50 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-md">
                <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-800"></span>
                  Craftsmanship Excellence
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-gray-100 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
