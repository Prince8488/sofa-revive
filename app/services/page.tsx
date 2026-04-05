import { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services | Sofa Upholstery, Repair & Polishing in Bengaluru',
  description:
    'Discover our expert services: custom sofa upholstery, structural repair, and wood polishing. We use premium materials to deliver contract-grade quality for commercial and residential clients.',
}

export default function ServicesPage() {
  return <ServicesClient />
}
