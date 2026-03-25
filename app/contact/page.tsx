"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Navigation,
  ArrowUpRight,
  Camera,
} from "lucide-react";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Fastest Response",
      value: "WhatsApp Support",
      desc: "Send sofa photos for an instant quote",
      link: "https://wa.me/917338331370",
      color: "bg-[#25D366]",
      tag: "Popular",
    },
    {
      icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Call our Expert",
      value: "+91 73383 31370",
      desc: "Mon-Sun, 9am to 8pm",
      link: "tel:+917338331370",
      color: "bg-blue-600",
    },
    {
      icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Email Studio",
      value: "hello@sofarevisit.in",
      desc: "For corporate/hotel inquiries",
      link: "mailto:hello@sofarevisit.in",
      color: "bg-slate-900",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. HEADER - Standard 6xl Hierarchy */}
        <div className="mb-12 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            Connect With The Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-[1.1] mb-8"
          >
            Start Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400">
              Furniture Revival.
            </span>
          </motion.h1>
        </div>

        {/* 2. MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* LEFT: INTERACTIVE CONTACT CARDS */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="group relative flex items-center gap-4 md:gap-6 p-6 md:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)] transition-all duration-500"
              >
                {method.tag && (
                  <span className="absolute top-4 right-8 bg-blue-600 text-white text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-widest">
                    {method.tag}
                  </span>
                )}

                <div
                  className={`${method.color} text-white p-4 md:p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  {method.icon}
                </div>

                <div className="flex-1">
                  <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">
                    {method.title}
                  </p>
                  <h3 className="text-xl md:text-2xl font-black italic tracking-tight group-hover:text-blue-600 transition-colors">
                    {method.value}
                  </h3>
                  <p className="text-[11px] md:text-sm text-slate-700 font-medium mt-1">
                    {method.desc}
                  </p>
                </div>

                <ArrowUpRight className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.a>
            ))}

            {/* LIVE INDICATOR BOX */}
            <div className="p-8 md:p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[50px] group-hover:bg-blue-600/40 transition-all"></div>

              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
                </div>
                <h4 className="font-black uppercase tracking-[0.2em] text-[10px] text-blue-400">
                  Logistics Availability
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Pickup Status
                    </span>
                  </div>
                  <p className="text-lg font-black italic">
                    Active in Bengaluru
                  </p>
                  <p className="text-[10px] text-slate-700">
                    Next available slot:{" "}
                    <span className="text-white">Today, 4 PM</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Camera size={14} />
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
          <div className="order-1 lg:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative rounded-[3rem] overflow-hidden aspect-[4/5] lg:h-[700px] shadow-3xl shadow-slate-200"
            >
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000"
                alt="Studio"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* GLASS ADDRESS CARD */}
              <div className="absolute bottom-6 left-6 right-6 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] text-white">
                <div className="flex items-start gap-5">
                  <div className="bg-blue-600 p-4 rounded-2xl shadow-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-2">
                      Main Studio
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      12th Main Rd, Sector 6, HSR Layout,
                      <br />
                      Bengaluru, Karnataka 560102
                    </p>
                    <a
                      href="https://goo.gl/maps/example"
                      target="_blank"
                      className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-white text-slate-950 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95"
                    >
                      <Navigation size={14} /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
