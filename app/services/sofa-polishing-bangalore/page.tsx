import SofaPolishingClient from '@/components/services/SofaPolishingClient'
import Script from 'next/script'

export const metadata = {
  title: 'Wood Polishing Services in Bangalore | Furniture Restoration Experts',

  description:
    'Looking for wood polishing services in Bangalore? We restore teak, rosewood, and antique furniture with PU and melamine polish for a premium finish. Free pickup available.',

  keywords:
    'wood polishing bangalore, furniture polishing bangalore, teak wood polishing, antique furniture restoration, sofa polishing bangalore',

  openGraph: {
    title: 'Wood Polishing Services in Bangalore | SofaRevive',
    description:
      'Professional wood and furniture polishing services in Bangalore. Restore shine with expert finishing and durable coating.',
    images: ['https://www.sofarevive.com/images/wood-polishing-results.jpg'],
  },

  alternates: {
    canonical: 'https://www.sofarevive.com/services/sofa-polishing-bangalore',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Wood Polishing Services in Bangalore',

  description:
    'Professional wood polishing and furniture restoration services in Bangalore including teak wood polishing, PU coating, and antique furniture restoration.',

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
      minPrice: 800,
      maxPrice: 20000,
    },
  },
}

const SofaPolishingService = () => {
  return (
    <>
      <Script
        id="sofa-polishing-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <SofaPolishingClient />
    </>
  )
}

export default SofaPolishingService
