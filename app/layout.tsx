import { Inter, Stick } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Sticky from "@/components/layout/sections/Sticky";
import FloatingSticky from "@/components/layout/sections/FloatingSticky";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore", // Or "LocalBusiness"
  name: "SofaRevive",
  image: "https://yourdomain.com/og-image.jpg",
  description: "Premium sofa repair, upholstery, and wood polishing services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Office Address",
    addressLocality: "Your City",
    addressRegion: "ST",
    postalCode: "123456",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9716, // Replace with your actual lat/long
    longitude: 77.5946,
  },
  url: "https://yourdomain.com",
  telephone: "+919304059249",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sofa-revive.netlify.app"),
  title: "LuxeSofa | Premium Sofa Repair, Upholstery & Polishing in Bangalore",
  description:
    "Transform your furniture with the city's top-rated sofa restoration experts. Specializing in leather repair, custom upholstery, and wood polishing.Expert sofa upholstery services. 5-Star Rated. 10+ Years Experience. Choose from 500+ premium fabrics",
  keywords:
    "sofa repair near me, furniture upholstery, sofa polishing, couch restoration, custom sofa covers",
  openGraph: {
    title: "LuxeSofa Restoration Services",
    description: "Expert craftsmanship for your beloved furniture.",
    type: "website",
  },
  other: {
    preconnect: "https://images.unsplash.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-stone-50 text-slate-900`}
        suppressHydrationWarning={true} // Add this here
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
  );
}
