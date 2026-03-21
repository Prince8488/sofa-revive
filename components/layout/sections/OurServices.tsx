"use client";

import services from "@/data/content";
import ServiceCard from "./ServicesCard";
import { Briefcase } from "lucide-react";

export default function OurServices() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      {/* HEADER SECTION: Standardized with Hero/Service pages */}
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold mb-4 uppercase tracking-widest">
          <Briefcase size={12} /> Expert Solutions
        </div>

        {/* Updated: Extrabold / Tracking-Tight */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Our Specialist Services
        </h2>

        {/* Updated: Standardized Slate-500 font scale */}
        <p className="text-sm md:text-base text-slate-500 max-w-2xl leading-relaxed">
          Select a service to explore our specialized restoration process,
          premium material options, and high-end results.
        </p>
      </div>

      {/* GRID CONTAINER: Spacing standardized with the ServiceCard gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
