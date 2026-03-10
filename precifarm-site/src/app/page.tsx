import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  SectionHeader,
  StatCard,
  FeatureCard,
  PricingCard,
  CTASection,
} from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Precifarm — Solar Pumps, Drip Irrigation & Farm Design | Kenya",
  description:
    "Kenya's leading precision agriculture company. Solar water pumps from KES 145,000, drip irrigation kits from KES 45,000, and professional farm design. 850+ farms served across 38 counties with 99.2% uptime guarantee.",
  keywords: [
    "solar water pump Kenya",
    "drip irrigation kit Kenya",
    "farm irrigation system",
    "solar pump installation Kenya",
    "precision agriculture",
    "smallholder farming Kenya",
    "borehole pump solar",
    "agricultural engineering",
    "Precifarm Kenya",
    "water pumping system",
  ],
  alternates: {
    canonical: "https://precifarm.com",
  },
  openGraph: {
    title: "Precifarm — Solar Pumps, Drip Irrigation & Farm Design | Kenya",
    description:
      "Solar water pumps, drip irrigation, and farm design engineered for Kenyan farmers. 850+ farms, 38 counties, 99.2% uptime.",
    url: "https://precifarm.com",
    images: [
      {
        url: "/images/sp500.jpg",
        width: 1200,
        height: 630,
        alt: "Precifarm solar-powered water pumping system on a Kenyan farm",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/sp500.jpg"
            alt="Solar-powered water pump with dual panels pumping water on a Kenyan farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-navy-900/90 via-navy-900/75 to-navy-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-gray-300 uppercase tracking-widest mb-5">
                Innovative irrigation for semi-arid Kenya
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Water solutions that transform smallholder farms
              </h1>
              <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
                We help smallholder farmers in semi-arid Kenya access reliable water through
                solar-powered pumping and precision drip irrigation. Our systems cut water waste
                by 60%, eliminate fuel costs, and pay for themselves within 18 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-base"
                >
                  Get a Free Quote Today
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-5 max-w-sm w-full">
                <StatCard value="850+" label="Farms Powered" />
                <StatCard value="99.2%" label="System Uptime" />
                <StatCard value="38" label="Counties Reached" />
                <StatCard value="18 mo" label="Average Payback" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-400 font-medium tracking-wide">
            SERVING FARMERS IN KAJIADO &bull; MACHAKOS &bull; KITUI &bull; LAIKIPIA &bull; NAKURU &bull; NAROK &bull; BARINGO &bull; TURKANA
          </p>
        </div>
      </section>

      {/* Services */}
      <Section id="services">
        <SectionHeader
          title="Innovative Solutions for Smallholder Farmers"
          subtitle="Water scarcity shouldn't limit your harvest. We bring solar-powered pumping, precision irrigation, and smart farm design to smallholder farmers across semi-arid Kenya."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            href="/solar-pumps"
            title="Solar Water Pumping"
            description="Pump water from boreholes, rivers, or dams using free solar energy. No fuel costs, no grid connection needed. Systems from KES 145,000."
            image="/images/solar-pumps-hero.png"
          />
          <FeatureCard
            href="/drip-irrigation"
            title="Drip Irrigation"
            description="Deliver water directly to crop roots and save up to 60% on water. From quarter-acre kitchen gardens to 10+ acre commercial farms."
            image="/images/drip-kit-onions.jpg"
          />
          <FeatureCard
            href="/farm-design"
            title="Farm Design & Engineering"
            description="We survey your land, design the hydraulics, and manage the entire project. A farm engineered for maximum yield and minimum waste."
            image="/images/drip-kit-installation.jpg"
          />
          <FeatureCard
            href="/solar-energy"
            title="Nishati Solar Energy"
            description="Power your home, packhouse, or cold storage with reliable solar. EPRA-compliant systems with remote monitoring included."
            image="/images/nishati-solar.jpg"
          />
        </div>
      </Section>

      {/* Visual break — water infrastructure */}
      <section className="relative h-100 overflow-hidden">
        <img
          src="/images/sp500.jpg"
          alt="Solar-powered water pumping system with dual panels delivering water to farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-900/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
            <p className="text-white text-2xl md:text-3xl font-bold max-w-2xl">
              From water source to crop root — we engineer every connection for reliability and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Why Precifarm */}
      <Section className="border-t border-gray-100">
        <SectionHeader
          title="Why Kenyan Farmers Choose Precifarm"
          subtitle="We do not just sell you equipment and disappear. We engineer a complete system, install it properly, and stand behind it with real guarantees."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: "01", title: "99.2% Uptime — Guaranteed", desc: "If your system drops below 99% uptime in any month, we credit your account automatically. No arguments, no fine print." },
            { num: "02", title: "Your Money Back in 18 Months", desc: "We calculate your ROI before we break ground. On average, our systems pay for themselves in just 18 months through fuel and water savings." },
            { num: "03", title: "Quote Within 24 Hours", desc: "Send us your details today and our engineering team will respond with a full scope and transparent pricing by tomorrow." },
            { num: "04", title: "We Come to You — All 38 Counties", desc: "Whether you farm in Turkana or Taita-Taveta, we deliver, install, and support your system with a local service network." },
            { num: "05", title: "Fully EPRA Compliant", desc: "Every solar installation meets Energy and Petroleum Regulatory Authority standards. Proper permits, proper engineering, proper peace of mind." },
            { num: "06", title: "PreciSense Remote Monitoring", desc: "See exactly how your system is performing from your phone. Get SMS alerts if anything needs attention — before it becomes a problem." },
          ].map((item) => (
            <div key={item.num} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
              <span className="text-xs font-bold text-gray-300 tracking-widest mb-3 block">{item.num}</span>
              <h3 className="text-base font-bold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="What Our Farmers Say"
          subtitle="Real results from real farms across Kenya."
        />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src="/images/farmer1.jfif" alt="Faith Mwangi, paw paw farmer in Naivasha" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex gap-1 mb-4 text-amber-400 text-lg">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;My paw paw trees were struggling with inconsistent watering from my old diesel pump. Since Precifarm installed the solar pump system, I have reliable water every day and my fruit quality has improved dramatically. The system paid for itself in 14 months through fuel savings alone.&rdquo;
              </p>
              <div>
                <p className="font-bold text-navy-900 text-sm">Faith Mwangi</p>
                <p className="text-xs text-gray-400">Paw paw farmer, Naivasha &bull; 3-acre farm</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src="/images/farmer2.jfif" alt="Mary Wanjiku, vegetable grower in Nyandarua" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex gap-1 mb-4 text-amber-400 text-lg">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;I grow kales and sukuma wiki for the Nairobi market. The drip irrigation system transformed my yields — I am harvesting twice as much while using less than half the water. Their team designed everything around my specific plot and water source.&rdquo;
              </p>
              <div>
                <p className="font-bold text-navy-900 text-sm">Mary Wanjiku</p>
                <p className="text-xs text-gray-400">Kales &amp; vegetable farmer, Nyandarua &bull; 1.5-acre farm</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src="/images/farmer3.jpeg" alt="Grace Kimani, tomato farmer in Nakuru" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex gap-1 mb-4 text-amber-400 text-lg">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;My tomato greenhouse needed reliable water and power. Precifarm handled everything — solar panels, pumps, drip lines, and the monitoring system. My tomato harvests have increased by 40% and I no longer lose crops to irregular watering.&rdquo;
              </p>
              <div>
                <p className="font-bold text-navy-900 text-sm">Grace Kimani</p>
                <p className="text-xs text-gray-400">Tomato farmer, Nakuru &bull; 5-acre farm</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Maintenance */}
      <Section className="border-t border-gray-100">
        <SectionHeader
          title="Keep Your System at Peak Performance"
          subtitle="A well-maintained system lasts longer and performs better. Choose a maintenance plan that gives you peace of mind year-round."
        />
        <div className="grid sm:grid-cols-3 gap-6">
          <PricingCard
            name="Essential"
            description="For farmers who want an annual check-up"
            price="KES 3,000"
            priceUnit="/year"
            features={[
              "Annual on-site inspection",
              "Remote technical support",
              "Written performance report",
            ]}
          />
          <PricingCard
            name="Standard"
            description="Our most popular plan for active farms"
            price="KES 5,000"
            priceUnit="/year"
            features={[
              "Bi-annual on-site service visits",
              "Priority support — faster response times",
              "Minor repairs included at no extra cost",
              "Quarterly performance reports",
            ]}
            featured
          />
          <PricingCard
            name="Premium"
            description="Full coverage for commercial operations"
            price="KES 10,000"
            priceUnit="/year"
            features={[
              "Quarterly on-site service visits",
              "24/7 emergency support hotline",
              "All repairs and parts included",
              "Monthly performance reports",
              "Priority parts replacement",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Your Farm Could Be Next"
        subtitle="Join 850+ Kenyan farmers who have already cut their costs and boosted their yields. Get your free, no-obligation quote today."
      />

      {/* Quote Form */}
      <section id="quote" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="pt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Tell Us About Your Farm
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you have a quarter-acre kitchen garden or a 50-acre commercial operation,
                we will design a system that fits your land, your water source, and your budget.
                Our engineering team responds within 24 hours.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 min-w-10 bg-gray-100 rounded-lg flex items-center justify-center text-navy-900 font-bold text-sm">1</div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">Share your details</p>
                    <p className="text-sm text-gray-400">Fill in the form with your farm location, size, and what you need.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 min-w-10 bg-gray-100 rounded-lg flex items-center justify-center text-navy-900 font-bold text-sm">2</div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">We design your system</p>
                    <p className="text-sm text-gray-400">Our engineers assess your needs and prepare a detailed scope and quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 min-w-10 bg-gray-100 rounded-lg flex items-center justify-center text-navy-900 font-bold text-sm">3</div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">We install and support</p>
                    <p className="text-sm text-gray-400">Professional installation, commissioning, and ongoing maintenance.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <img
                  src="/images/drip-kit-installation.jpg"
                  alt="Drip irrigation kit fittings installed on Kenyan farmland"
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-center mb-1 text-navy-900">Get Your Free Quote</h3>
              <p className="text-center text-gray-400 text-sm mb-8">No obligation. No pressure. Just honest engineering advice.</p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
