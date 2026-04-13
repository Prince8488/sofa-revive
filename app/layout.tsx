import { Inter, Roboto } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import FloatingSticky from '@/components/layout/sections/FloatingSticky'
import Sticky from '@/components/layout/sections/Sticky'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  '@id': 'https://www.sofarevive.com',
  name: 'SofaRevive',
  url: 'https://www.sofarevive.com',
  image: 'https://www.sofarevive.com/og-image.svg',
  description:
    'Premium sofa repair, upholstery, and wood polishing services in Bengaluru, specializing in commercial and hospitality furniture restoration.',

  address: {
    '@type': 'PostalAddress',
    streetAddress:
      '16, behind aqsa Masjid, Rajiv Gandhi nagar, Muneswara Nagar, Sector 6',
    addressLocality: 'Bommanahalli',
    addressRegion: 'Bengaluru',
    postalCode: '560068',
    addressCountry: 'IN',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.906843,
    longitude: 77.630683,
  },

  telephone: '+916366921602',

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
  ],

  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Sofa Upholstery',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Sofa Repair',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Sofa Cleaning',
      },
    },
  ],

  areaServed: {
    '@type': 'City',
    name: 'Bengaluru',
  },
}

export const dynamic = 'force-static'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sofarevive.com'),

  title: {
    default: 'SofaRevive | Repair, Upholstery & Polishing in Bengaluru',
    template: `%s | SofaRevive`,
  },

  description:
    'Top-rated sofa restoration in Bengaluru. We specialize in commercial and residential sofa repair, custom upholstery, and wood polishing. Get a free quote!',

  keywords: [
    'sofa repair bangalore',
    'furniture upholstery bengaluru',
    'sofa polishing near me',
    'couch restoration',
    'custom sofa covers',
    'leather sofa repair',
    'commercial sofa upholstery',
    'hospitality furniture repair',
    'sofa cleaning services',
  ],

  openGraph: {
    title: 'SofaRevive | Bengaluru`s Premier Sofa Restoration Services',
    description:
      'Expert craftsmanship for your beloved furniture. We bring the showroom finish back to your doorstep.',
    url: 'https://www.sofarevive.com',
    siteName: 'SofaRevive',
    images: [
      {
        url: 'https://www.sofarevive.com/og-image.svg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SofaRevive',
    description: 'Restore your furniture to its former glory.',
    images: ['https://www.sofarevive.com/og-image.svg'],
  },

  icons: {
    icon: '/favicon-32x32.svg',
    apple: '/apple-touch-icon.svg',
  },

  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} bg-stone-50 py-8 text-slate-900 md:py-0`}
      >
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-N97Q3C7P"
          strategy="lazyOnload"
        />

        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N97Q3C7P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />

        <Sticky />
        <FloatingSticky />
      </body>
    </html>
  )
}
