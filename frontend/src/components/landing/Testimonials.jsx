import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../lib/site";

export default function Testimonials() {
  return (
    <section data-testid="testimonials-section" className="py-20 md:py-32 bg-[#F4F5F7]">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="label-eyebrow">Client voices</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 leading-tight">
            What partners say after the trial reports come in.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-300 border border-gray-300">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-white p-8 md:p-10 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <Quote className="w-9 h-9 text-brand-teal" strokeWidth={1.2} />
              <blockquote className="mt-6 font-display text-lg md:text-xl text-brand-navy leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-gray-200">
                <div className="font-semibold text-brand-navy">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#4B4A54] mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
