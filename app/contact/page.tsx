import { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title:
    'Contact Us | SofaRevive - Expert Sofa Repair, Upholstery & Cleaning in Bengaluru',
  description: 'Contact SofaRevive.',
  alternates: {
    canonical: '/contact',
  },
}

export default function Page() {
  return <ContactPage />
}
