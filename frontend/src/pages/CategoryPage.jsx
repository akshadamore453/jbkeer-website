import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Package } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { CATEGORIES, findCategory } from "../data/catalog";

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const category = findCategory(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="container-x pt-40 pb-20 text-center">
          <h1 className="font-display font-bold text-3xl text-brand-navy">Category not found</h1>
          <Link to="/#industries" className="mt-6 inline-block text-brand-teal font-semibold">← Back to categories</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherCats = CATEGORIES.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <div className="bg-white min-h-screen" data-testid={`category-page-${slug}`}>
      <Navbar />

      {/* Hero band */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#1A172B 1px, transparent 1px), linear-gradient(90deg, #1A172B 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="container-x relative">
          <button onClick={() => navigate(-1)} data-testid="back-btn" className="flex items-center gap-2 text-sm font-semibold text-brand-navy/70 hover:text-brand-teal mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="label-eyebrow">Product Category</div>
          <h1 className="font-display font-bold text-brand-navy text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-3 max-w-4xl">
            {category.name}
          </h1>
          <p className="mt-4 text-sm md:text-base uppercase tracking-[0.22em] text-brand-teal font-semibold">
            {category.tagline}
          </p>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-[#4B4A54] leading-relaxed font-body">
            {category.blurb}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/#contact">
              <Button data-testid="cat-book-consultancy" className="rounded-none bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-6 py-5">
                Get Formulation Advice <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/#industries">
              <Button variant="outline" className="rounded-none border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-5 font-semibold">
                Explore other categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="pb-20 md:pb-28 bg-[#F4F5F7]">
        <div className="container-x pt-14 md:pt-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="label-eyebrow">Formulations available</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mt-2">
                {category.products.length} product{category.products.length > 1 ? "s" : ""} in this category
              </h2>
            </div>
            <div className="text-sm text-[#4B4A54]">Independent advisory · Not a distributor</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-300 border border-gray-300">
            {category.products.map((p, i) => (
              <article key={i} data-testid={`product-${i}`} className="bg-white p-7 md:p-9 hover:bg-brand-navy group transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-brand-navy/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal group-hover:border-brand-teal transition-colors">
                    <Package className="w-4 h-4 text-brand-navy group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-brand-teal font-semibold">
                      {String(i + 1).padStart(2, "0")} · Formulation
                    </div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-brand-navy mt-1.5 group-hover:text-white transition-colors leading-snug">
                      {p.name}
                    </h3>
                    {p.desc && (
                      <p className="mt-3 text-sm md:text-base text-[#4B4A54] group-hover:text-white/80 transition-colors leading-relaxed">
                        {p.desc}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Value badges */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-300 border border-gray-300">
            {[
              { title: "Independent Advisory", desc: "No exclusive brand tie-ups — recommendations are yours to own." },
              { title: "Plant-Floor Trials", desc: "Every specification validated on your substrates before rollout." },
              { title: "Turnkey Support", desc: "From formulation to plant setup, machinery and lifetime advisory." },
            ].map((b, i) => (
              <div key={i} className="bg-white p-7">
                <CheckCircle2 className="w-6 h-6 text-brand-teal" strokeWidth={1.5} />
                <h4 className="font-display font-bold text-lg text-brand-navy mt-4">{b.title}</h4>
                <p className="mt-2 text-sm text-[#4B4A54] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + related */}
      <section className="py-20 md:py-28 bg-brand-navy text-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">Ready to specify?</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 leading-tight">
              Tell us about your substrate, volume and current issues.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-lg">
              A senior consultant will reach out within one business day with an independent recommendation, not a sales pitch.
            </p>
            <Link to="/#contact">
              <Button data-testid="cat-bottom-cta" className="mt-7 rounded-none bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-7 py-6 text-base">
                Book Consultancy <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold mb-5">Related categories</div>
            <div className="grid gap-px bg-white/10 border border-white/10">
              {otherCats.map((c) => (
                <Link
                  key={c.slug}
                  to={`/category/${c.slug}`}
                  data-testid={`related-${c.slug}`}
                  className="bg-brand-navy p-5 hover:bg-[#221E3A] transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="font-display font-bold text-white text-lg">{c.name}</div>
                    <div className="text-xs text-white/60 mt-1">{c.tagline}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
