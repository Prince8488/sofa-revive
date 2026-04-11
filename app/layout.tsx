import { Inter, Roboto } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'
import Sticky from '@/components/layout/sections/Sticky'
import FloatingSticky from '@/components/layout/sections/FloatingSticky'
import Script from 'next/script'
import './globals.css'

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
  '@id': 'https://www.sofarevive.com',
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'SofaRevive',
  image: 'https://www.sofarevive.com/og-image.svg',
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
  alternates: {
    canonical: '/',
  },
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
      'Expert craftsmanship for your beloved furniture. We bring the showroom finish back to your doorstep, serving commercial and hospitality sectors.',
    type: 'website',
    url: 'https://www.sofarevive.com',
    images: [
      {
        url: 'https://www.sofarevive.com/og-image.svg',
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
    images: ['https://www.sofarevive.com/og-image.svg'],
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
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N97Q3C7P');
          `}
        </Script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/favicon-32x32.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="/favicon-16x16.svg"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} bg-stone-50 py-8 text-slate-900 md:py-0`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N97Q3C7P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
