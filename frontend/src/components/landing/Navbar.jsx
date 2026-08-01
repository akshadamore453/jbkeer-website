import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { SITE, NAV_LINKS } from "../../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setOpen(false);
    if (link.section) {
      if (location.pathname !== "/") {
        navigate("/" + link.section);
        // Scroll after route change
        setTimeout(() => {
          const el = document.querySelector(link.section);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      } else {
        const el = document.querySelector(link.section);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(link.href);
    }
  };

  const handleBookConsultancy = () => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/#contact");
      setTimeout(() => {
        const el = document.querySelector("#contact");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="hidden md:block bg-brand-navy text-white">
        <div className="container-x flex items-center justify-between py-2 text-xs font-medium tracking-wide">
          <span className="text-white/80">Independent Adhesive Consultancy · Pune, India · Est. 1980</span>
          <a href={`tel:${SITE.phoneRaw}`} data-testid="topbar-phone" className="flex items-center gap-2 text-white/90 hover:text-brand-teal transition-colors">
            <Phone className="w-3.5 h-3.5" /> {SITE.phone}
          </a>
        </div>
      </div>

      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
          <img src={SITE.logo} alt="J B KEER logo" className="h-11 w-11 md:h-12 md:w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-bold text-base md:text-lg text-brand-navy tracking-tight">J B KEER</div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-brand-teal font-semibold">Adhesive Consultant</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l)}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-teal group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            data-testid="nav-book-consultancy"
            onClick={handleBookConsultancy}
            className="hidden sm:inline-flex rounded-none bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-5 py-5 text-sm"
          >
            Book Consultancy
          </Button>
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-brand-navy"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white" data-testid="mobile-menu">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l)}
                data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                className="text-left py-3 text-base font-semibold text-brand-navy border-b border-gray-100"
              >
                {l.label}
              </button>
            ))}
            <Button
              data-testid="mobile-book-consultancy"
              onClick={handleBookConsultancy}
              className="mt-3 rounded-none bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold"
            >
              Book Consultancy
            </Button>
            <a href={`tel:${SITE.phoneRaw}`} className="mt-2 text-sm text-brand-navy/70 flex items-center gap-2">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
