import { Metadata } from 'next'
import GallerySection from '@/components/layout/sections/Gallery'

export const metadata: Metadata = {
  title: 'Gallery | Sofa Restoration & Upholstery Projects in Bengaluru',
  description:
    'Explore our gallery of completed sofa repair, upholstery, and polishing projects. See the quality craftsmanship that defines SofaRevive and get inspired for your own furniture transformation.',
}

export default function GalleryPage() {
  return <GallerySection />
}
