"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    q: "When will I get my report?",
    a: "Our technicians submit reports almost immediately. After our quality team ensures every detail is perfect, your final report is dispatched within a few days.",
  },
  {
    q: "How do I cancel or reschedule an appointment?",
    a: "Simply contact our booking team at +91 93040 59249 via call or WhatsApp. We'll help you find a new time that works for you.",
  },
  {
    q: "Can you provide a quote over the phone?",
    a: "Yes. Our domestic work department can provide estimates over the phone. We'll ask a few questions about the furniture and may request a few photos via WhatsApp to be precise.",
  },
  {
    q: "Will my furniture be taken away for repair?",
    a: "In most cases, no. We prioritize in-home repairs which often take as little as 30 minutes. We only transport pieces to our workshop for severe structural damage or complex restoration.",
  },
  {
    q: "What areas do you currently serve?",
    a: "We are currently operating throughout Bangalore. We plan to expand to other major cities soon based on regional demand.",
  },
  {
    q: "Do you offer custom reupholstery?",
    a: "Absolutely. We offer a curated selection of premium fabrics and leathers. If you have your own material, we can work with that too, depending on the fabric's suitability.",
  },
  {
    q: "Can old furniture be restored to its original state?",
    a: "Yes. Whether it's a 'glorious restoration' to its original state or a complete style overhaul, our master technicians have the skills to revive any piece.",
  },
];

export default function FaqAccordion() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="space-y-0" itemScope itemType="https://schema.org/FAQPage">
      {FAQ_DATA.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-slate-200 first:border-t overflow-hidden transition-colors"
          itemProp="mainEntity"
          itemScope
          itemType="https://schema.org/Question"
        >
          <button
            onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            aria-expanded={activeIdx === idx}
            aria-controls={`faq-answer-${idx}`}
            className="w-full flex justify-between items-center py-7 text-left group transition-all"
            type="button"
          >
            {/* Updated: Extrabold / Tracking-Tight (No Italic/Black) */}
            <span
              itemProp="name"
              className={`text-base md:text-lg font-bold tracking-tight transition-colors ${
                activeIdx === idx
                  ? "text-blue-600"
                  : "text-slate-900 group-hover:text-blue-600"
              }`}
            >
              {item.q}
            </span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                activeIdx === idx
                  ? "rotate-180 text-blue-600"
                  : "text-slate-600"
              }`}
              size={20}
              aria-hidden="true"
            />
          </button>

          <AnimatePresence initial={false}>
            {activeIdx === idx && (
              <motion.div
                id={`faq-answer-${idx}`}
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                {/* Updated: Slate-500 font-medium scale */}
                <div
                  className="pb-8 text-slate-700 text-sm md:text-[15px] leading-relaxed max-w-2xl font-medium"
                  itemProp="text"
                >
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
