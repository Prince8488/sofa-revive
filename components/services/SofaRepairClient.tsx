"use client";

import {
  ArrowUpRight,
  Briefcase,
  ShieldCheck,
  Armchair,
  PenTool,
  Sofa,
} from "lucide-react";
import Link from "next/link";

export default function SofaRepairClient() {
  const services = [
    {
      title: "Sofa Restoration",
      desc: "Comprehensive structural and aesthetic overhauls for high-traffic corporate breakout areas.",
      icon: <Sofa className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Recliner Mechanics",
      desc: "Precision maintenance for motorized reclining systems in executive cabins and lounge rooms.",
      icon: <Armchair className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Custom Upholstery",
      desc: "Specialized material sourcing including fire-retardant fabrics and premium Italian leathers.",
      icon: <PenTool className="text-blue-600" size={20} />,
      img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800",
    },
  ];
  return (
    <div className="bg-white text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* 1. INDUSTRY HERO */}
      <section className="pt-20 pb-12 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest">
            <Briefcase size={12} /> Institutional Furniture Management
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Asset Restoration for Corporate & Hospitality
          </h1>
          <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Professional lifecycle management for your seating assets. We help
            facility managers reduce replacement costs through expert on-site
            restoration and structural maintenance.
          </p>
        </div>
      </section>

      {/* 2. CORE SERVICE GRID */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                {service.icon}
                <h3 className="font-bold text-base text-slate-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                {service.desc}
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

      {/* 3. HOSPITALITY SECTOR FOCUS */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Hospitality & Resort <br /> Seating Solutions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed italic border-l-2 border-blue-600 pl-4">
              First impressions set the tone for guest retention. Our quarterly
              programs ensure your lobby and dining furniture never shows signs
              of wear.
            </p>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2 italic">
                <ShieldCheck size={14} className="text-blue-500" /> Structural
                frame leveling and reinforcement
              </li>
              <li className="flex items-center gap-2 italic">
                <ShieldCheck size={14} className="text-blue-500" />{" "}
                Commercial-grade stain protection treatments
              </li>
              <li className="flex items-center gap-2 italic">
                <ShieldCheck size={14} className="text-blue-500" /> Specialized
                leather conditioning for fine dining
              </li>
            </ul>
            <Link
              href="/quote"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded text-[10px] font-bold uppercase tracking-widest"
            >
              Join Maintenance Program
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
              alt="Luxury Restaurant Interior"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* 4. CORPORATE INFRASTRUCTURE FOCUS */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000"
            alt="Tech Park Office Lounge"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            Tech Park & Corporate <br /> Breakout Management
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Bengaluru’s tech hubs require furniture that stands up to 24/7
            usage. We provide on-site repair schedules that align with your
            facility downtime, ensuring zero disruption to your employees.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-xl font-bold text-slate-900 italic">24h</div>
              <div className="text-[10px] text-slate-600 font-bold uppercase">
                Rapid Response
              </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-xl font-bold text-slate-900 italic">ESG</div>
              <div className="text-[10px] text-slate-600 font-bold uppercase">
                Sustainable Repair
              </div>
            </div>
          </div>
          <Link
            href="/quote"
            className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest"
          >
            Request Institutional Pricing <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* 5. FINAL ACTION */}
      <section className="py-20 px-6 text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-slate-900">
            Professional Excellence. <br />
            <span className="text-blue-600 underline underline-offset-8 decoration-slate-200">
              Our Standard.
            </span>
          </h2>
          <p className="text-xs text-slate-600 font-bold uppercase tracking-widest leading-loose">
            Trusted by Bangalore’s leading tech parks, boutique hotels, and
            medical facilities. Experience the DreamDecore standard.
          </p>
          <Link href="/quote">
            <button className="bg-slate-950 text-white px-10 py-4 rounded-lg font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl">
              Receive Your Complimentary Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
