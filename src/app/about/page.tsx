import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, CREDENTIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Jeep Insurance",
  description: `${SITE.name} — specialized insurance for commercial Jeep tour, rental, and event operators since ${SITE.founded}. Licensed in all 50 states, A.M. Best A+ rated carriers.`,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-forest-green pt-24 pb-16">
          <div className="container-xl">
            <FadeIn>
              <h1 className="font-heading text-4xl sm:text-5xl text-white font-bold mb-4">About Jeep Insurance</h1>
              <p className="font-body text-white/80 text-lg max-w-2xl">Specialists in commercial Jeep tour and rental insurance since 2005.</p>
            </FadeIn>
          </div>
        </section>

        <section className="section-pad bg-warm-white">
          <div className="container-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeIn>
                  <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-6">Insurance Built for Off-Road Operators</h2>
                  <div className="space-y-4 font-body text-muted text-base leading-relaxed">
                    <p>Jeep Insurance is a specialty division of Contractors Choice Agency, an insurance agency founded in 2005 and dedicated to serving specialty businesses with risks the standard market misunderstands.</p>
                    <p>We've focused on commercial off-road tour and rental operators long enough to know the nuances that matter: why general liability excludes the passengers in your Jeeps, why standard auto won't cover off-road fleet damage, how abuse & molestation exposure arises when you serve minors and groups, and exactly what BLM permits and land managers require on a certificate.</p>
                    <p>Our approach is straightforward: understand how you run tours, rentals, and events, shop specialty recreation carriers that price the risk fairly, and provide the certificates and service a busy operator actually needs.</p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {CREDENTIALS.map((c) => (
                      <div key={c} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-forest-green flex-shrink-0" />
                        <span className="font-body text-sm text-bark">{c}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              <FadeIn direction="left">
                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/about-agent.jpg" alt="Professional insurance agent" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-xl">
            <FadeIn>
              <div className="bg-forest-green-50 border border-forest-green/20 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="font-heading text-2xl sm:text-3xl text-bark font-bold mb-4">Ready to Get Your Tour & Rental Operation Insured?</h2>
                <p className="font-body text-muted mb-8 max-w-xl mx-auto">Same-day quotes for commercial Jeep tour and rental operators. Call or fill out our quote form and we'll have your options ready today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-ember-orange text-white px-7 py-3.5 rounded-lg font-body font-bold hover:bg-ember-orange-dark transition-colors">
                    Get a Free Quote
                  </Link>
                  <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 border-2 border-forest-green text-forest-green px-7 py-3.5 rounded-lg font-body font-bold hover:bg-forest-green hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />{SITE.phone}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
