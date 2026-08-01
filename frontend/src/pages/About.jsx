import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Factory, Users, Compass, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { TIMELINE, TEAM } from "../data/catalog";
import { SITE } from "../lib/site";

const PILLARS = [
  { icon: Award, title: "Independent", desc: "We don't sell adhesives — we recommend the right ones. No exclusive deals, no quotas." },
  { icon: Factory, title: "Plant-floor proven", desc: "1,200+ trials and validations across India and abroad — not lab theory alone." },
  { icon: Users, title: "Hands-on team", desc: "Senior chemists and field engineers answer your questions directly — no call-centres." },
  { icon: Compass, title: "Lifetime support", desc: "We stay involved long after the first delivery, as your products and lines evolve." },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen" data-testid="about-page">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#1A172B 1px, transparent 1px), linear-gradient(90deg, #1A172B 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="absolute -right-20 top-40 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
        <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="label-eyebrow">About J B KEER</div>
            <h1 className="font-display font-bold text-brand-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-3">
              Forty-five years of saying <span className="text-brand-teal">&ldquo;use this one&rdquo;</span> — and being right.
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#4B4A54] leading-relaxed font-body max-w-2xl">
              J B KEER Adhesive Consultant is an independent adhesives manufacturing and process consulting firm based in Pune, India. We specialise in product development, plant setup and formulation improvement — with {SITE.years}+ years of hands-on experience across {SITE.categories} product categories.
            </p>
            <div className="mt-8 inline-flex items-center gap-4 px-5 py-4 border-l-2 border-brand-teal bg-[#F4F5F7]">
              <span className="font-display italic text-brand-navy text-lg">&ldquo;Born to Bond.&rdquo;</span>
              <span className="text-xs uppercase tracking-[0.22em] text-[#4B4A54]">— Since 1980</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-brand-teal pointer-events-none" />
              <div className="relative bg-[#F4F5F7] p-8 md:p-10 border border-gray-200">
                <img src={SITE.logo} alt="J B KEER" className="h-24 w-24 object-contain" />
                <h3 className="mt-5 font-display font-bold text-2xl text-brand-navy">J B KEER Adhesive Consultant</h3>
                <p className="mt-3 text-sm text-[#4B4A54]">Independent Adhesives Manufacturing & Process Consulting</p>
                <div className="mt-6 pt-6 border-t border-gray-300 space-y-2 text-sm">
                  <div><span className="text-[10px] uppercase tracking-[0.22em] text-brand-teal font-semibold block">Founded</span><span className="font-semibold text-brand-navy">1980 · Pune, India</span></div>
                  <div><span className="text-[10px] uppercase tracking-[0.22em] text-brand-teal font-semibold block mt-3">Contact</span><span className="font-semibold text-brand-navy">{SITE.phone}</span></div>
                  <div><span className="font-semibold text-brand-navy">{SITE.email2}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-[#F4F5F7]" data-testid="timeline-section">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="label-eyebrow">Our Story</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 leading-tight">
              Four and a half decades, one continuous thread.
            </h2>
          </div>

          <div className="mt-14 relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-navy/15 -translate-x-1/2" />
            <div className="space-y-8 md:space-y-16">
              {TIMELINE.map((t, i) => (
                <div key={t.period} data-testid={`timeline-${i}`} className={`grid md:grid-cols-2 gap-6 md:gap-16 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                  <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="bg-white border border-gray-200 p-7 md:p-9 hover:shadow-lg transition-shadow">
                      <div className="font-display font-bold text-brand-teal text-5xl md:text-6xl leading-none tracking-tight">
                        {t.period}
                      </div>
                      <div className="h-px w-12 bg-brand-navy/20 my-5" />
                      <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy">{t.title}</h3>
                      <p className="mt-3 text-sm md:text-base text-[#4B4A54] leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center relative">
                    <span className="w-4 h-4 bg-brand-teal border-4 border-white ring-2 ring-brand-navy/15" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why clients stay */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="label-eyebrow">Why Clients Stay</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 leading-tight">
              Independence isn&apos;t a slogan — it&apos;s the business model.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
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

      {/* Team */}
      <section className="py-20 md:py-28 bg-brand-navy text-white relative overflow-hidden" data-testid="team-section">
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">Leadership</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mt-3 leading-tight">
              Senior chemists and field engineers — not a call centre.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-5xl">
            {TEAM.map((member, i) => (
              <div key={i} data-testid={`team-${i}`} className="bg-brand-navy p-8 md:p-10 hover:bg-[#221E3A] transition-colors">
                <div className="w-16 h-16 bg-brand-teal/15 border border-brand-teal/40 flex items-center justify-center font-display font-bold text-brand-teal text-xl">
                  {member.initials}
                </div>
                <h3 className="mt-6 font-display font-bold text-xl md:text-2xl text-white">{member.name}</h3>
                <p className="mt-2 text-sm text-white/70">{member.role}</p>
              </div>
            ))}
          </div>
          <a href="https://www.linkedin.com/in/j-b-keer-36b65bb6/" target="_blank" rel="noreferrer" data-testid="linkedin-link" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-brand-teal transition-colors">
            <Linkedin className="w-4 h-4" /> Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-x text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy leading-tight max-w-3xl mx-auto">
            Work with an independent bonding partner.
          </h2>
          <Link to="/#contact">
            <Button data-testid="about-cta" className="mt-8 rounded-none bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-7 py-6 text-base">
              Book Consultancy <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
