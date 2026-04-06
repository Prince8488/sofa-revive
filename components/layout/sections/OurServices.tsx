'use client'

import services from '@/data/content'
import ServiceCard from './ServicesCard'

export default function OurServices() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* HEADER SECTION: Standardized with Hero/Service pages */}
      <div className="mb-5 text-center md:text-left">
        <div className="inline-flex items-center gap-2 pb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-800">
          <span className="h-[1px] w-8 bg-gray-800"></span>
          Expert Solutions
        </div>

        {/* Updated: Extrabold / Tracking-Tight */}
        <h2 className="h2 mb-4 font-roboto">Our Specialist Services</h2>

        {/* Updated: Standardized Slate-500 font scale */}
        <p className="p max-w-2xl">
          Select a service to explore our specialized restoration process,
          premium material options, and high-end results.
        </p>
      </div>

      {/* GRID CONTAINER: Spacing standardized with the ServiceCard gap */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}
