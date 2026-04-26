import FaqAccordion from '@/components/layout/sections/FAQs'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Sofa Repair FAQ in Bangalore | SofaRevive',
  description:
    'Find answers to common questions about sofa repair, upholstery, cleaning, pricing, and services in Bangalore. Free pickup & delivery available.',
  alternates: {
    canonical: 'https://www.sofarevive.com/faq',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does sofa repair cost in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sofa repair costs depend on material, size, and damage. Contact us for a free quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide sofa pickup and delivery in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer free pickup and delivery across Bangalore.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does sofa repair take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most sofa repairs are completed within 5–7 days depending on the work required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer custom sofa upholstery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide custom sofa upholstery with a wide range of premium fabrics and leather options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas do you serve in Bangalore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all major areas in Bangalore including HSR Layout, BTM, Whitefield, Electronic City, and surrounding locations.',
      },
    },
  ],
}

export default function FaqPage() {
  return (
    <>
      {/* ✅ FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="min-h-screen bg-white px-6 pb-20 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl">
          {/* HEADER SECTION */}
          <header className="mb-12 text-center md:mb-16 md:text-left">
            <h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Sofa Repair <br className="md:hidden" />
              <span className="bg-gradient-to-r from-[#3e3d3d] to-gray-600 bg-clip-text text-transparent">
                FAQs
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-slate-700 md:text-base">
              Looking for answers about sofa repair in Bangalore? Here are the
              most common questions about pricing, upholstery services,
              turnaround time, and pickup options.
            </p>
          </header>

          {/* FAQ Section */}
          <section className="bg-white">
            <FaqAccordion />
          </section>

          {/* CTA */}
          <footer className="mt-16 rounded-[2.5rem] border border-slate-200 border-slate-200/60 bg-slate-50 p-8 text-center md:p-14">
            <h3 className="text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
              Still have questions?
            </h3>

            <p className="mb-8 mt-3 text-[13px] font-medium text-slate-700 md:text-sm">
              Our team is available on WhatsApp for instant support.
            </p>

            <a
              href="https://wa.me/916366921602"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-slate-950 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl shadow-slate-900/10 transition-all hover:bg-gray-800 active:scale-95"
            >
              Chat with us
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}
