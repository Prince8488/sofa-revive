import services from '@/data/content'
import ServiceCard from './ServicesCard'

export default function OurServices() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      {/* HEADER */}
      <div className="mb-5 text-center md:text-left">
        <div className="inline-flex items-center gap-2 pb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-800">
          <span className="h-[1px] w-8 bg-gray-800"></span>
          Expert Solutions
        </div>

        <h2 className="h2 mb-4 font-roboto">Our Specialist Services</h2>

        <p className="p mx-auto max-w-2xl md:mx-0">
          Select a service to explore our specialized restoration process,
          premium material options, and high-end results.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}
