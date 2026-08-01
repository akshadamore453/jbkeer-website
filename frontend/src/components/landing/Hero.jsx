import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { SITE, HERO_IMAGE } from "../../lib/site";

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" data-testid="hero-section" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-white">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#1A172B 1px, transparent 1px), linear-gradient(90deg, #1A172B 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      {/* Teal accent block */}
      <div className="absolute -right-24 top-32 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-navy/15 rounded-none mb-6">
            <span className="w-1.5 h-1.5 bg-brand-teal" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy">Born to Bond · Est. 1980</span>
          </div>

          <h1 className="font-display font-bold text-brand-navy text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.02] tracking-tight">
            Forty-five years of <span className="text-brand-teal">bonding expertise</span>.
            <br className="hidden md:block" />
            One independent partner.
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-[#4B4A54] leading-relaxed font-body">
            J B KEER is an independent adhesive and construction-chemical consultancy. We help manufacturers,
            contractors and OEMs choose the right bond — backed by {SITE.years}+ years of field experience and {SITE.projects.toLocaleString()}+ delivered projects across {SITE.countries}+ countries.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button
              data-testid="hero-book-consultancy"
              onClick={() => scrollTo('#contact')}
              className="rounded-none bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-7 py-6 text-base group"
            >
              Book Free Consultancy
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              data-testid="hero-view-services"
              onClick={() => scrollTo('#services')}
              variant="outline"
              className="rounded-none border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-7 py-6 text-base font-semibold"
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#4B4A54]">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Independent advisory</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-teal" /> {SITE.categories} product categories</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Pan-India & international</div>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-teal pointer-events-none" />
            <img
              src={HERO_IMAGE}
              alt="Industrial bonding facility"
              className="w-full h-[420px] md:h-[520px] object-cover relative"
              loading="eager"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white p-5 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-teal font-semibold">Trusted by</div>
                  <div className="font-display font-bold text-brand-navy text-2xl mt-1">{SITE.projects.toLocaleString()}+ Projects</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-teal font-semibold">Since</div>
                  <div className="font-display font-bold text-brand-navy text-2xl mt-1">1980</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
