import { Inter, Roboto } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'
import './globals.css'
import GTMClient from '@/components/GTMClient'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://www.sofarevive.com/#business',
  name: 'Sofarevive',
  url: 'https://www.sofarevive.com',
  image: 'https://www.sofarevive.com/og-image.svg',
  description:
    'Premium sofa repair, upholstery, and wood polishing services in Bengaluru, specializing in commercial and hospitality furniture restoration.',
  serviceType: 'Sofa Repair, Sofa Cleaning, Wood Polishing, & Upholstery',
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
  priceRange: '₹₹',

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

  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+916366921602',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },

  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'City', name: 'HSR Layout' },
    { '@type': 'City', name: 'BTM Layout' },
    { '@type': 'City', name: 'Whitefield' },
    { '@type': 'City', name: 'Koramangala' },
    { '@type': 'City', name: 'Indiranagar' },
    { '@type': 'City', name: 'Jayanagar' },
    { '@type': 'City', name: 'Malleshwaram' },
    { '@type': 'City', name: 'Rajajinagar' },
    { '@type': 'City', name: 'Bommanahalli' },
    { '@type': 'City', name: 'Electronic City' },
    { '@type': 'City', name: 'Varthur' },
    { '@type': 'City', name: 'Marathahalli' },
    { '@type': 'City', name: 'Yelahanka' },
    { '@type': 'City', name: 'Kengeri' },
    { '@type': 'City', name: 'Kanakapura' },
    { '@type': 'City', name: 'Bannerghatta Road' },
    { '@type': 'City', name: 'Sarjapur Road' },
    { '@type': 'City', name: 'Hebbal' },
    { '@type': 'City', name: 'Rajarajeshwari Nagar' },
    { '@type': 'City', name: 'Dasarahalli' },
    { '@type': 'City', name: 'Kundalahalli' },
    { '@type': 'City', name: 'Hosur Road' },
    { '@type': 'City', name: 'Bellandur' },
    { '@type': 'City', name: 'Electronic City Phase 2' },
  ],
}

export const dynamic = 'force-static'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sofarevive.com'),

  alternates: {
    canonical: 'https://www.sofarevive.com/',
  },

  robots: {
    index: true,
    follow: true,
  },

  title: {
    default: 'Sofa Repair in Bangalore | Upholstery & Cleaning',
    template: `%s | SofaRevive`,
  },

  description:
    'Affordable sofa repair, upholstery & cleaning in Bangalore. Free pickup & delivery, expert craftsmanship & quick service. Book your sofa restoration today!',

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
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
  },

  openGraph: {
    title: 'Bengaluru`s Premier Sofa Restoration Services | SofaRevive',
    description:
      'Affordable sofa repair & upholstery in Bangalore. Free pickup & quick service. Call now!',
    url: 'https://www.sofarevive.com',
    siteName: 'SofaRevive',
    images: [
      {
        url: 'https://www.sofarevive.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bengaluru`s Premier Sofa Restoration Services | SofaRevive',
    description:
      'Affordable sofa repair & upholstery in Bangalore. Free pickup & quick service. Call now!',
    images: ['https://www.sofarevive.com/og-image.jpg'],
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
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GTMClient />
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
      </body>
    </html>
  )
}
