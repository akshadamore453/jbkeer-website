import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe, Linkedin } from "lucide-react";
import { SITE } from "../../lib/site";
import { CATEGORIES } from "../../data/catalog";

const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/#industries" },
  { label: "Clientele", href: "/clientele" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const topCats = CATEGORIES.slice(0, 6);
  return (
    <footer data-testid="site-footer" className="bg-brand-navy text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="container-x relative grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={SITE.logo} alt="J B KEER" loading="eager" decoding="async" className="h-16 w-16 object-contain bg-white p-1 rounded-sm shadow-sm" style={{ imageRendering: 'auto' }} />
            <div>
              <div className="font-display font-bold text-xl text-white">J B KEER</div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">Adhesive Consultant</div>
            </div>
          </div>
          <p className="mt-6 text-white/70 leading-relaxed text-sm md:text-base max-w-md">
            Independent adhesive and construction-chemical consultancy serving manufacturers, contractors and OEMs since 1980. 45+ years across {SITE.categories} product categories and {SITE.countries}+ countries.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 border border-white/15">
            <span className="w-1.5 h-1.5 bg-brand-teal" />
            <span className="font-display italic text-white text-sm">Born to Bond</span>
          </div>
          <div className="mt-8">
            <a href="https://www.linkedin.com/in/j-b-keer-36b65bb6/" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin" className="inline-flex items-center justify-center w-10 h-10 border border-white/20 hover:border-brand-teal hover:bg-brand-teal transition-colors group">
              <Linkedin className="w-4 h-4 text-white/80 group-hover:text-white" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold mb-5">Navigate</div>
          <ul className="space-y-3">
            {FOOTER_NAV.map((l) => (
              <li key={l.label}>
                <Link to={l.href} data-testid={`footer-link-${l.label.toLowerCase()}`} className="text-white/80 hover:text-brand-teal transition-colors text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold mb-5">Top Categories</div>
          <ul className="space-y-3">
            {topCats.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} data-testid={`footer-cat-${c.slug}`} className="text-white/80 hover:text-brand-teal transition-colors text-sm">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold mb-5">Get in touch</div>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
              <a href={`tel:${SITE.phoneRaw}`} className="text-white/90 hover:text-brand-teal transition-colors">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
              <a href={`mailto:${SITE.email2}`} className="text-white/90 hover:text-brand-teal transition-colors">{SITE.email2}</a>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
              <span className="text-white/90">{SITE.website}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
              <span className="text-white/80 leading-relaxed">{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x relative mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
        <div>© {new Date().getFullYear()} J B KEER Adhesive Consultant. All rights reserved.</div>
        <div className="uppercase tracking-[0.2em]">Made with precision · Pune, India</div>
      </div>
    </footer>
  );
}
