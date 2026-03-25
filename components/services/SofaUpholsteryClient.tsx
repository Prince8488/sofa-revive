"use client";

import {
  Gem,
  Layers,
  Palette,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function SofaUpholsteryClient() {
  const features = [
    {
      title: "Artisan Reupholstery",
      desc: "Bring new life to heirlooms and antiques with sophisticated, modern tailoring.",
      icon: <Gem className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Padding Upgrades",
      desc: "Replace sagging cores with high-density foam and fiber-fill for a 'like-new' sit.",
      icon: <Layers className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Premium Fabric Curation",
      desc: "Extensive selection of designer fabrics, Italian leathers, and commercial materials.",
      icon: <Palette className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    },
  ];
  return (
    <div className="bg-white text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* 1. HERO SECTION: SUBTLE & ELEGANT */}
      <section className="pt-20 pb-12 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={12} /> Unmatched Restoration
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Sophisticated Upholstery Restoration
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Trusted by interior designers and families alike. We restore the
            value of your furniture with creative, professional solutions that
            tell your unique story.
          </p>
        </div>
      </section>

      {/* 2. CORE FEATURES GRID */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
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
                View Collection <ArrowUpRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMFORT & PADDING SECTION (Z-PATTERN) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Restore the Comfort <br /> You Once Loved
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Your sofa or recliner may be sagging, but the frame is often built
              to last. We specialize in replacing worn seat cores and adding
              custom fiber-fill to 'plump-up' backs and pillows.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <CheckCircle2 size={16} className="text-blue-600" />{" "}
                High-Density Foam Replacement
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <CheckCircle2 size={16} className="text-blue-600" /> Custom Seat
                Core Repair
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

      {/* 4. DESIGN & REMODELING SECTION */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-video shadow-2xl border-4 border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000"
              alt="Tech Park Office Lounge"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              A New Lease of Life <br /> for Your Interiors
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              remodeing your space? Don't discard your quality furniture. Our
              craftsmen help you navigate color changes and contemporary design
              needs with an extensive selection of premium fabrics.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-800 rounded-lg">
                <div className="text-blue-400 font-bold text-xs uppercase mb-1">
                  Stain Resistant
                </div>
                <div className="text-[10px] text-slate-700">
                  Commercial Grade
                </div>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg">
                <div className="text-blue-400 font-bold text-xs uppercase mb-1">
                  Fire Retardant
                </div>
                <div className="text-[10px] text-slate-700">
                  Safety Standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION & CTA */}
      <section className="py-20 px-6 relative overflow-hidden text-center bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-slate-900 tracking-tight">
            Your Story, Preserved.
          </h2>
          <p className="text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
            Our creative staff is available for personal consultations to help
            you sort through endless upholstery combinations, hardware, and
            designer options.
          </p>
          <div className="pt-4">
            <Link href="/quote">
              <button className="bg-slate-950 text-white px-10 py-4 rounded-lg font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                Receive Your Complimentary Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
