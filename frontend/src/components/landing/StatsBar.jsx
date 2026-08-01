import { SITE } from "../../lib/site";

const STATS = [
  { value: `${SITE.years}+`, label: "Years of Experience" },
  { value: `${SITE.projects.toLocaleString()}+`, label: "Projects Delivered" },
  { value: `${SITE.categories}`, label: "Product Categories" },
  { value: `${SITE.countries}+`, label: "Countries Served" },
];

export default function StatsBar() {
  return (
    <section data-testid="stats-bar" className="bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border-y border-white/10">
        {STATS.map((s, i) => (
          <div key={i} data-testid={`stat-${i}`} className="py-10 md:py-14 px-4 md:px-8 text-center md:text-left">
            <div className="font-display font-bold text-4xl md:text-5xl tracking-tight text-white">
              {s.value}
            </div>
            <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.2em] text-brand-teal font-semibold">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
