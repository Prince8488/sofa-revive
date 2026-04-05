'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Sofa,
  PaintRoller,
  Wrench,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const SERVICES = [
  {
    icon: <Sofa size={24} />,
    title: 'Custom Upholstery',
    description:
      'From premium leather to sustainable fabrics, choose from over 1,000+ options to give your sofa a new identity.',
    features: [
      'Contract-grade durability',
      'Pet & child-friendly materials',
      'Expert pattern matching',
    ],
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800',
    alt: 'A skilled artisan carefully stretching fabric over a sofa frame.',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Structural Repair',
    description:
      'We go beyond the surface to reinforce frames, replace broken springs, and restore structural integrity for lasting comfort.',
    features: [
      'Frame strengthening',
      'Spring & webbing replacement',
      '5-year structural warranty',
    ],
    image: 'https://images.unsplash.com/photo-1611212074931-d5a34787b5a3?w=800',
    alt: 'Close-up of a craftsman repairing the wooden frame of a sofa.',
  },
  {
    icon: <PaintRoller size={24} />,
    title: 'Wood Polishing',
    description:
      'Our multi-step polishing process removes scratches and restores the original luster of your wooden furniture.',
    features: [
      'Scratch & dent removal',
      '7-step polish & seal process',
      'Water-resistant finishes',
    ],
    image: 'https://images.unsplash.com/photo-1596144488478-46053995a138?w=800',
    alt: 'A detailed shot of a hand applying a finishing polish to a wooden sofa leg.',
  },
]

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-white pb-20 pt-20 text-slate-900 selection:bg-blue-100 md:pt-32">
      {/* 1. HERO */}
      <motion.section
        initial="initial"
        animate="animate"
        className="mb-24 px-6 text-center"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
            Our Expertise
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Comprehensive Care <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
              For Your Furniture
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-600">
            We offer a complete suite of services to revive, restore, and
            protect your cherished furniture, ensuring it stands the test of
            time.
          </p>
        </div>
      </motion.section>

      {/* 2. SERVICES LIST */}
      <motion.section
        variants={stagger}
        initial="initial"
        animate="animate"
        className="mx-auto max-w-7xl space-y-24 px-6"
      >
        {SERVICES.map((service, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24"
          >
            <div className={`space-y-8 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
              <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  {service.title}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-slate-600">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-blue-600"
                      strokeWidth={3}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group relative h-[500px] overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* 3. CTA SECTION */}
      <section className="mt-32 border-t border-slate-100 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600">
            Our team is ready to help you choose the perfect service for your
            needs. Contact us for a personalized consultation.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/quote" aria-label="Get a free quote">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-full bg-slate-900 px-10 py-5 text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-slate-300 transition-all hover:bg-blue-600"
              >
                Get a Free Quote <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
