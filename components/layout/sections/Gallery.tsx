import ImageSlider from "@/components/UI/ImageSlider";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Classic Velvet Overhaul",
    description:
      "Full structural repair and premium emerald velvet upholstery.",
    before:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    after:
      "https://images.image-after.com/wp-content/uploads/2021/03/Sofa-Upholstery-Before-After.jpg",
  },
  {
    title: "Teak Wood French Polish",
    description:
      "Removal of deep scratches and water rings with a high-gloss finish.",
    before:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800",
    after:
      "https://www.furnitureclinic.co.uk/wp-content/uploads/2019/11/Wood-Restoration-Before-After.jpg",
  },
  {
    title: "Leather Sectional Refresh",
    description:
      "Leather conditioning and color restoration for a tired sectional.",
    before:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
    after:
      "https://i.pinimg.com/originals/8a/7e/3a/8a7e3a3e6b7d1e8e8e8e8e8e8e8e8e8e.jpg",
  },
  {
    title: "Vintage Armchair Revival",
    description: "Period-accurate fabric replacement and spring tightening.",
    before:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    after:
      "https://www.upholsterygal.com/wp-content/uploads/2020/05/Chair-Before-After.jpg",
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with Luxury Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black tracking-[0.3em] text-[10px] mb-4 block">
              DreamDecore Craftsmanship
            </span>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter leading-[0.9] text-slate-900">
              The <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
                Transformation
              </span>
            </h2>
          </div>
          <p className="text-slate-700 font-medium max-w-sm text-sm md:text-right">
            Slide the white divider on any image to see the 1:1 restoration
            quality we provide for every client.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6 cursor-default"
            >
              {/* Slider Container */}
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]">
                <ImageSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                />
              </div>

              {/* Content */}
              <div className="flex justify-between items-start px-4">
                <div className="space-y-1">
                  <h4 className="text-2xl font-black uppercase tracking-tighter italic text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-[80%]">
                    {project.description}
                  </p>
                </div>

                {/* Micro-Interaction: Project Number */}
                <span className="text-4xl font-black text-slate-100 italic select-none group-hover:text-blue-50 transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 flex flex-col items-center">
          <div className="h-[1px] w-24 bg-slate-200 mb-8" />
          <p className="text-xs font-black uppercase tracking-widest text-slate-600 mb-6">
            Witnessed enough? Let's restore yours.
          </p>
          <Link href="/quote" className="cursor-pointer">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all active:scale-95 shadow-2xl cursor-pointer">
              Start Your Restoration
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
