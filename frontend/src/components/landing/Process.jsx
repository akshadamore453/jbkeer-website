import { PROCESS } from "../../lib/site";

export default function Process() {
  return (
    <section id="process" data-testid="process-section" className="py-20 md:py-32 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">How we work</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-3 leading-tight">
            A four-step engagement, refined over four decades.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {PROCESS.map((p) => (
            <div key={p.step} data-testid={`process-step-${p.step}`} className="bg-brand-navy p-8 md:p-10 hover:bg-[#221E3A] transition-colors group">
              <div className="font-display font-bold text-6xl md:text-7xl text-brand-teal leading-none">
                {p.step}
              </div>
              <div className="mt-6 h-px w-12 bg-white/30 group-hover:w-20 group-hover:bg-brand-teal transition-all duration-500" />
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mt-6">{p.title}</h3>
              <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed font-body">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
