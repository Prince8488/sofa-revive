'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck,
  Zap,
  MessageSquare,
  User,
  Phone,
  CheckCircle2,
  Mail,
  AlertCircle,
  Loader2,
  ChevronDown,
  Sofa,
} from 'lucide-react'
import { validateIndustryForm, FormData } from '@/utils/formvalidation'

const IndustryQuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Refs for Scroll-to-Error
  const nameRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const serviceRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Sofa Upholstery',
    condition: '',
  })
  // const [images, setImages] = useState<File[]>([])
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  )

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target

    // Strict typing behavior: block digits in name, block non-digits in phone
    if (name === 'fullName' && /\d/.test(value)) return
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '').slice(0, 10)
      setFormData({ ...formData, [name]: cleaned })
    } else {
      setFormData({ ...formData, [name]: value })
    }

    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = validateIndustryForm(formData)

    if (result.isValid) {
      setIsLoading(true)
      console.log('Form Data:', formData)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsLoading(false)
      setIsSubmitted(true)
    } else {
      setErrors(result.errors)

      // Strict Scroll-to-Error Logic
      const scrollOpts: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'center',
      }
      if (result.firstErrorField === 'fullName')
        nameRef.current?.scrollIntoView(scrollOpts)
      else if (result.firstErrorField === 'email')
        emailRef.current?.scrollIntoView(scrollOpts)
      else if (result.firstErrorField === 'phone')
        phoneRef.current?.scrollIntoView(scrollOpts)
      else if (result.firstErrorField === 'serviceType') {
        serviceRef.current?.scrollIntoView(scrollOpts)
      }
    }
  }

  const inputBase = (fieldName: keyof FormData) => `
    w-full p-5 bg-slate-50 border-2 rounded-2xl outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300 text-sm
    ${errors[fieldName] ? 'border-red-400 focus:border-red-500 bg-red-50/30' : 'border-slate-100 focus:border-blue-600 focus:bg-white'}
  `

  const labelBase =
    'text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3 block ml-1'

  const ErrorMsg = ({ name }: { name: keyof FormData }) => (
    <AnimatePresence>
      {errors[name] && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="ml-1 mt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-500"
          aria-live="polite"
        >
          <AlertCircle size={10} /> {errors[name]}
        </motion.span>
      )}
    </AnimatePresence>
  )

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 selection:bg-blue-100 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-16 lg:flex-row">
        {/* LEFT: THE MOTIVATION */}
        <div className="w-full space-y-12 lg:sticky lg:top-32 lg:w-[35%]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              <Zap size={12} fill="currentColor" /> Instant Estimates
            </div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
              Revive Your <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Furniture.
              </span>
            </h1>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-700 md:text-base">
              Bengaluru’s most trusted restoration studio. Get a line-item
              estimate within 15 minutes of sharing photos.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              { icon: <Zap size={18} />, text: 'Free expert advice' },
              {
                icon: <MessageSquare size={18} />,
                text: 'WhatsApp Consultation',
              },
              { icon: <ShieldCheck size={18} />, text: '1-Year Warranty' },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm"
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
          className="relative w-full overflow-hidden rounded-[2.5rem] border border-white bg-white p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] md:p-16 lg:w-[65%]"
        >
          <div className="absolute left-0 top-0 h-1.5 w-full bg-slate-50">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
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
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                      01
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      Logistics
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* SERVICE TYPE FIELD */}
                    <div ref={serviceRef} className="group md:col-span-2">
                      <label className={labelBase}>
                        Service Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Sofa
                          className={`pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${errors.serviceType ? 'text-red-400' : 'text-slate-300 group-focus-within:text-blue-600'}`}
                          size={18}
                        />
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className={`${inputBase(
                            'serviceType',
                          )} appearance-none pl-14`}
                        >
                          <option>Sofa Upholstery</option>
                          <option>Sofa Repair</option>
                          <option>Sofa Polishing</option>
                        </select>
                        <ChevronDown
                          className={`pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 transition-colors ${errors.serviceType ? 'text-red-400' : 'text-slate-300'}`}
                          size={18}
                        />
                      </div>
                      <ErrorMsg name="serviceType" />
                    </div>

                    {/* NAME FIELD */}
                    <div ref={nameRef} className="group">
                      <label className={labelBase}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          className={`pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${errors.fullName ? 'text-red-400' : 'text-slate-300 group-focus-within:text-blue-600'}`}
                          size={18}
                        />
                        <input
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`${inputBase('fullName')} pl-14`}
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
                          className={`pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? 'text-red-400' : 'text-slate-300 group-focus-within:text-blue-600'}`}
                          size={18}
                        />
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@gmail.com"
                          className={`${inputBase('email')} pl-14`}
                        />
                      </div>
                      <ErrorMsg name="email" />
                    </div>

                    {/* PHONE FIELD */}
                    <div ref={phoneRef} className="group md:col-span-2">
                      <label className={labelBase}>
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone
                          className={`pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${errors.phone ? 'text-red-400' : 'text-slate-300 group-focus-within:text-blue-600'}`}
                          size={18}
                        />
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="9XXXX XXXXX"
                          className={`${inputBase('phone')} pl-14`}
                        />
                      </div>
                      <ErrorMsg name="phone" />
                    </div>
                  </div>
                </div>

                {/* VISUAL ASSESSMENT (Optional) */}
                {/* <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                      02
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">
                      Visual Assessment
                    </h3>
                  </div>
                  <div className="group relative cursor-pointer rounded-[2rem] border-2 border-dashed border-slate-200 p-10 text-center transition-all hover:border-blue-600 hover:bg-blue-50/30">
                    <input
                      type="file"
                      onChange={(e) =>
                        e.target.files && setImages(Array.from(e.target.files))
                      }
                      className="absolute inset-0 cursor-pointer opacity-0"
                      accept="image/*"
                      multiple
                    />
                    <Camera className="mx-auto mb-4 text-blue-600" size={32} />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-900">
                      Snap or Upload Photos
                    </p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-tight text-slate-600">
                      {images.length > 0
                        ? `${images.length} image(s) selected`
                        : 'Optional'}
                    </p>
                  </div>
                </div> */}

                {/* PROJECT DETAILS (Optional) */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                      02
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
                      className={`${inputBase('condition')} resize-none`}
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      'Receive Expert Estimate'
                    )}
                  </button>
                  <p className="mt-8 flex items-center justify-center gap-2 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
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
                className="space-y-6 py-20 text-center"
              >
                <CheckCircle2
                  size={48}
                  className="mx-auto mb-4 text-green-500"
                />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Request Received
                </h2>
                <p className="mx-auto max-w-xs text-sm font-medium text-slate-700">
                  Our master craftsmen are reviewing your details. Expect a
                  WhatsApp estimate within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setErrors({})
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      serviceType: 'Sofa Upholstery',
                      condition: '',
                    })
                  }}
                  className="mt-8 cursor-pointer text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:underline"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default IndustryQuoteForm
