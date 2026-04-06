'use client'

import FaqAccordion from '@/components/layout/sections/FAQs'

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white px-6 pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-4xl">
        {/* HEADER SECTION: Standardized with Hero/Service pages */}
        <header className="mb-12 text-center md:mb-16 md:text-left">
          {/* Updated: Extrabold / Tracking-Tight */}
          <h1
            className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Common <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#3e3d3d] to-gray-600 bg-clip-text text-transparent">
              Queries.
            </span>
          </h1>

          {/* Updated: Standardized Slate-500 font scale */}
          <p className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-slate-700 md:text-base">
            Everything you need to know about our furniture restoration process,
            booking details, and service standards in Bangalore.
          </p>
        </header>

        {/* FAQ Section */}
        <section className="bg-white">
          <FaqAccordion />
        </section>

        {/* Support CTA - Standardized with the Page Aesthetic */}
        <footer className="mt-16 rounded-[2.5rem] border border-slate-200/60 bg-slate-50 p-8 text-center md:p-14">
          {/* Updated: Extrabold Subheader */}
          <h3 className="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
            Still have questions?
          </h3>
          <p className="mb-8 mt-3 text-[13px] font-medium text-slate-700 md:text-sm">
            Our concierge team is available on WhatsApp for instant support.
          </p>

          {/* Updated: Standardized [10px] Button Style */}
          <a
            href="https://wa.me/919304059249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-slate-950 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl shadow-slate-900/10 transition-all hover:bg-gray-800 active:scale-95"
          >
            Chat with us
          </a>
        </footer>
      </div>
    </div>
  )
}
