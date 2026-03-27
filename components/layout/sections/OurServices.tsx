"use client";

import services from "@/data/content";
import ServiceCard from "./ServicesCard";
import { Briefcase } from "lucide-react";

export default function OurServices() {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      {/* HEADER SECTION: Standardized with Hero/Service pages */}
      <div className="mb-5 text-center md:text-left">
        <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] pb-5">
          <span className="w-8 h-[1px] bg-blue-600"></span>
          Expert Solutions
        </div>

        {/* Updated: Extrabold / Tracking-Tight */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Our Specialist Services
        </h2>

        {/* Updated: Standardized Slate-500 font scale */}
        <p className="text-sm md:text-base text-slate-700 max-w-2xl leading-relaxed">
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
