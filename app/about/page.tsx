import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us | Our Mission to Revive Quality Furniture in Bengaluru',
  description:
    'Learn about SofaRevive, our commitment to sustainability, and our mission to fight fast furniture with expert craftsmanship and material science. Discover our story.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
