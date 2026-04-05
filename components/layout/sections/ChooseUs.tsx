'use client'

import {
  ShieldCheck,
  Truck,
  Award,
  Clock,
  Ruler,
  Paintbrush,
  Phone,
  Star,
} from 'lucide-react'

export default function ChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-20 text-white md:py-28">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-24">
        {/* LEFT CONTENT */}
        <div className="space-y-10">
          <div className="space-y-6">
            {/* Standardized Badge: Matches Hero [10px] Bold Tracking-Widest */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                Bengaluru's Rated #1 Studio
              </span>
            </div>

            {/* Standardized Header: Extrabold Tracking-Tight */}
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              Furniture Revival <br />
              <span className="text-blue-500">Without the Stress.</span>
            </h2>

            {/* Standardized Body: Text-base Gray-400 */}
            <p className="max-w-lg text-sm font-medium leading-relaxed text-gray-400 md:text-base">
              We don’t just patch up sofas; we re-engineer them. From 40-density
              foam to Italian fabrics, we bring showroom quality directly to
              your living room.
            </p>
          </div>

          {/* Grid of Industry Standards */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            <FeatureItem
              Icon={ShieldCheck}
              title="5-Year Warranty"
              desc="Every restoration comes with a written warranty on foam sag and stitch durability."
            />
            <FeatureItem
              Icon={Truck}
              title="Free Doorstep Pickup"
              desc="Hassle-free transport from your home to our workshop and back. Zero heavy lifting."
            />
            <FeatureItem
              Icon={Award}
              title="Branded Materials"
              desc="Original Sleepwell™ foam and Kurlon™ springs. No local unbranded fillers. Ever."
            />
            <FeatureItem
              Icon={Clock}
              title="7-Day Delivery"
              desc="Efficient timelines so you don't have to live without your sofa for weeks."
            />
          </div>
        </div>

        {/* RIGHT: CONVERSION CARD */}
        <div className="group relative lg:ml-auto">
          <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-b from-blue-500/50 to-transparent opacity-20" />

          <div className="relative rounded-[2.5rem] border border-white/5 bg-[#0F0F0F] p-8 shadow-2xl md:p-12">
            {/* Standardized Card Header: text-2xl Extrabold */}
            <h3 className="mb-8 text-xl font-extrabold tracking-tight text-white md:text-2xl">
              Request a <span className="text-blue-500">Price Estimate</span>
            </h3>

            <div className="space-y-4">
              <IconDetail Icon={Ruler} text="Free Home Visit & Measurement" />
              <IconDetail
                Icon={Paintbrush}
                text="1000+ Fabric Swatches at Doorstep"
              />

              <div className="space-y-5 pt-6">
                <a
                  href="tel:9876543210"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-blue-600/40 transition-all hover:bg-blue-700 active:scale-95"
                >
                  <Phone size={14} /> Get Free Consultation
                </a>
                <p className="text-center text-[10px] font-bold uppercase leading-loose tracking-widest text-gray-500">
                  Join 5,000+ Happy Households <br /> in Bangalore
                </p>
              </div>
            </div>

            {/* Floating Testimonial Tag */}
            <blockquote className="absolute -bottom-6 -right-4 hidden max-w-[210px] rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl sm:block md:-right-8">
              <div className="mb-2.5 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} fill="currentColor" />
                ))}
              </div>
              <p className="text-[11px] font-bold leading-snug text-slate-800">
                "The best upholstery experience in HSR layout. Highly
                recommend!"
              </p>
              <cite className="mt-3 block text-[9px] font-extrabold uppercase not-italic tracking-widest text-slate-600">
                — Rajesh M.
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  Icon: any
  title: string
  desc: string
}

function FeatureItem({ Icon, title, desc }: FeatureItemProps) {
  return (
    <div className="space-y-4">
      <div className="text-blue-500">
        <Icon size={24} strokeWidth={2} />
      </div>
      {/* Title standardized to Bold Tracking-Widest [11px] */}
      <h4 className="text-[11px] font-bold uppercase tracking-widest text-white">
        {title}
      </h4>
      <p className="text-[13px] font-medium leading-relaxed text-gray-500">
        {desc}
      </p>
    </div>
  )
}

type IconDetailProps = {
  Icon: any
  text: string
}

function IconDetail({ Icon, text }: IconDetailProps) {
  return (
    <div className="group/item flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.07]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 transition-all group-hover/item:bg-blue-600 group-hover/item:text-white">
        <Icon size={18} />
      </div>
      <p className="text-[13px] font-bold tracking-tight text-gray-300">
        {text}
      </p>
    </div>
  )
}
