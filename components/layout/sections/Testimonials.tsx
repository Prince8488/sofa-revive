"use client";

import { Quote, Star } from "lucide-react";

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
    <section id="reviews" className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
        {/* LEFT: Trust Header */}
        <div className="lg:col-span-1 lg:sticky lg:top-32">
          <Quote
            size={48}
            className="text-blue-600/20 mb-6"
            strokeWidth={1.5}
          />

          {/* Updated: Extrabold Tracking-Tight (No Italic/Black) */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight leading-[1.1] text-slate-900">
            What our <br />
            <span className="text-blue-600">Clients</span> say
          </h2>

          <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 w-fit shadow-sm">
            <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              4.9
            </div>
            <div>
              <div className="flex text-amber-400 mb-1.5 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              {/* Standardized: [10px] Bold Tracking-Widest */}
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                Verified Google Rating
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Testimonial Cards */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {REVIEWS.map((t, i) => (
            <article
              key={i}
              className="group bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 relative hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>

              {/* Updated: Standardized Professional Font Scale */}
              <p className="text-slate-600 mb-8 text-sm md:text-base leading-relaxed font-medium">
                "{t.text}"
              </p>

              <div className="pt-6 border-t border-slate-50 flex flex-col gap-1">
                {/* Updated: Extrabold Name */}
                <p className="font-extrabold text-slate-900 text-sm tracking-tight uppercase">
                  {t.name}
                </p>
                {/* Standardized: Blue [10px] Badge */}
                <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.15em]">
                  {t.area}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
