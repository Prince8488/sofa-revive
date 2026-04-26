import { Metadata } from 'next'
import Script from 'next/script'
import QuoteForm from './QuoteForm'

export const metadata: Metadata = {
  title: 'Get Sofa Repair Quote in Bangalore | Free Estimate | SofaRevive',

  description:
    'Request a free quote for sofa repair, upholstery, and polishing services in Bangalore. Get expert consultation with quick response and free pickup & delivery.',

  alternates: {
    canonical: 'https://www.sofarevive.com/quote',
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',

  name: 'Get Sofa Repair Quote in Bangalore',

  description:
    'Request a free quote for sofa repair, upholstery, and furniture restoration services in Bangalore.',

  url: 'https://www.sofarevive.com/quote',

  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'SofaRevive',
    telephone: '+916366921602',
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
  },
}

export default function Page() {
  return (
    <>
      <Script
        id="quote-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <QuoteForm />
    </>
  )
}
