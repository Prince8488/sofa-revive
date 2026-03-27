"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  ShieldCheck,
  Zap,
  MessageSquare,
  User,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";

const IndustryQuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Standardized Input Styling
  const inputBase =
    "w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-medium text-slate-700 placeholder:text-slate-300 text-sm";

  // Updated: Standardized [10px] Bold Tracking-Widest
  const labelBase =
    "text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3 block ml-1";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-32 px-4 selection:bg-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT: THE MOTIVATION */}
        <div className="w-full lg:w-[35%] space-y-12 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Standardized Badge */}
            <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-blue-100">
              <Zap size={12} fill="currentColor" /> Instant Estimates
            </div>

            {/* Updated: bold / Tracking-Tight */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
              Revive Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
                Furniture.
              </span>
            </h1>

            <p className="text-slate-700 font-medium leading-relaxed max-w-sm text-sm md:text-base">
              Bengaluru’s most trusted restoration studio. Get a line-item
              estimate within 15 minutes of sharing photos.
            </p>
          </motion.div>

          {/* Trust Pillars */}
          <div className="space-y-4">
            {[
              { icon: <Zap size={18} />, text: "Free expert advice" },
              {
                icon: <MessageSquare size={18} />,
                text: "WhatsApp Consultation",
              },
              {
                icon: <ShieldCheck size={18} />,
                text: "1-Year Warranty",
              },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 p-5 bg-white rounded-[1.5rem] border border-slate-100 shadow-sm"
              >
                <div className="text-blue-600">{pillar.icon}</div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: THE CONCIERGE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-[65%] bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] p-8 md:p-16 border border-white relative overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-full bg-blue-600"
            />
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                exit={{ opacity: 0, scale: 0.98 }}
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                {/* Sections standardized to bold Tracking-Tight */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      01
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      Logistics
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className={labelBase}>Full Name</label>
                      <div className="relative">
                        <User
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600"
                          size={18}
                        />
                        <input
                          type="text"
                          placeholder="John Doe"
                          className={`${inputBase} pl-14`}
                          required
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className={labelBase}>Bengaluru Locality</label>
                      <div className="relative">
                        <MapPin
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600"
                          size={18}
                        />
                        <input
                          type="text"
                          placeholder="e.g., HSR Layout"
                          className={`${inputBase} pl-14`}
                          required
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 group">
                      <label className={labelBase}>WhatsApp Number</label>
                      <div className="relative">
                        <Phone
                          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600"
                          size={18}
                        />
                        <input
                          type="tel"
                          placeholder="+91 9XXXX XXXXX"
                          className={`${inputBase} pl-14`}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Assessment */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      02
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      Visual Assessment
                    </h3>
                  </div>

                  <div className="group relative border-2 border-dashed border-slate-200 rounded-[2rem] p-10 text-center hover:border-blue-600 hover:bg-blue-50/30 transition-all cursor-pointer">
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      accept="image/*"
                      multiple
                    />
                    <Camera className="text-blue-600 mx-auto mb-4" size={32} />
                    <p className="font-bold uppercase text-[10px] tracking-widest text-slate-900">
                      Snap or Upload Photos
                    </p>
                    <p className="text-[10px] text-slate-600 mt-2 uppercase font-bold tracking-tight">
                      Required for 15-min Quotes
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      03
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      Project Details
                    </h3>
                  </div>
                  <div className="group">
                    <label className={labelBase}>Current Condition</label>
                    <textarea
                      placeholder="Tell us what needs fixing..."
                      rows={4}
                      className={`${inputBase} resize-none`}
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON - Standardized tracking */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="cursor-pointer w-full py-5  bg-slate-950  hover:bg-blue-600 text-white rounded-xl font-bold uppercase text-[10px] tracking-[0.25em] shadow-xl shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    Receive Expert Estimate
                  </button>
                  <p className="text-center text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-8 flex items-center justify-center gap-2">
                    <ShieldCheck size={12} className="text-green-500" /> Secure
                    & Private Quote Request
                  </p>
                </div>
              </motion.form>
            ) : (
              /* SUCCESS STATE */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <CheckCircle2
                  size={48}
                  className="text-green-500 mx-auto mb-4"
                />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Request Received
                </h2>
                <p className="text-slate-700 font-medium max-w-xs mx-auto text-sm">
                  Our master craftsmen are reviewing your details. Expect a
                  WhatsApp estimate within 15 minutes.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-bold uppercase text-[10px] tracking-widest mt-8 hover:underline"
                >
                  Edit Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryQuoteForm;
