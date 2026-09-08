import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Mail, MapPin, Phone, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { SITE, PROJECT_TYPES } from "../../lib/site";

const BACKEND_URL = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/$/, "");
const API = `${BACKEND_URL}/api`;


const initial = { name: "", email: "", phone: "", company: "", project_type: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (form.phone.replace(/\D/g, "").length < 6) e.phone = "Valid phone required";
    if (!form.project_type) e.project_type = "Select a project type";
    if (form.message.trim().length < 5) e.message = "Tell us a bit more (min 5 chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/leads`, form);
      setSubmitted(true);
      setForm(initial);
      toast.success("Thank you — we'll be in touch within 1 business day.");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  const set = (k) => (e) => setForm({ ...form, [k]: e?.target ? e.target.value : e });

  return (
    <section id="contact" data-testid="contact-section" className="py-20 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        {/* Left side info */}
        <div className="lg:col-span-5">
          <div className="label-eyebrow">Book a consultancy</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mt-3 leading-tight">
            Tell us about the bond you need to build.
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#4B4A54] font-body leading-relaxed">
            Share a few details and a senior consultant will get in touch within one business day —
            no obligation, no sales pitch. Site visits available across Maharashtra and PAN India for larger projects.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`tel:${SITE.phoneRaw}`} data-testid="contact-phone" className="flex items-start gap-4 group">
              <span className="w-11 h-11 border border-brand-navy/15 flex items-center justify-center group-hover:bg-brand-teal group-hover:border-brand-teal transition-colors">
                <Phone className="w-4 h-4 text-brand-navy group-hover:text-white" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">Phone</div>
                <div className="font-semibold text-brand-navy mt-0.5">{SITE.phone}</div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} data-testid="contact-email" className="flex items-start gap-4 group">
              <span className="w-11 h-11 border border-brand-navy/15 flex items-center justify-center group-hover:bg-brand-teal group-hover:border-brand-teal transition-colors">
                <Mail className="w-4 h-4 text-brand-navy group-hover:text-white" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">Email</div>
                <div className="font-semibold text-brand-navy mt-0.5">{SITE.email}</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 border border-brand-navy/15 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-brand-navy" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">Office</div>
                <div className="font-semibold text-brand-navy mt-0.5 leading-snug max-w-xs">{SITE.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 border border-brand-navy/15 flex items-center justify-center">
                <Globe className="w-4 h-4 text-brand-navy" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-teal font-semibold">Web</div>
                <div className="font-semibold text-brand-navy mt-0.5">{SITE.website}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="lg:col-span-7">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-brand-teal pointer-events-none hidden md:block" />
            <div className="relative bg-[#F4F5F7] p-7 md:p-12 border border-gray-200">
              {submitted ? (
                <div data-testid="form-success" className="py-10 text-center">
                  <CheckCircle2 className="w-14 h-14 text-brand-teal mx-auto" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display font-bold text-2xl md:text-3xl text-brand-navy">Request received</h3>
                  <p className="mt-3 text-[#4B4A54] max-w-md mx-auto">
                    Thank you. A senior consultant from J B KEER will reach out within one business day.
                  </p>
                  <Button
                    data-testid="form-reset"
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-8 rounded-none border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  >
                    Submit another enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate data-testid="consultancy-form">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name *" error={errors.name}>
                      <Input data-testid="form-name" value={form.name} onChange={set("name")} placeholder="Your name" className="rounded-none bg-white" />
                    </Field>
                    <Field label="Email *" error={errors.email}>
                      <Input data-testid="form-email" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className="rounded-none bg-white" />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Phone *" error={errors.phone}>
                      <Input data-testid="form-phone" value={form.phone} onChange={set("phone")} placeholder="+91 ..." className="rounded-none bg-white" />
                    </Field>
                    <Field label="Company">
                      <Input data-testid="form-company" value={form.company} onChange={set("company")} placeholder="Optional" className="rounded-none bg-white" />
                    </Field>
                  </div>
                  <Field label="Project Type *" error={errors.project_type}>
                    <Select value={form.project_type} onValueChange={set("project_type")}>
                      <SelectTrigger data-testid="form-project-type" className="rounded-none bg-white">
                        <SelectValue placeholder="Choose a service area" />
                      </SelectTrigger>
                      <SelectContent>
                        {PROJECT_TYPES.map((p) => (
                          <SelectItem key={p} value={p} data-testid={`project-type-${p}`}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="How can we help? *" error={errors.message}>
                    <Textarea
                      data-testid="form-message"
                      value={form.message}
                      onChange={set("message")}
                      rows={5}
                      placeholder="Tell us about substrates, volumes, current issues, timelines…"
                      className="rounded-none bg-white resize-none"
                    />
                  </Field>
                  <Button
                    data-testid="contact-form-submit"
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-none bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold py-6 text-base"
                  >
                    {submitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting…</>) : "Request Consultancy"}
                  </Button>
                  <p className="text-xs text-[#4B4A54] text-center">
                    By submitting, you agree we may contact you about your enquiry. We never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <Label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-navy">{label}</Label>
      <div className="mt-2">{children}</div>
      {error && <p data-testid="field-error" className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
