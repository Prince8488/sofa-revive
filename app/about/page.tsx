"use client";

import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Leaf,
  ArrowRight,
  Hammer,
  Microscope,
  Award,
} from "lucide-react";
import Link from "next/link";

const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-studio-900 pt-20 md:pt-32 pb-20 overflow-x-hidden selection:bg-brand-100 selection:text-brand-900">
      {/* 1. HERO: THE MANIFESTO */}
      <section className="px-6 mb-24 md:mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-50/50 via-transparent to-transparent -z-10 opacity-70" />

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-brand-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-brand-200" />
              Anti-Fast Furniture • Since 2014
              <span className="h-[1px] w-8 bg-brand-200" />
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[1.1]">
              We don't just repair. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 animate-gradient">
                We Reimagine.
              </span>
            </h1>
            <p className="mt-8 text-studio-500 max-w-2xl mx-auto font-medium text-sm md:text-base leading-relaxed opacity-90">
              Most furniture today is built to be replaced. At DreamDecore, we
              believe the best piece in your home is the one you already own. We
              combine Bengaluru’s heritage craftsmanship with modern material
              science to give legacies a second life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TECHNICAL AUTHORITY */}
      <section className="px-4 md:px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-studio-100 border border-studio-200/60 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-900/5">
          {[
            {
              icon: <Microscope />,
              title: "Material Science",
              text: "We use multi-density Sleepwell™ foam and high-tensile webbing for a 'better-than-new' ergonomic feel.",
            },
            {
              icon: <Hammer />,
              title: "Structural Integrity",
              text: "Every restoration starts with a frame audit. We reinforce joints with industrial-grade fasteners.",
            },
            {
              icon: <Sparkles />,
              title: "Contract Grade",
              text: "Our fabrics exceed 50,000 rub counts, sourced from premium mills in Italy and Turkey.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-12 space-y-6 relative group transition-all duration-500 cursor-pointer"
            >
              <div className="text-brand-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tight group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-studio-500 text-xs leading-relaxed font-medium">
                {item.text}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SUSTAINABILITY */}
      <section className="px-6 mb-32 bg-studio-50 py-24 md:rounded-[4rem] mx-0 md:mx-6 border border-studio-100/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
              <Leaf size={12} className="animate-pulse" /> Eco-Conscious Choice
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8">
              Restoration is a <br />{" "}
              <span className="text-brand-600">Radical Act.</span>
            </h2>
            <p className="text-studio-600 text-sm md:text-base leading-relaxed mb-10">
              Every sofa restored is 40kg of carbon emissions saved and 60kg of
              wood kept out of Bengaluru's landfills. Choosing DreamDecore isn’t
              just a design choice; it’s a commitment to a circular economy.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-studio-200 pt-10">
              <div className="group cursor-default">
                <p className="text-4xl font-black italic text-brand-600">
                  5,000+
                </p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-studio-400 mt-2">
                  Pieces Saved
                </p>
              </div>
              <div className="group cursor-default">
                <p className="text-4xl font-black italic text-brand-600">
                  300 Tons
                </p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-studio-400 mt-2">
                  Waste Diverted
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000"
              className="w-full aspect-square object-cover transition-all duration-700"
              alt="Sustainability in Action"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]" />
          </div>
        </div>
      </section>

      {/* 4. THE PROMISE */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto"
          >
            <Award className="text-brand-600 w-8 h-8" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight">
            The DreamDecore Warranty
          </h2>
          <p className="text-studio-500 text-sm md:text-base leading-relaxed italic max-w-2xl mx-auto">
            "Every restoration is accompanied by a signed Certificate of
            Quality. We provide a 5-year structural warranty because we don't
            just fix furniture—we build legacies."
          </p>
          <div className="pt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/quote" className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative min-w-[280px] px-12 py-8 bg-blue-600 text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:shadow-blue-600/60 group z-10 cursor-pointer"
              >
                <span>Book Your Audit</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </motion.button>
            </Link>
            <Link href="/gallery" className="cursor-pointer">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#0f172a",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 border-2 border-studio-900 text-studio-900 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer"
              >
                View Our Catalog
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
