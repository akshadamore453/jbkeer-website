import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, MapPin, ArrowRight, Building2 } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { COUNTRIES, INDIAN_REGIONS } from "../data/catalog";
import { SITE } from "../lib/site";

export default function Clientele() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const abroad = COUNTRIES.filter((c) => c.name !== "India");
  const totalCities = INDIAN_REGIONS.reduce((sum, r) => sum + r.cities.length, 0);

  return (
    <div className="bg-white min-h-screen" data-testid="clientele-page">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#1A172B 1px, transparent 1px), linear-gradient(90deg, #1A172B 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="container-x relative">
          <div className="label-eyebrow">Clientele</div>
          <h1 className="font-display font-bold text-brand-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-3 max-w-4xl">
            Projects delivered across <span className="text-brand-teal">{COUNTRIES.length} countries</span> and {totalCities}+ cities.
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-[#4B4A54] leading-relaxed font-body">
            Over 45 years, J B KEER has commissioned adhesive and construction-chemical projects for manufacturers, contractors and OEMs — from the Maharashtra industrial belt to the Gulf, East Africa and Central Asia.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-300 border border-gray-300 max-w-4xl">
            {[
              { v: `${SITE.years}+`, l: "Years of practice" },
              { v: `${SITE.projects.toLocaleString()}+`, l: "Projects delivered" },
              { v: `${COUNTRIES.length}`, l: "Countries served" },
              { v: `${totalCities}+`, l: "Indian cities" },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6">
                <div className="font-display font-bold text-3xl md:text-4xl text-brand-navy">{s.v}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-brand-teal font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International */}
      <section className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="container-x relative">
          <div className="flex items-center gap-3 mb-3">
            <Globe className="w-5 h-5 text-brand-teal" />
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">International</div>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Trusted by manufacturers across four continents.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {abroad.map((c, i) => (
              <div key={c.name} data-testid={`country-${i}`} className="bg-brand-navy p-7 md:p-8 hover:bg-[#221E3A] transition-colors">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-brand-teal" />
                  <h3 className="font-display font-bold text-lg md:text-xl text-white">{c.name}</h3>
                </div>
                <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">{c.products}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India */}
      <section className="py-20 md:py-28 bg-[#F4F5F7]">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-brand-teal" />
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">Pan-India</div>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy leading-tight">
                From Pune HQ to every industrial corridor.
              </h2>
              <p className="mt-5 text-[#4B4A54] leading-relaxed">
                Consulting engagements across 13 Indian states and {totalCities}+ cities — with the deepest presence in Maharashtra, Delhi NCR, Gujarat and the industrial belts of Karnataka, Tamil Nadu and Andhra Pradesh.
              </p>
              <Link to="/#contact">
                <Button data-testid="clientele-cta" className="mt-8 rounded-none bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-6 py-5">
                  Book Consultancy <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-300 border border-gray-300">
                {INDIAN_REGIONS.map((r, i) => (
                  <div key={r.region} data-testid={`region-${i}`} className="bg-white p-6">
                    <div className="flex items-center gap-2.5">
                      <Building2 className="w-4 h-4 text-brand-teal" />
                      <h3 className="font-display font-bold text-brand-navy text-lg">{r.region}</h3>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {r.cities.map((city) => (
                        <span key={city} className="px-2.5 py-1 bg-[#F4F5F7] text-[11px] font-semibold text-brand-navy uppercase tracking-wider">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
