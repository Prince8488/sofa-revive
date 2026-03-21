"use client";

import FaqAccordion from "@/components/layout/sections/faq";

export default function FaqPage() {
  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER SECTION: Standardized with Hero/Service pages */}
        <header className="mb-12 md:mb-16 text-center md:text-left">
          {/* Updated: Extrabold / Tracking-Tight */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Common <br className="md:hidden" />
            <span className="text-blue-600">Queries.</span>
          </h1>

          {/* Updated: Standardized Slate-500 font scale */}
          <p className="mt-6 text-slate-500 font-medium max-w-xl text-sm md:text-base leading-relaxed">
            Everything you need to know about our furniture restoration process,
            booking details, and service standards in Bangalore.
          </p>
        </header>

        {/* FAQ Section */}
        <section className="bg-white">
          <FaqAccordion />
        </section>

        {/* Support CTA - Standardized with the Page Aesthetic */}
        <footer className="mt-16 p-8 md:p-14 bg-slate-50 rounded-[2.5rem] border border-slate-200/60 text-center">
          {/* Updated: Extrabold Subheader */}
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
            Still have questions?
          </h3>
          <p className="text-slate-500 mt-3 mb-8 text-[13px] md:text-sm font-medium">
            Our concierge team is available on WhatsApp for instant support.
          </p>

          {/* Updated: Standardized [10px] Button Style */}
          <a
            href="https://wa.me/919304059249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-950 text-white px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all active:scale-95 shadow-2xl shadow-slate-900/10"
          >
            Chat with us
          </a>
        </footer>
      </div>
    </div>
  );
}
