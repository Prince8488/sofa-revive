import dynamic from 'next/dynamic'
import Hero from '@/components/layout/sections/Hero'
import OurServices from '@/components/layout/sections/OurServices'
import ProcessSection from '@/components/layout/sections/Ourprocess'
import WhyChooseUS from '@/components/layout/sections/WhyChooseUs'
import RestoreSection from '@/components/layout/sections/RestoreSection'

const FloatingSticky = dynamic(
  () => import('@/components/layout/sections/FloatingSticky'),
)

const Sticky = dynamic(() => import('@/components/layout/sections/Sticky'))

const Testimonials = dynamic(
  () => import('@/components/layout/sections/Testimonials'),
)

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
