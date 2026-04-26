import SofaUpholsteryClient from '@/components/services/SofaUpholsteryClient'
import Script from 'next/script'

export const metadata = {
  title: 'Sofa Upholstery in Bangalore | Fabric Replacement & Reupholstery',

  description:
    'Looking for sofa upholstery in Bangalore? We provide fabric replacement, leather upholstery, and custom sofa covers with 500+ premium options. Free pickup & delivery available.',

  keywords:
    'sofa upholstery bangalore, couch fabric replacement, leather sofa reupholstery, custom sofa covers bangalore, sofa fabric change',

  openGraph: {
    title: 'Sofa Upholstery in Bangalore | SofaRevive',
    description:
      'Upgrade your sofa with premium upholstery services in Bangalore. Choose from 500+ fabrics with expert craftsmanship.',
    images: ['https://www.sofarevive.com/images/upholstery-before-after.jpg'],
  },

  alternates: {
    canonical: 'https://www.sofarevive.com/services/sofa-upholstery-bangalore',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',

  name: 'Sofa Upholstery in Bangalore',

  description:
    'Professional sofa upholstery services in Bangalore including fabric replacement, leather upholstery, and custom sofa covers with premium materials.',

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
      minPrice: 5000,
      maxPrice: 50000,
    },
  },
}

const UpholsteryRestorationService = () => {
  return (
    <>
      <Script
        id="sofa-upholstery-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <SofaUpholsteryClient />
    </>
  )
}

export default UpholsteryRestorationService
