import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/icons'

export default function AboutGenuine() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-900 selection:bg-stone-200">
      {/* 1. HERO: THE QUIET CONFIDENCE */}
      {/* Notice the use of font-serif for a high-end, timeless feel. */}
      <section className="relative px-6 pb-24 pt-32 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            The Bengaluru Workshop
          </p>
          <h1 className="max-w-4xl font-serif text-[clamp(2rem,4vw,4rem)] leading-[1.1] tracking-tight text-stone-900">
            We preserve the furniture that holds your comfort.
          </h1>
        </div>
      </section>

      {/* 2. THE STORY: ASYMMETRICAL & EDITORIAL */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-20 aspect-[21/9] w-full overflow-hidden bg-stone-200">
            {/* Use a wide, cinematic shot of your workshop here */}
            <Image
              src="/images/preserve-furniture-history.webp"
              alt="Artisans at work in the SofaRevive studio"
              fill
              className="object-cover"
            />
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-24">
            <div className="top-32 md:sticky md:col-span-5">
              <h2 className="font-serif text-3xl leading-snug md:text-4xl">
                Restoration is not merely repair. It is an act of deep respect
                for materials.
              </h2>
            </div>

            <div className="space-y-8 text-lg font-light leading-relaxed text-stone-600 md:col-span-7">
              <p>
                SofaRevive was established in 2014 out of a quiet frustration.
                We watched as Bengaluru's homes filled up with "fast
                furniture"—pieces engineered to look beautiful for a season,
                only to fail structurally within a few years.
              </p>
              <p>
                We built our workshop to offer an alternative. When a piece
                comes to us, we don't just put fresh fabric over old problems.
                We strip it down to its skeleton. We inspect the joinery. We
                replace weak staples with hardened dowels and corner blocks. We
                select foams and springs designed for decades of use, not
                months.
              </p>
              <p>
                This is slow, deliberate work. It requires hands that understand
                the tension of a spring and the grain of seasoned wood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CRAFT (Simple, Honest Icons) */}
      <section className="bg-stone-900 px-6 py-24 text-stone-100">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 md:mb-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              Our Standards
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">
              The Workshop Method.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 border-t border-stone-800 pt-16 md:grid-cols-3 md:gap-16">
            <div className="space-y-6">
              <Icon
                name="Hammer"
                className="h-8 w-8 stroke-[1.5] text-stone-400"
              />
              <h3 className="font-serif text-xl">Structural Integrity</h3>
              <p className="font-light leading-relaxed text-stone-400">
                We discard cheap manufacturing shortcuts. Every frame is
                reinforced with kiln-dried timber and marine-grade adhesives,
                ensuring a foundation that will not creak or sway.
              </p>
            </div>

            <div className="space-y-6">
              <Icon
                name="Scissors"
                className="h-8 w-8 stroke-[1.5] text-stone-400"
              />
              <h3 className="font-serif text-xl">Bespoke Tailoring</h3>
              <p className="font-light leading-relaxed text-stone-400">
                Upholstery is a mathematical art. We pattern-match fabrics with
                millimeter precision, using contract-grade textiles that resist
                wear, fading, and the daily rigors of life.
              </p>
            </div>

            <div className="space-y-6">
              <Icon
                name="Leaf"
                className="h-8 w-8 stroke-[1.5] text-stone-400"
              />
              <h3 className="font-serif text-xl">Conscious Practice</h3>
              <p className="font-light leading-relaxed text-stone-400">
                True luxury is sustainable. By choosing to restore rather than
                replace, you partner with us in diverting massive amounts of
                timber and foam from Karnataka's landfills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PROOF (Image heavy, text light) */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-stone-100 p-12 md:p-20">
            <h2 className="mb-6 font-serif text-4xl text-stone-900">
              Decades of combined expertise.
            </h2>
            <p className="mb-12 text-lg font-light text-stone-600">
              Our artisans have spent their lives mastering the nuances of
              traditional upholstery and modern material science.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-stone-300 pt-8">
              <div>
                <p className="mb-1 font-serif text-3xl text-stone-900">5,00+</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Pieces Restored
                </p>
              </div>
              <div>
                <p className="mb-1 font-serif text-3xl text-stone-900">1 Yr</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Structural Warranty
                </p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] bg-stone-200">
            <Image
              src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1000"
              alt="Close up of fabric selection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. FOOTER & LOCAL CONNECTION */}
      <section className="border-t border-stone-200 px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 font-serif text-3xl md:text-5xl">
            Discuss a project.
          </h2>
          <p className="mb-10 text-lg font-light text-stone-600">
            We offer in-home consultations to assess the structural health of
            your furniture.
          </p>

          <Link
            href="/quote"
            className="inline-flex items-center gap-3 bg-stone-900 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-stone-800"
          >
            Request a Consultation{' '}
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>

          <div className="mt-16 flex flex-col items-center gap-4 border-t border-stone-200 pt-8">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-stone-400">
              <Icon name="MapPin" className="h-4 w-4" /> Proudly serving
            </div>
            <p className="text-sm text-stone-500">
              Indiranagar · Whitefield · Koramangala · Jayanagar ·
              Sadashivanagar
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
