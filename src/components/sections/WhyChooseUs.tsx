import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const REASONS = [
  { title: "Off-Road Tour & Rental Specialists", desc: "We understand passenger injury exposure, off-road fleet physical-damage risk, and the certificates BLM permits and land managers require." },
  { title: "Competitive Rates", desc: "Access to specialty recreation carriers that price off-road tour and rental risk fairly — not general carriers that overprice or exclude it." },
  { title: "Same-Day Certificates", desc: "Need a certificate for a BLM permit, land manager, or event venue by tomorrow? We process certificates and additional insured endorsements same-day." },
  { title: "Licensed in All 50 States", desc: "Whether you run one trailhead or operate across multiple regions, we can bind coverage where you need it." },
  { title: "Founded in 2005", desc: "20+ years placing specialty business insurance. We know which carriers price recreation risk fairly and pay claims." },
  { title: "Claims Advocacy", desc: "When a Jeep rolls on the trail or a passenger is injured, we're in your corner — direct advocate support, not a carrier call center." },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-warm-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jeep-tour-group.jpg"
                alt="Guided convoy of off-road 4x4 vehicles on a desert trail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-transparent" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
                Why Off-Road Operators Choose Us
              </h2>
              <p className="font-body text-muted leading-relaxed mb-8">
                We specialize in insurance for commercial Jeep tour and rental operators. That means we understand passenger injury exposure, off-road fleet damage, and exactly what BLM permits and land managers require on a certificate.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-forest-green rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-bold text-bark text-sm mb-0.5">{r.title}</p>
                      <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
