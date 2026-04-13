import dynamic from 'next/dynamic'
import Hero from '@/components/layout/sections/Hero'

const FloatingSticky = dynamic(
  () => import('@/components/layout/sections/FloatingSticky'),
)
const ProcessSection = dynamic(
  () => import('@/components/layout/sections/Ourprocess'),
)
const OurServices = dynamic(
  () => import('@/components/layout/sections/OurServices'),
)
const Sticky = dynamic(() => import('@/components/layout/sections/Sticky'))
const Testimonials = dynamic(
  () => import('@/components/layout/sections/Testimonials'),
)
const WhyChooseUS = dynamic(
  () => import('@/components/layout/sections/WhyChooseUs'),
)
const RestoreSection = dynamic(
  () => import('@/components/layout/sections/RestoreSection'),
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
