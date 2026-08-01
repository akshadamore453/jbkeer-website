import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../../lib/site";

export default function Services() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="services" data-testid="services-section" className="py-20 md:py-32 bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="label-eyebrow">What we do</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 leading-tight">
            Bonding solutions, specified by people who&apos;ve seen it all.
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#4B4A54] font-body leading-relaxed">
            Six core practice areas — backed by independent product evaluation, plant-floor trials and lifetime supplier support.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {SERVICES.map((s, i) => (
            <button
              key={s.key}
              data-testid={`service-card-${s.key}`}
              onClick={() => scrollTo('#contact')}
              className="group text-left bg-white p-8 md:p-10 hover:bg-brand-navy transition-colors duration-300 relative overflow-hidden"
            >
              <div className="aspect-[16/10] w-full overflow-hidden mb-6 border border-gray-200 group-hover:border-brand-teal transition-colors">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-teal font-semibold mb-2">
                    0{i + 1} · Practice Area
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-[#4B4A54] group-hover:text-white/80 transition-colors leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-brand-navy group-hover:text-brand-teal flex-shrink-0 group-hover:rotate-12 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
