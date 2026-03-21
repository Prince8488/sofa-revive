"use client";

import Hero from "@/components/layout/sections/Hero";
import OurServices from "@/components/layout/sections/OurServices";
import Sticky from "@/components/layout/sections/Sticky";
import Testimonials from "@/components/layout/sections/Testimonials";
import WhyChooseUS from "@/components/layout/sections/WhyChooseUs";

export default function UrbanSofaMobile() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100 pb-20 md:pb-0">
      <Hero />
      <OurServices />
      <WhyChooseUS />
      <Testimonials />
      <Sticky />
    </div>
  );
}
