import SofaRepairClient from '@/components/services/SofaRepairClient'
import Script from 'next/script'

export const metadata = {
  title: 'Sofa Repair in Bangalore | Cushion, Spring & Frame Fix',

  description:
    'Looking for sofa repair in Bangalore? We fix sagging cushions, broken frames, and springs with expert craftsmanship. Free pickup & delivery available across Bengaluru.',

  keywords:
    'sofa repair bangalore, sagging sofa repair, sofa spring replacement, cushion refilling, couch repair bangalore',

  openGraph: {
    title: 'Sofa Repair in Bangalore | SofaRevive',
    description:
      'Fix your sofa with expert repair services in Bangalore. Cushion refilling, frame repair & spring replacement with free pickup.',
    images: ['https://www.sofarevive.com/images/sofa-repair-process.jpg'],
  },

  alternates: {
    canonical: 'https://www.sofarevive.com/services/sofa-repair-bangalore',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Sofa Repair in Bangalore',

  description:
    'Professional sofa repair services in Bangalore including cushion refilling, frame fixing, and spring replacement with free pickup and delivery.',

  provider: {
    '@type': 'LocalBusiness',
    name: 'SofaRevive',
    url: 'https://www.sofarevive.com',
  },

  areaServed: {
    '@type': 'City',
    name: 'Bangalore',
  },

  availableChannel: {
    '@type': 'ServiceChannel',
    serviceLocation: {
      '@type': 'Place',
      name: 'Bangalore',
    },
  },

  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: 1000,
      maxPrice: 30000,
    },
  },
}

const SofaFurnitureService = () => {
  return (
    <>
      <Script
        id="sofa-repair-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <SofaRepairClient />
    </>
  )
}

export default SofaFurnitureService
