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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does sofa repair cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sofa repair costs depend on material and damage. Contact us for a free quote.',
      },
    },

    {
      '@type': 'Question',
      name: 'Do you provide sofa pickup and delivery in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer free pickup and delivery across Bengaluru.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does sofa repair take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most sofa repairs are completed within 7 days depending on the work required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer custom upholstery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide a wide range of fabric and leather upholstery options.',
      },
    },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.sofarevive.com',
  name: 'SofaRevive',
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

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  title: {
    default:
      'Sofa Repair in Bangalore | Upholstery, Cleaning & Polishing | SofaRevive',
    template: `%s | SofaRevive`,
  },

  description:
    'Affordable sofa repair & upholstery in Bangalore. Free pickup, expert service & quick turnaround. Get your sofa restored today – call now!',

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

        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
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
