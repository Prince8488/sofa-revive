import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'
import Sticky from '@/components/layout/sections/Sticky'
import FloatingSticky from '@/components/layout/sections/FloatingSticky'

const inter = Inter({ subsets: ['latin'] })

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'SofaRevive',
  image: 'https://sofa-revive.netlify.app/og-image.jpg',
  description:
    'Premium sofa repair, upholstery, and wood polishing services in Bengaluru, specializing in commercial and hospitality furniture restoration.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Bengaluru',
    addressRegion: 'KA',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9716,
    longitude: 77.5946,
  },
  url: 'https://sofa-revive.netlify.app',
  telephone: '+919304059249',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
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

export const metadata: Metadata = {
  metadataBase: new URL('https://sofa-revive.netlify.app'),
  title: {
    default:
      'SofaRevive | Premium Sofa Repair, Upholstery & Polishing in Bengaluru',
    template: `%s | SofaRevive`,
  },
  description:
    "Breathe new life into your furniture with Bengaluru's top-rated sofa restoration experts. We specialize in commercial and residential sofa repair, custom upholstery, and wood polishing. 5-Star Rated. 10+ Years of Experience. Get a free quote today!",
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
      'Expert craftsmanship for your beloved furniture. We bring the showroom finish back to your doorstep, serving commercial and hospitality sectors.',
    type: 'website',
    url: 'https://sofa-revive.netlify.app',
    images: [
      {
        url: 'og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A beautifully restored sofa by SofaRevive in a commercial lounge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SofaRevive | Restore Your Furniture to Its Former Glory',
    description:
      'From 5-star hotels to cozy homes, SofaRevive offers expert sofa repair, upholstery, and cleaning services across Bengaluru.',
    images: ['og-image.jpg'],
  },
  other: {
    preconnect: 'https://images.unsplash.com',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.className} bg-stone-50 py-8 text-slate-900 md:py-0`}
      >
        <Header />
        {children}
        <Footer />
        <Sticky />
        <FloatingSticky />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
