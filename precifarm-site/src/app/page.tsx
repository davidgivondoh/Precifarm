import Link from "next/link";
import {
  Section,
  SectionHeader,
  StatCard,
  FeatureCard,
  Benefit,
  PricingCard,
  DataTable,
  DarkCard,
  CTASection,
} from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solar-pump-field.jpg"
            alt="Solar-powered water pump system in a lush green agricultural field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/75 to-[#0f172a]/40" />
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
            image="/images/water-tanks.jpg"
          />
          <FeatureCard
            href="/solar-energy"
            title="Nishati Solar Energy"
            description="Power your home, packhouse, or cold storage with reliable solar. EPRA-compliant systems with remote monitoring included."
            image="/images/solar-pump-product.jpg"
          />
        </div>
      </Section>

      {/* Visual break — water infrastructure */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="/images/water-tanks.jpg"
          alt="Elevated water storage tanks with HDPE pipe connections and filtration system"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 to-transparent flex items-end">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Benefit
            icon="&#9878;"
            title="99.2% Uptime — Guaranteed"
            description="If your system drops below 99% uptime in any month, we credit your account automatically. No arguments, no fine print."
          />
          <Benefit
            icon="&#128200;"
            title="Your Money Back in 18 Months"
            description="We calculate your ROI before we break ground. On average, our systems pay for themselves in just 18 months through fuel and water savings."
          />
          <Benefit
            icon="&#9201;"
            title="Quote Within 24 Hours"
            description="Send us your details today and our engineering team will respond with a full scope and transparent pricing by tomorrow."
          />
          <Benefit
            icon="&#127758;"
            title="We Come to You — All 38 Counties"
            description="Whether you farm in Turkana or Taita-Taveta, we deliver, install, and support your system with a local service network."
          />
          <Benefit
            icon="&#128274;"
            title="Fully EPRA Compliant"
            description="Every solar installation meets Energy and Petroleum Regulatory Authority standards. Proper permits, proper engineering, proper peace of mind."
          />
          <Benefit
            icon="&#128225;"
            title="PreciSense Remote Monitoring"
            description="See exactly how your system is performing from your phone. Get SMS alerts if anything needs attention — before it becomes a problem."
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gray-50">
        <SectionHeader
          title="What Our Farmers Say"
          subtitle="Real results from real farms across Kenya."
        />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex gap-1 mb-4 text-amber-400 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              &ldquo;Before Precifarm, I was spending KES 8,000 a month on diesel to pump water from my borehole. Now my solar pump runs for free and I have not touched a generator in over a year. The system paid for itself in 14 months.&rdquo;
            </p>
            <div>
              <p className="font-bold text-navy-900 text-sm">James Mwangi</p>
              <p className="text-xs text-gray-400">Tomato farmer, Naivasha &bull; 3-acre farm</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex gap-1 mb-4 text-amber-400 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              &ldquo;The drip irrigation system transformed my cabbage and kale yields. I am using less than half the water I used to and harvesting more. Their team designed everything around my specific plot and water source.&rdquo;
            </p>
            <div>
              <p className="font-bold text-navy-900 text-sm">Mary Wanjiku</p>
              <p className="text-xs text-gray-400">Vegetable grower, Nyandarua &bull; 1.5-acre farm</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex gap-1 mb-4 text-amber-400 text-lg">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              &ldquo;We run a 12-acre flower farm and needed reliable power and irrigation. Precifarm handled everything — solar panels, pumps, drip lines, the monitoring system. Their after-sales support is outstanding.&rdquo;
            </p>
            <div>
              <p className="font-bold text-navy-900 text-sm">David Kimani</p>
              <p className="text-xs text-gray-400">Flower exporter, Nakuru &bull; 12-acre farm</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Solar panels image + Brands */}
      <Section>
        <SectionHeader
          title="Three Brands, One Mission"
          subtitle="Each brand delivers specialized expertise so your farm gets exactly what it needs — nothing more, nothing less."
        />
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
            <div className="h-40 overflow-hidden">
              <img src="/images/solar-pump-field.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold mb-1 text-navy-900">Precifarm</h3>
              <p className="text-sm text-gray-400 mb-3">Agri-Engineering</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                The heart of what we do. Solar water pumping, precision drip irrigation, and complete farm design — engineered for Kenyan conditions and Kenyan crops.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
            <div className="h-40 overflow-hidden">
              <img src="/images/solar-panel-installation.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold mb-1 text-navy-900">Nishati by Precifarm</h3>
              <p className="text-sm text-gray-400 mb-3">Solar Energy</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Reliable solar power for your home, business, or farm operations. Cash-purchase systems with no hidden fees and full remote monitoring.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
            <div className="h-40 overflow-hidden">
              <img src="/images/drip-field-redsoil.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold mb-1 text-navy-900">PreciSense&trade;</h3>
              <p className="text-sm text-gray-400 mb-3">Smart Monitoring</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Know exactly how your system is performing. Real-time data, SMS alerts when something needs attention, and performance history on your phone.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Trusted Components */}
      <Section className="bg-navy-900 text-white">
        <SectionHeader
          title="Built with Components You Can Trust"
          subtitle="We only use tier-1, bankable equipment with proven track records in East African conditions. No shortcuts, no off-brand substitutes."
          light
        />
        <div className="grid sm:grid-cols-3 gap-6">
          <DarkCard
            title="Solar Panels"
            description="Tier-1 manufacturers only: Jinko Solar, Canadian Solar, JA Solar, and Longi Solar. Every panel carries a 25-year performance warranty."
          />
          <DarkCard
            title="Water Pumps"
            description="Lorentz, Grundfos, Dayliff, CRI, and Franklin Electric. All with AISI 304/316 stainless steel wet ends built to handle Kenyan water conditions."
          />
          <DarkCard
            title="Controllers & Inverters"
            description="Lorentz, Grundfos, Schneider, ABB, Victron Energy, and Growatt. Dry-run protection comes standard on every installation."
          />
        </div>
      </Section>

      {/* PreciSense */}
      <Section id="precisense">
        <SectionHeader
          title="PreciSense&trade; Monitoring Plans"
          subtitle="Choose the level of visibility that fits your farm. Every Precifarm installation includes the Lite tier at no extra cost."
        />
        <DataTable
          headers={["Tier", "What You Get", "Monthly Cost"]}
          rows={[
            ["Lite", "SMS alerts when something needs attention, plus a daily performance summary", "Free with every system"],
            ["Standard", "Mobile app with real-time data, flow rates, and 30-day performance history", "KES 500"],
            ["Pro", "Full web dashboard, soil moisture sensors, weather data, and 1-year history", "KES 1,500"],
            ["Enterprise", "Multi-site management, API access, and SCADA integration for large operations", "KES 5,000"],
          ]}
        />
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
            price="KES 12,000"
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
            price="KES 24,000"
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
            price="KES 48,000"
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
                  <div className="w-10 h-10 min-w-[40px] bg-gray-100 rounded-lg flex items-center justify-center text-navy-900 font-bold text-sm">1</div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">Share your details</p>
                    <p className="text-sm text-gray-400">Fill in the form with your farm location, size, and what you need.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 min-w-[40px] bg-gray-100 rounded-lg flex items-center justify-center text-navy-900 font-bold text-sm">2</div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">We design your system</p>
                    <p className="text-sm text-gray-400">Our engineers assess your needs and prepare a detailed scope and quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 min-w-[40px] bg-gray-100 rounded-lg flex items-center justify-center text-navy-900 font-bold text-sm">3</div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">We install and support</p>
                    <p className="text-sm text-gray-400">Professional installation, commissioning, and ongoing maintenance.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <img
                  src="/images/pipe-fittings.jpg"
                  alt="Farmer planting seedlings on a well-managed agricultural plot"
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
