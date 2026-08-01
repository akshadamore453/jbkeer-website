import { Award, Factory, Users, Compass, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE } from "../../lib/site";

const PILLARS = [
  { icon: Award, title: "Independent", desc: "We don't sell adhesives. We recommend the right ones." },
  { icon: Factory, title: "Plant-floor proven", desc: "1200+ trials and validations across India." },
  { icon: Users, title: "Hands-on team", desc: "Senior chemists and field engineers, not call-centres." },
  { icon: Compass, title: "Lifetime support", desc: "We stay involved long after the first delivery." },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="py-20 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <div className="label-eyebrow">About J B KEER</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 leading-tight">
            Forty-five years of saying &ldquo;use this one&rdquo; — and being right.
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#4B4A54] font-body leading-relaxed">
            From a small consultancy in Pune to a name trusted across India&apos;s industrial heartland, J B KEER has
            stayed independent on purpose. No exclusive distribution deals. No quotas to push. Just objective advice
            backed by {SITE.years} years of formulation and field experience.
          </p>
          <p className="mt-4 text-base md:text-lg text-[#4B4A54] font-body leading-relaxed">
            Our work spans furniture giants, infrastructure contractors, packaging OEMs and footwear majors —
            anywhere two surfaces need to stay together under pressure, heat, time or weather. Across 15+ countries.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/about" data-testid="landing-about-link" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors">
              Read our full story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-8 inline-flex items-center gap-4 px-5 py-4 border-l-2 border-brand-teal bg-[#F4F5F7]">
            <span className="font-display italic text-brand-navy text-lg">&ldquo;Born to Bond.&rdquo;</span>
            <span className="text-xs uppercase tracking-[0.22em] text-[#4B4A54]">— Since 1980</span>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 self-start">
          {PILLARS.map((p, i) => (
            <div key={i} data-testid={`pillar-${i}`} className="bg-white p-7 md:p-9 hover:bg-brand-navy group transition-colors">
              <p.icon className="w-8 h-8 text-brand-teal" strokeWidth={1.5} />
              <h3 className="mt-5 font-display font-bold text-lg md:text-xl text-brand-navy group-hover:text-white transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#4B4A54] group-hover:text-white/80 transition-colors leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
