"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  ShieldCheck,
  Zap,
  MessageSquare,
  User,
  Phone,
  CheckCircle2,
  Mail,
  AlertCircle,
} from "lucide-react";
import { validateIndustryForm } from "@/utils/formvalidation";

const IndustryQuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for Scroll-to-Error
  const nameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    condition: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Strict typing behavior: block digits in name, block non-digits in phone
    if (name === "fullName" && /\d/.test(value)) return;
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateIndustryForm(formData);

    if (result.isValid) {
      setIsSubmitted(true);
    } else {
      setErrors(result.errors);

      // Strict Scroll-to-Error Logic
      const scrollOpts: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "center",
      };
      if (result.firstErrorField === "fullName")
        nameRef.current?.scrollIntoView(scrollOpts);
      else if (result.firstErrorField === "email")
        emailRef.current?.scrollIntoView(scrollOpts);
      else if (result.firstErrorField === "phone")
        phoneRef.current?.scrollIntoView(scrollOpts);
    }
  };

  const inputBase = (fieldName: string) => `
    w-full p-5 bg-slate-50 border-2 rounded-2xl outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300 text-sm
    ${errors[fieldName] ? "border-red-400 focus:border-red-500 bg-red-50/30" : "border-slate-100 focus:border-blue-600 focus:bg-white"}
  `;

  const labelBase =
    "text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3 block ml-1";

  const ErrorMsg = ({ name }: { name: string }) => (
    <AnimatePresence>
      {errors[name] && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] text-red-500 font-bold mt-2 ml-1 flex items-center gap-1 uppercase tracking-wider"
        >
          <AlertCircle size={10} /> {errors[name]}
        </motion.span>
      )}
    </AnimatePresence>
  );

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
            <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-blue-100">
              <Zap size={12} fill="currentColor" /> Instant Estimates
            </div>
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

          <div className="space-y-4">
            {[
              { icon: <Zap size={18} />, text: "Free expert advice" },
              {
                icon: <MessageSquare size={18} />,
                text: "WhatsApp Consultation",
              },
              { icon: <ShieldCheck size={18} />, text: "1-Year Warranty" },
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
                noValidate
              >
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
                    {/* NAME FIELD */}
                    <div ref={nameRef} className="group">
                      <label className={labelBase}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${errors.fullName ? "text-red-400" : "text-slate-300 group-focus-within:text-blue-600"}`}
                          size={18}
                        />
                        <input
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`${inputBase("fullName")} pl-14`}
                        />
                      </div>
                      <ErrorMsg name="fullName" />
                    </div>

                    {/* EMAIL FIELD */}
                    <div ref={emailRef} className="group">
                      <label className={labelBase}>
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail
                          className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? "text-red-400" : "text-slate-300 group-focus-within:text-blue-600"}`}
                          size={18}
                        />
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@gmail.com"
                          className={`${inputBase("email")} pl-14`}
                        />
                      </div>
                      <ErrorMsg name="email" />
                    </div>

                    {/* PHONE FIELD */}
                    <div ref={phoneRef} className="md:col-span-2 group">
                      <label className={labelBase}>
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone
                          className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${errors.phone ? "text-red-400" : "text-slate-300 group-focus-within:text-blue-600"}`}
                          size={18}
                        />
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="9XXXX XXXXX"
                          className={`${inputBase("phone")} pl-14`}
                        />
                      </div>
                      <ErrorMsg name="phone" />
                    </div>
                  </div>
                </div>

                {/* VISUAL ASSESSMENT (Optional) */}
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
                      onChange={(e) =>
                        e.target.files && setImages(Array.from(e.target.files))
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      accept="image/*"
                      multiple
                    />
                    <Camera className="text-blue-600 mx-auto mb-4" size={32} />
                    <p className="font-bold uppercase text-[10px] tracking-widest text-slate-900">
                      Snap or Upload Photos
                    </p>
                    <p className="text-[10px] text-slate-600 mt-2 uppercase font-bold tracking-tight">
                      Optional
                    </p>
                  </div>
                </div>

                {/* PROJECT DETAILS (Optional) */}
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
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      placeholder="Tell us what needs fixing..."
                      rows={4}
                      className={`${inputBase("condition")} resize-none`}
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="cursor-pointer w-full py-5 bg-slate-950 hover:bg-blue-600 text-white rounded-xl font-bold uppercase text-[10px] tracking-[0.25em] shadow-xl shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
                  className="text-blue-600 font-bold uppercase text-[10px] tracking-widest mt-8 hover:underline cursor-pointer"
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
