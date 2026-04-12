'use client'

import ImageSlider, { type ImageProps } from '@/components/UI/ImageSlider'
import Link from 'next/link'
import useMediaQuery from '@/hooks/useMediaQuery'

const PROJECTS = [
  {
    title: 'Classic Velvet Overhaul',
    description:
      'Full structural repair and premium emerald velvet upholstery.',
    before: '/images/velvet-upholstery.webp',
    after: '/images/velvet-upholstery-after.webp',
  },
  {
    title: 'Teak Wood French Polish',
    description:
      'Removal of deep scratches and water rings with a high-gloss finish.',
    before: '/images/wodden-sofa-polishing-before.webp',
    after: '/images/wodden-sofa-polishing-after.webp',
  },
  {
    title: 'Leather Sectional Refresh',
    description:
      'Leather conditioning and color restoration for a tired sectional.',
    before: '/images/Leather-Sectional-before.webp',
    after: '/images/Leather-Sectional-after.webp',
  },
  {
    title: 'Vintage Armchair Revival',
    description: 'Period-accurate fabric replacement and spring tightening.',
    before: '/images/vintage-Armchair-before.webp',
    after: '/images/vintage-Armchair-after.webp',
  },
]

export default function GallerySection() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header with Luxury Typography */}
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[10px] font-black tracking-[0.3em] text-gray-800">
              SofaRevive Craftsmanship
            </span>
            <h2
              className="text-2xl font-black italic leading-[0.9] tracking-tighter text-slate-900 md:text-4xl"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              The <br />{' '}
              <span className="bg-gradient-to-r from-[#3e3d3d] to-gray-600 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium text-slate-700 md:text-right">
            Slide the white divider on any image to see the 1:1 restoration
            quality we provide for every client.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const beforeImage = isMobile
              ? `${project.before}&ar=3:4&fit=crop`
              : project.before
            const afterImage = isMobile
              ? `${project.after}&ar=3:4&fit=crop`
              : project.after

            const beforeImageProps: ImageProps = {
              src: beforeImage,
              alt: `Before restoration: ${project.title}`,
            }
            const afterImageProps: ImageProps = {
              src: afterImage,
              alt: `After restoration: ${project.title}`,
            }

            return (
              <div
                key={index}
                className="group flex cursor-default flex-col gap-6"
              >
                {/* Slider Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
                  <ImageSlider
                    beforeImage={beforeImageProps}
                    afterImage={afterImageProps}
                  />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between px-4">
                  <div className="space-y-1">
                    <h4 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 transition-colors duration-300 group-hover:text-gray-800">
                      {project.title}
                    </h4>
                    <p className="max-w-[80%] text-sm font-medium leading-relaxed text-slate-700">
                      {project.description}
                    </p>
                  </div>

                  {/* Micro-Interaction: Project Number */}
                  <span className="select-none text-4xl font-black italic text-slate-100 transition-colors duration-500 group-hover:text-gray-200">
                    0{index + 1}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 flex flex-col items-center">
          <div className="mb-8 h-[1px] w-24 bg-slate-200" />
          <p className="mb-6 text-xs font-black uppercase tracking-widest text-slate-600">
            Witnessed enough? Let's restore yours.
          </p>
          <Link href="/quote" aria-label="Start your sofa restoration project">
            <button className="cursor-pointer rounded-2xl bg-slate-900 px-10 py-5 text-[11px] font-black uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-gray-800 active:scale-95">
              Start Your Restoration
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
