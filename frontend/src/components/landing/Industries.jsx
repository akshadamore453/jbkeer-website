import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "../../data/catalog";

export default function Industries() {
  return (
    <section id="industries" data-testid="industries-section" className="py-20 md:py-32 bg-[#F4F5F7] relative overflow-hidden">
      {/* Chemical factory background — grayscale, 20% opacity */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1920&q=70')",
          filter: "grayscale(100%) contrast(0.95)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#F4F5F7]/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 diagonal-stripes opacity-20 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="label-eyebrow">Product Categories</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 leading-tight">
            {CATEGORIES.length} categories · 100+ formulations.
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#4B4A54] font-body leading-relaxed">
            Click any category to see the full product range. Independent advisory across adhesives, sealants, paints, waterproofing, road marking and more.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-300 border border-gray-300">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              data-testid={`industry-${c.slug}`}
              className="bg-white px-4 py-3 md:p-7 hover:bg-brand-navy transition-colors group flex flex-row md:flex-col md:justify-between md:min-h-[200px] items-center md:items-stretch gap-3 md:gap-0"
            >
              {/* Mobile: horizontal bar with number, name+tagline, arrow */}
              <span className="md:hidden font-display font-bold text-brand-teal text-sm w-6 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0 md:flex-none">
                <div className="hidden md:flex items-start justify-between gap-3">
                  <span className="font-display font-bold text-brand-teal text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-navy group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="mt-0 md:mt-5 font-display font-bold text-sm md:text-xl text-brand-navy group-hover:text-white transition-colors leading-tight">
                  {c.name}
                </h3>
                <p className="mt-0.5 md:mt-2 text-[9px] md:text-xs text-brand-teal group-hover:text-brand-teal font-semibold uppercase tracking-[0.15em] leading-snug line-clamp-1 md:line-clamp-none">
                  {c.tagline}
                </p>
              </div>
              <ArrowRight className="md:hidden w-4 h-4 text-brand-navy group-hover:text-brand-teal flex-shrink-0 transition-colors" />
              <div className="hidden md:block mt-6 text-xs text-[#4B4A54] group-hover:text-white/70 transition-colors font-semibold">
                {c.products.length} formulation{c.products.length > 1 ? "s" : ""} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
