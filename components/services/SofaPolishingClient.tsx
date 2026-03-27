"use client";

import {
  Sparkles,
  Droplets,
  Wind,
  Briefcase,
  ArrowUpRight,
  Layers,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function SofaPolishingClient() {
  const polishingFeatures = [
    {
      title: "Lustre Restoration",
      desc: "Specialized substances applied to restore the deep, original shine to tables, chairs, and armoires.",
      icon: <Sparkles className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Grain Preservation",
      desc: "Techniques that nourish dry wood and highlight natural patterns without compromising the finish.",
      icon: <Droplets className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Detail Buffing",
      desc: "Soft-bristle precision work for intricate grooves and antique carvings to ensure a uniform glow.",
      icon: <Wind className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1622397333309-3056849bc70b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-white text-slate-800 pt-5 selection:bg-blue-600 selection:text-white">
      {/* 1. INDUSTRY HERO */}
      <section className="pt-20 pb-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest">
            <Briefcase size={12} /> Master Wood Finishing
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Unmatched Wood Polishing Services
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Reliable, professional, and creative solutions. We go beyond mere
            aesthetics, focusing on the preservation and long-term health of
            your wooden heirlooms and corporate furnishings.
          </p>
        </div>
      </section>

      {/* 2. CORE POLISHING GRID */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {polishingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-slate-100">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                {feature.icon}
                <h3 className="font-bold text-base text-slate-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                {feature.desc}
              </p>
              <Link
                href="/gallery"
                className="text-blue-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1"
              >
                Process Details <ArrowUpRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RESTORATIVE PROCESS SECTION (Z-PATTERN) */}
      <section className="py-16 bg-white overflow-hidden border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Furniture That Looks <br /> New, Every Day
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Our master polishers understand that wood is organic. We work
              meticulously with the grain to return lost lustre. For intricate
              detail work, we use soft-bristle techniques to ensure the solution
              penetrates every groove before final buffing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <Layers size={16} className="text-blue-600" /> Multi-Stage
                Buffing Process
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <ShieldCheck size={16} className="text-blue-600" /> Protective
                Surface Sealing
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury Restaurant Interior"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* 4. CONSULTATION & INSTITUTIONAL CARE */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Preserve the Lifespan <br /> of Your Assets
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
              Our creative staff provides personal consultations to navigate the
              vast variety of polishing combinations. From hardware care to
              designer-grade materials, we tell your story by preserving what
              lasts.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/quote"
                className="bg-blue-600 text-white px-6 py-3 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-800 rounded-2xl text-center">
              <div className="text-2xl font-bold text-white mb-1 tracking-tighter italic">
                Deep
              </div>
              <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">
                Nourishment
              </div>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl text-center">
              <div className="text-2xl font-bold text-white mb-1 tracking-tighter italic">
                High
              </div>
              <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">
                Lustre Finish
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL ACTION */}
      <section className="py-20 px-6 text-center bg-white">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl font-black uppercase text-slate-900 tracking-tight">
            Institutional Quality. <br />
            <span className="text-blue-600 underline underline-offset-8 decoration-slate-200">
              Artisan Finesse.
            </span>
          </h2>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest leading-loose">
            From antique dressers to modern boardroom tables, DreamDecore
            delivers the standard of excellence Bangalore demands.
          </p>
          <Link href="/quote">
            <button className="bg-slate-950 text-white px-10 py-4 rounded-lg font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl active:scale-95">
              Receive Your Complimentary Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
