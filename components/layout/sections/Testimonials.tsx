"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Rahul Varma",
    area: "HSR Layout",
    text: "Incredible transformation! My 8-year-old leather sofa looks brand new. Highly recommend their polishing service.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    area: "Whitefield",
    text: "Professional team and timely delivery. They have a massive fabric collection to choose from. Very happy!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-white px-6 py-5">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-3 lg:gap-20">
          {/* LEFT: Trust Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 lg:sticky lg:top-32"
          >
            <Quote
              size={48}
              className="mb-6 text-blue-600/20"
              strokeWidth={1.5}
            />

            {/* H2: Matched to previous section 4xl/5xl */}
            <h2 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
              What our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
                Clients
              </span>{" "}
              say
            </h2>

            {/* Rating Card: Matched UI style */}
            <div className="flex w-fit items-center gap-6 rounded-[2.5rem] border border-slate-100 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <div className="text-4xl font-black tracking-tighter text-slate-900 md:text-5xl">
                4.9
              </div>
              <div>
                <div className="mb-1.5 flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                {/* Badge: Standardized 11px Bold */}
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Verified Google Rating
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Testimonial Cards */}
          <div className="grid gap-8 lg:col-span-2 md:grid-cols-2">
            {REVIEWS.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 md:p-10"
              >
                <div className="mb-6 flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text: text-base (16px) matched to main section body */}
                <p className="mb-8 text-base font-medium leading-relaxed text-slate-600">
                  "{t.text}"
                </p>

                <div className="flex flex-col gap-1 border-t border-slate-50 pt-6">
                  {/* Name: 15px/16px matched to feature titles */}
                  <p className="text-[15px] font-bold uppercase tracking-tight text-slate-900">
                    {t.name}
                  </p>
                  {/* Area Badge: Matched 11px blue style */}
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                    {t.area}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
