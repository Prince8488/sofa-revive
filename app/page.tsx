import FloatingSticky from '@/components/layout/sections/FloatingSticky'
import Hero from '@/components/layout/sections/Hero'
import ProcessSection from '@/components/layout/sections/Ourprocess'
import OurServices from '@/components/layout/sections/OurServices'
import Sticky from '@/components/layout/sections/Sticky'
import Testimonials from '@/components/layout/sections/Testimonials'
import WhyChooseUS from '@/components/layout/sections/WhyChooseUs'
import RestoreSection from '@/components/layout/sections/RestoreSection'

export default function UrbanSofaMobile() {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans text-slate-900 selection:bg-gray-200 md:pb-0">
      <main>
        <Hero />
        <OurServices />
        <WhyChooseUS />
        <ProcessSection />
        <RestoreSection />
        <Testimonials />
        <Sticky />
        <FloatingSticky />
      </main>
    </div>
  )
}
