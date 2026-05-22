'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '@/components/icons'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ModalFormData {
  fullName: string
  phone: string
  email: string
  notes: string
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [activeErrorField, setActiveErrorField] = useState<string | null>(null)

  const modalContentRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState<ModalFormData>({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  })

  const [errors, setErrors] = useState<
    Partial<Record<keyof ModalFormData, string>>
  >({})

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setSubmissionStatus('idle')
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        notes: '',
      })
      setErrors({})
      setActiveErrorField(null)
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target

    if (name === 'fullName' && /\d/.test(value)) return

    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '').slice(0, 15)
      setFormData((prev) => ({ ...prev, [name]: cleaned }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    if (errors[name as keyof ModalFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
    if (activeErrorField === name) {
      setActiveErrorField(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Partial<Record<keyof ModalFormData, string>> = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required'

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = 'Enter a valid phone number'
    }

    // Strict Mandatory Email Validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstField = Object.keys(newErrors)[0] as keyof ModalFormData
      setActiveErrorField(firstField)
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'website_modal_popup' }),
      })

      if (!response.ok) throw new Error('Network error')

      setSubmissionStatus('success')
    } catch (err) {
      console.error(err)
      setSubmissionStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const inputBase = (fieldName: keyof ModalFormData) => `
    w-full p-4 bg-slate-50 border-slate-200 border-2 rounded-2xl outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300 text-sm
    ${errors[fieldName] ? 'border-red-400 focus:border-red-500 bg-red-50/30' : 'border-slate-100 focus:border-gray-800 focus:bg-white'}
    ${activeErrorField === fieldName ? 'ring-2 ring-red-500 animate-pulse' : ''}
  `
  const labelBase =
    'text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-2 block ml-1'

  const ErrorMsg = ({ name }: { name: keyof ModalFormData }) => (
    <AnimatePresence>
      {errors[name] && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="ml-1 mt-1.5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-500"
        >
          <Icon name="AlertCircle" size={10} /> {errors[name]}
        </motion.span>
      )}
    </AnimatePresence>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center bg-slate-900/50 px-0 backdrop-blur-sm sm:items-center sm:px-4">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalContentRef}
            className="relative z-10 flex h-[85vh] w-full flex-col overflow-hidden rounded-t-[2.5rem]
                       border border-t-slate-100 bg-white
                       shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] sm:h-auto sm:max-h-[90vh]
                       sm:max-w-lg sm:rounded-[2.5rem] sm:border-white"
            initial={{
              y:
                typeof window !== 'undefined' && window.innerWidth < 640
                  ? '100%'
                  : '15%',
              scale:
                typeof window !== 'undefined' && window.innerWidth < 640
                  ? 1
                  : 0.95,
              opacity: 0,
            }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{
              y:
                typeof window !== 'undefined' && window.innerWidth < 640
                  ? '100%'
                  : '10%',
              scale:
                typeof window !== 'undefined' && window.innerWidth < 640
                  ? 1
                  : 0.95,
              opacity: 0,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            {/* Top Micro Deco Accent Bar for Mobile Pull Drawer Feel */}
            <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-slate-200 sm:hidden" />

            {/* Static Tracking Top Header Progress Bar */}
            <div className="absolute left-0 top-0 z-30 h-1.5 w-full bg-slate-50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5 }}
                className="h-full bg-gray-800"
              />
            </div>

            {/* Fixed Modal Header Container */}
            <div className="relative z-20 flex shrink-0 items-start justify-between bg-white px-6 pb-4 pt-8 md:px-10 md:pt-10">
              <div>
                <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  <Icon name="Zap" size={10} fill="currentColor" /> Direct
                  Priority Booking
                </div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  Schedule Estimate
                </h2>
              </div>

              <button
                onClick={onClose}
                type="button"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-transform hover:scale-105 hover:text-slate-800 active:scale-95"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            {/* Scrollable Form Body Shell */}
            <div className="flex-1 overflow-y-auto px-6 pb-10 pt-2 md:px-10 md:pb-10">
              <AnimatePresence mode="wait">
                {submissionStatus === 'idle' && (
                  <motion.form
                    key="modal-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Section 01: Contact Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[8px] font-bold text-white">
                          01
                        </span>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          Your Info
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {/* Full Name Field */}
                        <div className="group">
                          <label className={labelBase}>Full Name *</label>
                          <div className="relative">
                            <Icon
                              name="User"
                              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-gray-800"
                              size={16}
                            />
                            <input
                              name="fullName"
                              type="text"
                              value={formData.fullName}
                              onChange={handleChange}
                              placeholder="Rohan Sharma"
                              className={`${inputBase('fullName')} pl-12`}
                            />
                          </div>
                          <ErrorMsg name="fullName" />
                        </div>

                        {/* WhatsApp Number Field */}
                        <div className="group">
                          <label className={labelBase}>WhatsApp Number *</label>
                          <div className="relative">
                            <Icon
                              name="Phone"
                              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-gray-800"
                              size={16}
                            />
                            <input
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="9XXXX XXXXX"
                              className={`${inputBase('phone')} pl-12`}
                            />
                          </div>
                          <ErrorMsg name="phone" />
                        </div>

                        {/* Mandatory Email Address Field */}
                        <div className="group">
                          <label className={labelBase}>Email Address *</label>
                          <div className="relative">
                            <Icon
                              name="Mail"
                              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-gray-800"
                              size={16}
                            />
                            <input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="rohan@gmail.com"
                              className={`${inputBase('email')} pl-12`}
                            />
                          </div>
                          <ErrorMsg name="email" />
                        </div>
                      </div>
                    </div>

                    {/* Section 02: Logistics and Options */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[8px] font-bold text-white">
                          02
                        </span>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          Job Profile
                        </h3>
                      </div>

                      <div className="group">
                        <label className={labelBase}>Notes / Condition</label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Describe damage or leather/fabric upgrade targets..."
                          rows={3}
                          className={`${inputBase('notes')} resize-none`}
                        />
                      </div>
                    </div>

                    {/* CTA Actions Group */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-lg transition-all duration-300 hover:bg-gray-800 disabled:opacity-70"
                      >
                        {isLoading ? (
                          <Icon name="Loader2" className="animate-spin" />
                        ) : (
                          'Confirm Priority Request'
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* Success Lifecycle Screen Layer */}
                {submissionStatus === 'success' && (
                  <motion.div
                    key="modal-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4 py-12 text-center"
                  >
                    <Icon
                      name="CheckCircle2"
                      size={44}
                      className="mx-auto text-green-500"
                    />
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                      Priority Recorded
                    </h2>
                    <p className="mx-auto max-w-xs text-xs font-medium leading-relaxed text-slate-600">
                      Our Studio Lead will contact you on WhatsApp within 15
                      minutes with initial estimates.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 inline-block rounded-xl bg-slate-100 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-700 transition-colors hover:bg-slate-200"
                    >
                      Done
                    </button>
                  </motion.div>
                )}

                {/* Error Lifecycle Screen Layer */}
                {submissionStatus === 'error' && (
                  <motion.div
                    key="modal-error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6 py-8 text-center"
                  >
                    <div className="space-y-3">
                      <Icon
                        name="AlertCircle"
                        size={44}
                        className="mx-auto text-red-500"
                      />
                      <h2 className="text-xl font-bold tracking-tight text-slate-900">
                        Submission Interrupted
                      </h2>
                      <p className="mx-auto max-w-xs text-xs font-medium leading-relaxed text-slate-500">
                        We couldn't submit your form automatically due to a
                        network lag. Connect with our expert team instantly via
                        alternative routes below:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 pt-2">
                      <a
                        href="https://wa.me/916366921602?text=Hi%20SofaRevive,%20I'm%20looking%20for%20a%20sofa%20repair%20estimate."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-emerald-700"
                      >
                        <Icon name="MessageSquare" size={14} /> Chat on WhatsApp
                      </a>

                      <a
                        href="tel:+916366921602"
                        className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 transition-all hover:bg-slate-50"
                      >
                        <Icon name="Phone" size={14} /> Call Support Team
                      </a>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setSubmissionStatus('idle')}
                        className="text-[10px] font-bold uppercase tracking-wider text-slate-400 underline transition-colors hover:text-slate-600"
                      >
                        Go back to form
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default QuoteModal
