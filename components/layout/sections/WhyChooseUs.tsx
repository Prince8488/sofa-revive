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

export default function WhyChooseUS() {
  return (
    <section className="bg-[#050505] text-white py-20 md:py-28 px-6 relative overflow-hidden">
      {/* 1. PERFORMANCE: Passive background glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            {/* Standardized Badge: Matches Hero [10px] Bold Tracking-Widest */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 border border-blue-500/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                Bengaluru's Rated #1 Studio
              </span>
            </div>

            {/* Standardized Header: Extrabold Tracking-Tight */}
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Furniture Revival <br />
              <span className="text-blue-500">Without the Stress.</span>
            </h2>

            {/* Standardized Body: Text-base Gray-400 */}
            <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed font-medium">
              We don’t just patch up sofas; we re-engineer them. From 40-density
              foam to Italian fabrics, we bring showroom quality directly to
              your living room.
            </p>
          </div>

          {/* Grid of Industry Standards */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
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
        </motion.div>

        {/* RIGHT: CONVERSION CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group lg:ml-auto"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-500/50 to-transparent rounded-[2.5rem] opacity-20" />

          <div className="relative bg-[#0F0F0F] rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl">
            {/* Standardized Card Header: text-2xl Extrabold */}
            <h3 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-white">
              Request a <span className="text-blue-500">Price Estimate</span>
            </h3>

            <div className="space-y-4">
              <IconDetail Icon={Ruler} text="Free Home Visit & Measurement" />
              <IconDetail
                Icon={Paintbrush}
                text="1000+ Fabric Swatches at Doorstep"
              />

              <div className="pt-6 space-y-5">
                <a
                  href="tel:9876543210"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                >
                  <Phone size={14} /> Get Free Consultation
                </a>
                <p className="text-[10px] text-center text-gray-500 font-bold uppercase tracking-widest leading-loose">
                  Join 5,000+ Happy Households <br /> in Bangalore
                </p>
              </div>
            </div>

            {/* Floating Testimonial Tag */}
            <blockquote className="absolute -bottom-6 -right-4 md:-right-8 bg-white p-5 rounded-2xl shadow-2xl max-w-[210px] hidden sm:block border border-slate-100">
              <div className="flex gap-1 mb-2.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} fill="currentColor" />
                ))}
              </div>
              <p className="text-[11px] text-slate-800 font-bold leading-snug">
                "The best upholstery experience in HSR layout. Highly
                recommend!"
              </p>
              <cite className="not-italic text-[9px] text-slate-400 font-extrabold mt-3 block uppercase tracking-widest">
                — Rajesh M.
              </cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureItem({
  Icon,
  title,
  desc,
}: {
  Icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-4">
      <div className="text-blue-500">
        <Icon size={24} strokeWidth={2} />
      </div>
      {/* Title standardized to Bold Tracking-Widest [11px] */}
      <h4 className="font-bold text-[11px] uppercase tracking-widest text-white">
        {title}
      </h4>
      <p className="text-gray-500 text-[13px] leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  );
}

function IconDetail({ Icon, text }: { Icon: any; text: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:bg-white/[0.07] transition-colors group/item">
      <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
        <Icon size={18} />
      </div>
      <p className="text-[13px] font-bold text-gray-300 tracking-tight">
        {text}
      </p>
    </div>
  );
}
