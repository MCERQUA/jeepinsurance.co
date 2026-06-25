"use client";

import { useState } from "react";
import { CheckCircle, Phone } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

const COVERAGE_OPTIONS = [
  "General Liability",
  "Participant Accident",
  "Rental Fleet Physical Damage",
  "Abuse & Molestation Liability",
  "Commercial Auto",
  "Special Event Liability",
  "Workers Compensation",
  "Full Package",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    operationType: "", fleetSize: "", staffSize: "",
    coverageNeeded: "", state: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "quote", ...formData }).toString(),
      });
    } catch {
      // silent
    } finally {
      setSubmitted(true);
      setLoading(false);
    }
  };

  const field = (name: keyof typeof formData, label: string, type = "text", required = true) => (
    <div key={name}>
      <label className="block font-body text-sm font-bold text-bark mb-1.5">
        {label}{required && <span className="text-ember-orange ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={formData[name]}
        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
        className="w-full px-4 py-2.5 border border-border rounded-lg font-body text-sm text-bark focus:outline-none focus:border-forest-green bg-white"
      />
    </div>
  );

  const select = (name: keyof typeof formData, label: string, options: string[], required = true) => (
    <div key={name}>
      <label className="block font-body text-sm font-bold text-bark mb-1.5">
        {label}{required && <span className="text-ember-orange ml-1">*</span>}
      </label>
      <select
        name={name}
        required={required}
        value={formData[name]}
        onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
        className="w-full px-4 py-2.5 border border-border rounded-lg font-body text-sm text-bark focus:outline-none focus:border-forest-green bg-white"
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-forest-green pt-24 pb-16">
          <div className="container-xl">
            <FadeIn>
              <h1 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-4">Get a Jeep Tour & Rental Insurance Quote</h1>
              <p className="font-body text-white/80 text-lg max-w-xl">Tell us about your tour, rental, or event operation and we'll prepare a competitive quote — same-day turnaround.</p>
            </FadeIn>
          </div>
        </section>

        <section className="section-pad bg-warm-white">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <FadeIn>
                  {submitted ? (
                    <div className="bg-white rounded-2xl border border-border p-10 text-center">
                      <CheckCircle className="w-14 h-14 text-forest-green mx-auto mb-4" />
                      <h2 className="font-heading text-2xl text-bark font-bold mb-3">Quote Request Received!</h2>
                      <p className="font-body text-muted mb-2">We'll prepare your Jeep tour & rental insurance quote and be in touch today.</p>
                      <p className="font-body text-sm text-muted">For immediate assistance, call <a href={SITE.phoneHref} className="text-forest-green font-bold">{SITE.phone}</a></p>
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl border border-border p-8">
                      <h2 className="font-heading text-2xl text-bark font-bold mb-6">Jeep Tour & Rental Insurance Quote Request</h2>
                      <form
                        name="quote"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <input type="hidden" name="form-name" value="quote" />
                        <p className="hidden">
                          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {field("name", "Full Name")}
                          {field("company", "Business Name")}
                          {field("email", "Email Address", "email")}
                          {field("phone", "Phone Number", "tel")}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {select("operationType", "Type of Operation", ["Guided Jeep Tours", "Jeep / 4x4 Rental Fleet", "Both Tours & Rentals", "Off-Road Event Organizer", "Off-Road Club", "Outfitter / Mixed"])}
                          {select("fleetSize", "Fleet Size (Vehicles)", ["1–5", "6–10", "11–25", "26–50", "50+"])}
                          {select("staffSize", "Number of Employees", ["1 (Owner only)", "2–5", "6–10", "11–20", "21+"])}
                          {select("coverageNeeded", "Coverage Needed", COVERAGE_OPTIONS)}
                          {field("state", "Primary State of Operations")}
                        </div>

                        <div>
                          <label className="block font-body text-sm font-bold text-bark mb-1.5">Additional Notes</label>
                          <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Guided tours or self-drive rentals? Organized events? Approximate fleet value? BLM/land-use permit or venue certificate needs? Tell us here..."
                            className="w-full px-4 py-2.5 border border-border rounded-lg font-body text-sm text-bark focus:outline-none focus:border-forest-green resize-none bg-white"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-ember-orange text-white py-3.5 rounded-lg font-body font-bold hover:bg-ember-orange-dark transition-colors disabled:opacity-60"
                        >
                          {loading ? "Submitting..." : "Get My Jeep Insurance Quote →"}
                        </button>
                      </form>
                    </div>
                  )}
                </FadeIn>
              </div>

              <aside className="space-y-5">
                <FadeIn direction="left">
                  <div className="bg-forest-green rounded-2xl p-7">
                    <h3 className="font-heading text-lg text-white font-bold mb-3">Prefer to Call?</h3>
                    <p className="font-body text-white/70 text-sm mb-4">Our off-road tour & rental insurance specialists are ready to quote you now.</p>
                    <a href={SITE.phoneHref} className="flex items-center gap-2 text-ember-orange font-body font-bold">
                      <Phone className="w-4 h-4" />{SITE.phone}
                    </a>
                    <p className="font-body text-white/50 text-xs mt-2">{SITE.hours}</p>
                  </div>
                </FadeIn>
                <FadeIn direction="left" delay={0.05}>
                  <div className="bg-white rounded-2xl border border-border p-6">
                    <h3 className="font-body text-xs font-bold uppercase tracking-widest text-muted mb-4">What We'll Cover</h3>
                    {["General Liability", "Participant Accident", "Rental Fleet Physical Damage", "Abuse & Molestation Liability", "Commercial Auto & Special Event", "Workers Compensation"].map((i) => (
                      <div key={i} className="flex items-center gap-2 mb-2.5">
                        <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0" />
                        <span className="font-body text-sm text-bark">{i}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
