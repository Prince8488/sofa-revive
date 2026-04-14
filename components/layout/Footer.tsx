'use client'

import React from 'react'
import Link from 'next/link'
import Icon from '@/components/icons'
import { Heart, MapPin } from 'lucide-react'

const FOOTER_DATA = {
  company: {
    title: 'SofaRevive',
    links: [
      { label: 'About SofaRevive', href: '/about' },
      { label: 'Terms Of Use', href: '/terms-of-use' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
  support: {
    title: 'Need Help?',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'View Our Work', href: '/gallery' },
    ],
  },
  explore: {
    title: 'Explore More',
    links: [
      { label: 'Sofa Repair', href: '/services/sofa-repair-bangalore' },
      { label: 'Sofa Upholstery', href: '/services/sofa-upholstery-bangalore' },
      { label: 'Sofa Polishing', href: '/services/sofa-polishing-bangalore' },
    ],
  },
}

const serviceAreas = [
  'Indiranagar',
  'Koramangala',
  'HSR Layout',
  'Whitefield',
  'Jayanagar',
  'JP Nagar',
  'Malleshwaram',
  'Bannerghatta',
  'Electronic City',
  'Sarjapur',
  'Marathahalli',
  'Bellandur',
]

type FooterSectionProps = {
  title: string
  links: any[]
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <nav className="flex flex-col space-y-6" aria-label={`${title} navigation`}>
    {/* FIX 1: Changed h4 to p/span to fix heading hierarchy levels */}
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white md:text-xs">
      {title}
    </p>
    <ul className="flex flex-col space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            // FIX 2: Darkened text-slate-600 to text-slate-300 for better contrast on dark bg
            className="rounded text-xs font-medium text-slate-300 transition-colors hover:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 md:text-sm"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-900 bg-slate-950 px-6 pb-12 pt-16 text-slate-300 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <FooterSection
            title={FOOTER_DATA.company.title}
            links={FOOTER_DATA.company.links}
          />
          <FooterSection
            title={FOOTER_DATA.support.title}
            links={FOOTER_DATA.support.links}
          />
          <FooterSection
            title={FOOTER_DATA.explore.title}
            links={FOOTER_DATA.explore.links}
          />

          <div className="col-span-2 space-y-8 lg:col-span-2">
            <section aria-labelledby="social-heading">
              {/* FIX 3: Changed h4 to p */}
              <p
                id="social-heading"
                className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white md:text-xs"
              >
                Follow the craft
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://www.instagram.com/your-instagram"
                  aria-label="Visit our Instagram page"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-300 transition-all hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 active:scale-90"
                >
                  <Icon name="Instagram" size={18} aria-hidden="true" />
                </Link>
                <Link
                  href="https://www.facebook.com/your-facebook"
                  aria-label="Visit our Facebook page"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-300 transition-all hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 active:scale-90"
                >
                  <Icon name="Facebook" size={18} aria-hidden="true" />
                </Link>
                <Link
                  href="https://www.twitter.com/your-twitter"
                  aria-label="Visit our Twitter page"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-slate-300 transition-all hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 active:scale-90"
                >
                  <Icon name="Twitter" size={18} aria-hidden="true" />
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* SERVICE AREAS SECTION */}
        <div className="mb-12 border-y border-slate-900/50 py-12">
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="lg:w-1/3">
              <p className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white md:text-xs">
                <MapPin size={14} className="text-gray-500" />
                Service Areas
              </p>
              {/* FIX 4: Changed text-slate-700 (failed audit) to text-slate-600 for better visibility on dark bg */}
              <p className="text-[11px] font-bold uppercase leading-relaxed tracking-wider text-slate-300">
                Providing premium on-site furniture restoration across
                Bengaluru's major neighborhoods.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:w-2/3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="group flex cursor-default items-center gap-2"
                >
                  <div className="h-1 w-1 rounded-full bg-slate-800 transition-colors group-hover:bg-gray-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 transition-colors group-hover:text-gray-400">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL FOOTNOTE */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* FIX 5: Darkened from slate-400 to slate-300 to ensure readability */}
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 md:text-left">
            © {currentYear} SofaRevive Services Pvt Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
            Designed with{' '}
            <Heart
              size={10}
              className="fill-red-500 text-red-500"
              role="img"
              aria-label="love"
            />{' '}
            in
            <span className="text-slate-200">Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
