import { Metadata } from 'next'
import Script from 'next/script'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title:
    'Sofa Repair, Upholstery & Cleaning Services in Bangalore | SofaRevive',

  description:
    'Explore professional sofa repair, upholstery, and wood polishing services in Bangalore. Free pickup & delivery with expert craftsmanship and premium materials.',

  alternates: {
    canonical: 'https://www.sofarevive.com/services',
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sofa Services in Bangalore',

  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Sofa Repair in Bangalore',
      url: 'https://www.sofarevive.com/services/sofa-repair-bangalore',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sofa Upholstery in Bangalore',
      url: 'https://www.sofarevive.com/services/sofa-upholstery-bangalore',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Wood Polishing Services in Bangalore',
      url: 'https://www.sofarevive.com/services/sofa-polishing-bangalore',
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      <ServicesClient />
    </>
  )
}
