'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Icon from '@/components/icons'

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Icon name="MessageSquare" className="h-5 w-5 md:h-6 md:w-6" />,
      title: 'Fastest Response',
      value: 'WhatsApp Support',
      desc: 'Send sofa photos for an instant quote',
      link: 'https://wa.me/916366921602',
      color: 'bg-[#25D366]',
      tag: 'Popular',
    },
    {
      icon: <Icon name="Phone" className="h-5 w-5 md:h-6 md:w-6" />,
      title: 'Call our Expert',
      value: '+91 63669 21602',
      desc: 'Sun-Sat, 9am to 8pm',
      link: 'tel:+916366921602',
      color: 'bg-gray-800',
    },
    {
      icon: <Icon name="Mail" className="h-5 w-5 md:h-6 md:w-6" />,
      title: 'Email Studio',
      value: 'hello@sofarevive.com',
      desc: 'For corporate/hotel inquiries',
      link: 'mailto:hello@sofarevive.com',
      color: 'bg-slate-900',
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-white px-4 pb-12 pt-20 text-slate-900 md:px-6 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* 1. HEADER - Standard 6xl Hierarchy */}
        <div className="mb-12 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-600"
          >
            Connect With The Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-2xl font-black uppercase italic leading-[1.1] tracking-tighter sm:text-xs md:text-4xl"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Start Your <br />
            <span className="bg-gradient-to-r from-[#3e3d3d] via-gray-600 to-gray-500 bg-clip-text text-transparent">
              Furniture Revival.
            </span>
          </motion.h1>
        </div>

        {/* 2. MAIN GRID */}
        <div className="grid grid-cols-1 items-start gap-8 md:gap-16 lg:grid-cols-2">
          {/* LEFT: INTERACTIVE CONTACT CARDS */}
          <div className="order-2 space-y-4 md:space-y-6 lg:order-1">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                aria-label={`Contact us via ${method.title}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="group relative flex items-center gap-4 rounded-[2rem] border border-slate-100 border-slate-200 bg-slate-50 p-6 transition-all duration-500 hover:border-gray-200 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)] md:gap-6 md:p-8"
              >
                {method.tag && (
                  <span className="absolute right-8 top-4 rounded-full bg-gray-800 px-3 py-1 text-[8px] font-black uppercase tracking-widest text-white">
                    {method.tag}
                  </span>
                )}

                <div
                  className={`${method.color} rounded-2xl p-4 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 md:p-5`}
                >
                  {method.icon}
                </div>

                <div className="flex-1">
                  <p className="mb-1 text-[9px] font-black uppercase tracking-widest text-slate-600">
                    {method.title}
                  </p>
                  <h3 className="text-xl font-black italic tracking-tight transition-colors group-hover:text-gray-800 md:text-2xl">
                    {method.value}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium text-slate-700 md:text-sm">
                    {method.desc}
                  </p>
                </div>

                <Icon
                  name="ArrowUpRight"
                  className="text-slate-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gray-800"
                />
              </motion.a>
            ))}

            {/* LIVE INDICATOR BOX */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white md:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 bg-gray-800/20 blur-[50px] transition-all group-hover:bg-gray-800/40"></div>

              <div className="mb-8 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-green-500"></div>
                  <div className="relative h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Logistics Availability
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Icon name="Clock" size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Pickup Status
                    </span>
                  </div>
                  <p className="text-lg font-black italic">
                    Active in Bengaluru
                  </p>
                  <p className="text-[10px] text-slate-700">
                    Next available slot:{' '}
                    <span className="text-white">Today, 4 PM</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Icon name="Camera" size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Quote Speed
                    </span>
                  </div>
                  <p className="text-lg font-black italic">&lt; 15 Minutes</p>
                  <p className="text-[10px] text-slate-700">
                    For photo-based inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: MAP & STUDIO IMAGE */}
          <div className="order-1 space-y-6 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="shadow-3xl relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-slate-200 lg:h-[700px]"
            >
              <Image
                src="/images/Vintage-Armchair-after.webp"
                alt="Studio"
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-full w-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* GLASS ADDRESS CARD */}
              <div className="absolute bottom-6 left-6 right-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-white backdrop-blur-2xl">
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-gray-800 p-4 shadow-xl">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2 text-2xl font-black uppercase italic tracking-tighter">
                      Main Studio
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-slate-300">
                      16, behind aqsa Masjid, Rajiv Gandhi Nagar, Muneswara
                      Nagar, Sector 6, Bommanahalli, Gundu Thopu
                      <br />
                      Bengaluru, Karnataka 560068
                    </p>
                    <a
                      href="https://maps.app.goo.gl/4fZyc8EeepfFKXE16"
                      target="_blank"
                      aria-label="Get directions to our main studio on Google Maps"
                      className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-950 shadow-xl transition-all hover:bg-gray-800 hover:text-white active:scale-95"
                      rel="noreferrer"
                    >
                      <Icon name="Navigation" size={14} /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
