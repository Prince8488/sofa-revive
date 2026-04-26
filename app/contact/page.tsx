import { Metadata } from 'next'
import Script from 'next/script'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact Sofa Repair Experts in Bangalore | SofaRevive',

  description:
    'Contact SofaRevive for sofa repair, upholstery, and furniture restoration services in Bangalore. Call or WhatsApp us for quick support and free pickup & delivery.',

  alternates: {
    canonical: 'https://www.sofarevive.com/contact',
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',

  name: 'Contact SofaRevive Bangalore',

  description:
    'Contact SofaRevive for sofa repair, upholstery, and furniture restoration services in Bangalore.',

  url: 'https://www.sofarevive.com/contact',

  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'SofaRevive',
    telephone: '+916366921602',

    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },

    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+916366921602',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <ContactPage />
    </>
  )
}
