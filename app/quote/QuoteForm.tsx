'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '@/components/icons'
import { validateIndustryForm, FormData } from '@/utils/formvalidation'

type SubmissionStatus = 'idle' | 'success' | 'error'

const QuoteForm = () => {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>('idle')
  const [isLoading, setIsLoading] = useState(false)
  const [activeErrorField, setActiveErrorField] = useState<string | null>(null)

  const successRef = useRef<HTMLDivElement>(null)
  const errorRef = useRef<HTMLDivElement>(null)
  const formTopRef = useRef<HTMLDivElement>(null)

  const nameRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const serviceRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Sofa Repair',
    condition: '',
    source: 'website_quote_form',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    referrer: '',
    landing_page: '',
    gclid: '',
  })

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData | 'form', string>>
  >({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)
    const ref = typeof document !== 'undefined' ? document.referrer : ''

    // 1. Extract utm_source if it explicitly exists
    let detectedSource = params.get('utm_source')

    // 2. If no utm_source, handle gclid tracking or fallback to standard website form
    if (!detectedSource) {
      if (params.get('gclid')) {
        detectedSource = 'google_ads'
      } else {
        detectedSource = 'website_quote_form'
      }
    }

    if (detectedSource === 'website_quote_form' && ref) {
      try {
        const refUrl = new URL(ref)
        if (refUrl.hostname !== window.location.hostname) {
          detectedSource = `ref: ${refUrl.hostname}`
        }
      } catch (e) {
        detectedSource = 'referral'
      }
    }

    setFormData((prev) => ({
      ...prev,
      source: detectedSource || 'website_quote_form',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      referrer: ref || 'direct',
      gclid: params.get('gclid') || '',
      landing_page: window.location.pathname,
    }))

    if (detectedSource) {
      localStorage.setItem('lead_source', detectedSource)
    }
  }, [])

  // Manage viewport positioning accurately when submission views transition
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (submissionStatus === 'success' || submissionStatus === 'error') {
      timeoutId = setTimeout(() => {
        const targetRef = submissionStatus === 'success' ? successRef : errorRef
        if (targetRef.current) {
          targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }, 100)
    }

    return () => clearTimeout(timeoutId)
  }, [submissionStatus])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target

    // Basic UI restrictions for optimized inputs
    if (name === 'fullName' && /\d/.test(value)) return

    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '').slice(0, 15)
      setFormData((prev) => ({ ...prev, [name]: cleaned }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Reset error messages smoothly as user interacts with fields
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    if (activeErrorField === name) {
      setActiveErrorField(null)
    }
  }

  const handleWhatsApp = () => {
    const message = `Hi, I tried to request a quote for ${formData.serviceType} but the form failed. Can you help me?`
    window.open(
      `https://wa.me/916366921602?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const scrollToField = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return

    const yOffset = -120
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })

    const input = ref.current.querySelector(
      'input, select, textarea',
    ) as HTMLElement
    input?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = validateIndustryForm(formData)

    if (!result.isValid) {
      setErrors(result.errors || {})
      setActiveErrorField(result.firstErrorField || null)

      if (result.firstErrorField === 'fullName') scrollToField(nameRef)
      else if (result.firstErrorField === 'email') scrollToField(emailRef)
      else if (result.firstErrorField === 'phone') scrollToField(phoneRef)
      else if (result.firstErrorField === 'serviceType')
        scrollToField(serviceRef)
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Server error')

      // Secure GTM event push via global window definition safely
      if (typeof window !== 'undefined') {
        const globalWindow = window as any
        globalWindow.dataLayer = globalWindow.dataLayer || []
        globalWindow.dataLayer.push({
          event: 'form_submit',
          form_name: 'quote_form',
          service_type: formData.serviceType,
        })
      }

      setSubmissionStatus('success')
    } catch (error) {
      console.error('Failed to submit form:', error)
      setSubmissionStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const inputBase = (fieldName: keyof FormData) => `
    w-full p-5 bg-slate-50 border-2 rounded-2xl outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300 text-sm
    ${errors[fieldName] ? 'border-red-400 focus:border-red-500 bg-red-50/30' : 'border-slate-100 focus:border-gray-800 focus:bg-white'}
    ${activeErrorField === fieldName ? 'ring-2 ring-red-500 animate-pulse' : ''}
  `

  const labelBase =
    'text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3 block ml-1'

  const ErrorMsg = ({ name }: { name: keyof FormData }) => (
    <AnimatePresence>
      {errors[name] && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="ml-1 mt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-500"
        >
          <Icon name="AlertCircle" size={10} /> {errors[name]}
        </motion.span>
      )}
    </AnimatePresence>
  )

  return (
    <div
      ref={formTopRef}
      className="min-h-screen border-slate-200 bg-slate-50 px-4 py-12 selection:bg-gray-200 md:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-start gap-16 lg:flex-row">
        {/* LEFT COLUMN - Brand Positioning */}
        <div className="w-full space-y-12 lg:sticky lg:top-32 lg:w-[35%]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              <Icon name="Zap" size={12} fill="currentColor" /> Instant
              Estimates
            </div>
            <h1 className="text-2xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl">
              Revive Your <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
                Furniture.
              </span>
            </h1>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-slate-700 md:text-base">
              Bengaluru’s most trusted restoration studio.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                icon: <Icon name="Zap" size={18} />,
                text: 'Free expert advice',
              },
              {
                icon: <Icon name="MessageSquare" size={18} />,
                text: 'WhatsApp Consultation',
              },
              {
                icon: <Icon name="ShieldCheck" size={18} />,
                text: '1-Year Warranty',
              },
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

        {/* RIGHT COLUMN - Lead Engine */}
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
              className="h-full bg-gray-800"
            />
          </div>

          <AnimatePresence mode="wait">
            {submissionStatus === 'idle' && (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
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
                    <div ref={serviceRef} className="group md:col-span-2">
                      <label className={labelBase}>Service Type *</label>
                      <div className="relative">
                        <Icon
                          name="Sofa"
                          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-gray-800"
                          size={18}
                        />
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className={`${inputBase('serviceType')} appearance-none pl-14`}
                        >
                          <option value="Sofa Repair">Sofa Repair</option>
                          <option value="Sofa Upholstery">
                            Sofa Upholstery
                          </option>
                          <option value="Sofa Polishing">Sofa Polishing</option>
                          <option value="Others">Others</option>
                        </select>
                        <Icon
                          name="ChevronDown"
                          className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-300"
                          size={18}
                        />
                      </div>
                      <ErrorMsg name="serviceType" />
                    </div>

                    <div ref={nameRef} className="group">
                      <label className={labelBase}>Full Name *</label>
                      <div className="relative">
                        <Icon
                          name="User"
                          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-gray-800"
                          size={18}
                        />
                        <input
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Rohan Sharma"
                          className={`${inputBase('fullName')} pl-14`}
                        />
                      </div>
                      <ErrorMsg name="fullName" />
                    </div>

                    <div ref={emailRef} className="group">
                      <label className={labelBase}>Email Address *</label>
                      <div className="relative">
                        <Icon
                          name="Mail"
                          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-gray-800"
                          size={18}
                        />
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rohan@gmail.com"
                          className={`${inputBase('email')} pl-14`}
                        />
                      </div>
                      <ErrorMsg name="email" />
                    </div>

                    <div ref={phoneRef} className="group md:col-span-2">
                      <label className={labelBase}>WhatsApp Number *</label>
                      <div className="relative">
                        <Icon
                          name="Phone"
                          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-gray-800"
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
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-6 py-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-xl shadow-gray-800/30 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <Icon name="Loader2" className="animate-spin" />
                    ) : (
                      'Receive Expert Estimate'
                    )}
                  </button>
                </div>
              </motion.form>
            )}

            {submissionStatus === 'success' && (
              <motion.div
                ref={successRef}
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 py-20 text-center"
              >
                <Icon
                  name="CheckCircle2"
                  size={48}
                  className="mx-auto mb-4 text-green-500"
                />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  Request Received
                </h2>
                <p className="mx-auto max-w-xs text-sm font-medium text-slate-700">
                  Expect a WhatsApp estimate within 15 minutes.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmissionStatus('idle')}
                  className="mt-8 cursor-pointer text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:underline"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}

            {submissionStatus === 'error' && (
              <motion.div
                ref={errorRef}
                key="error"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8 py-20 text-center"
              >
                <Icon
                  name="AlertCircle"
                  size={48}
                  className="mx-auto mb-4 text-red-500"
                />
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Submission Failed
                  </h2>
                  <p className="mx-auto max-w-xs text-sm font-medium text-slate-600">
                    Something went wrong on our end. Please try again or reach
                    out directly.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-1 active:scale-95"
                  >
                    <Icon name="MessageSquare" size={16} /> WhatsApp Us
                  </button>
                  <button
                    type="button"
                    onClick={() => (window.location.href = 'tel:+916366921602')}
                    className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-1 active:scale-95"
                  >
                    <Icon name="Phone" size={16} /> Call Support
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmissionStatus('idle')}
                  className="mx-auto mt-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 transition-colors hover:text-slate-900"
                >
                  <Icon name="RefreshCcw" size={12} /> Try Form Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default QuoteForm
