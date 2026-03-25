"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Heart, MapPin } from "lucide-react";

const FOOTER_DATA = {
  company: {
    title: "SofaRevive",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Terms Of Use", href: "/terms-of-use" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  support: {
    title: "Need Help?",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  explore: {
    title: "Explore More",
    links: [
      { label: "Sofa Repair", href: "/services/sofa-repair" },
      { label: "Sofa Upholstery", href: "/services/sofa-upholstery" },
      { label: "Sofa Polishing", href: "/services/sofa-polishing" },
    ],
  },
};

const serviceAreas = [
  "Indiranagar",
  "Koramangala",
  "HSR Layout",
  "Whitefield",
  "Jayanagar",
  "JP Nagar",
  "Malleshwaram",
  "Bannerghatta",
  "Electronic City",
  "Sarjapur",
  "Marathahalli",
  "Bellandur",
];

const FooterSection = ({ title, links }: { title: string; links: any[] }) => (
  <nav className="flex flex-col space-y-6" aria-label={`${title} navigation`}>
    {/* FIX 1: Changed h4 to p/span to fix heading hierarchy levels */}
    <p className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
      {title}
    </p>
    <ul className="flex flex-col space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            // FIX 2: Darkened text-slate-400 to text-slate-300 for better contrast on dark bg
            className="text-xs md:text-sm font-medium transition-colors hover:text-blue-400 text-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 px-6 md:px-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
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

          <div className="col-span-2 lg:col-span-2 space-y-8">
            <section aria-labelledby="social-heading">
              {/* FIX 3: Changed h4 to p */}
              <p
                id="social-heading"
                className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6"
              >
                Follow the craft
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                ].map(({ Icon, label }, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    aria-label={`Visit our ${label} page`}
                    className="w-10 h-10 rounded-xl bg-slate-900 text-slate-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all active:scale-90 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* SERVICE AREAS SECTION */}
        <div className="py-12 border-y border-slate-900/50 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/3">
              <p className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 flex items-center gap-2">
                <MapPin size={14} className="text-blue-500" />
                Service Areas
              </p>
              {/* FIX 4: Changed text-slate-700 (failed audit) to text-slate-400 for better visibility on dark bg */}
              <p className="text-[11px] leading-relaxed text-slate-400 uppercase font-bold tracking-wider">
                Providing premium on-site furniture restoration across
                Bengaluru's major neighborhoods.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 gap-x-6">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <div className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-blue-400 transition-colors">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL FOOTNOTE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* FIX 5: Darkened from slate-400 to slate-300 to ensure readability */}
          <p className="text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase text-center md:text-left">
            © {currentYear} SofaRevive Services Pvt Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase">
            Designed with{" "}
            <Heart
              size={10}
              className="text-red-500 fill-red-500"
              role="img"
              aria-label="love"
            />{" "}
            in
            <span className="text-slate-200">Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
