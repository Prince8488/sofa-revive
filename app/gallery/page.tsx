import { Metadata } from 'next'
import Script from 'next/script'
import GallerySection from '@/components/layout/sections/Gallery'

export const metadata: Metadata = {
  title: 'Sofa Repair Before & After in Bangalore | Upholstery Gallery',

  description:
    'View before and after sofa repair, upholstery, and polishing projects in Bangalore. See real transformations and expert craftsmanship by SofaRevive.',

  alternates: {
    canonical: 'https://www.sofarevive.com/gallery',
  },
}

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',

  name: 'Sofa Repair and Upholstery Gallery Bangalore',

  description:
    'Gallery showcasing before and after sofa repair, upholstery, and furniture polishing projects in Bangalore.',

  url: 'https://www.sofarevive.com/gallery',
}

export default function GalleryPage() {
  return (
    <>
      <Script
        id="gallery-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema),
        }}
      />

      <GallerySection />
    </>
  )
}
