"use client";

import {
  ShieldCheck,
  Truck,
  Award,
  Clock,
  Ruler,
  Paintbrush,
  Phone,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "1-Year Warranty",
    description: "Full coverage on foam sag and stitch durability.",
  },
  {
    icon: Truck,
    title: "Free Doorstep Pickup",
    description: "Safe transport from your home to our workshop and back.",
  },
  {
    icon: Award,
    title: "Branded Materials",
    description: "We only use original Sleepwell™ and Kurlon™ materials.",
  },
  {
    icon: Clock,
    title: "7-Day Delivery",
    description: "Fast turnaround so you're not without your furniture.",
  },
];

// Placeholder high-quality avatar images
const SOCIAL_PROOF_AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
];

export default function WhyChooseUS() {
  return (
    <section className="relative bg-slate-50 px-6 py-5 text-slate-900">
      {/* Decorative subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2563eb 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700">
                  Bengaluru's #1 Studio
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
                Furniture Revival <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
                  Without the Stress.
                </span>
              </h2>

              <p className="max-w-lg text-base font-medium leading-relaxed text-slate-600">
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
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <feature.icon size={20} strokeWidth={2} />
                    </div>
                    <span className="text-[15px] font-bold tracking-tight text-slate-900 uppercase">
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
              <h3 className="mb-8 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
                Request a <span className="text-blue-600">Price Estimate</span>
              </h3>

              <div className="space-y-4">
                <IconDetail icon={Ruler} text="Free Home Visit & Measurement" />
                <IconDetail
                  icon={Paintbrush}
                  text="1000+ Fabric Swatches at Doorstep"
                />

                <div className="space-y-6 pt-8">
                  <a
                    href="tel:+919304059249"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 py-5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-blue-600 active:scale-95 shadow-lg shadow-slate-200 cursor-pointer"
                  >
                    <Phone size={16} /> Get Free Consultation
                  </a>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex -space-x-3">
                      {SOCIAL_PROOF_AVATARS.map((url, i) => (
                        <div
                          key={i}
                          className="h-10 w-10 rounded-full border-4 border-white shadow-sm overflow-hidden bg-slate-100"
                        >
                          <img
                            src={url}
                            alt={`Customer ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-50 text-[10px] font-bold text-blue-600 shadow-sm">
                        +5k
                      </div>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Join 5,000+ Happy Households
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IconDetail({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:bg-white hover:border-blue-100 group cursor-pointer">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon size={18} />
      </div>
      <p className="text-sm font-bold tracking-tight text-slate-700">{text}</p>
    </div>
  );
}
