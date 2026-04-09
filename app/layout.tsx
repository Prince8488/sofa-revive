import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'
import Sticky from '@/components/layout/sections/Sticky'
import FloatingSticky from '@/components/layout/sections/FloatingSticky'

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
  name: 'SofaRevive',
  image: 'https://www.sofarevive.com/og-image.jpg',
  description:
    'Premium sofa repair, upholstery, and wood polishing services in Bengaluru, specializing in commercial and hospitality furniture restoration.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16, behind aqsa Masjid, Rajiv Gandhi nagar',
    addressLocality: ' Muneswara Nagar, Sector 6, Bommanahalli, Gundu Thopu',
    addressRegion: 'Bengaluru',
    postalCode: '560068',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.906843,
    longitude: 77.630683,
  },
  url: 'https://www.sofarevive.com',
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sofarevive.com'),
  title: {
    default: 'SofaRevive | Sofa Repair, Upholstery & Polishing in Bengaluru',
    template: `%s | SofaRevive`,
  },
  description:
    "Bengaluru's top-rated sofa restoration. We specialize in commercial and residential sofa repair, custom upholstery, and wood polishing. 5-Star Rated. 10+ Years of Experience. Get a free quote!",
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
    url: 'https://www.sofarevive.com',
    images: [
      {
        url: 'og-image.svg',
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} bg-stone-50 py-8 text-slate-900 md:py-0`}
        suppressHydrationWarning
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
