import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  PricingCard,
  Step,
  DarkCard,
  CTASection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Nishati Solar Energy — Precifarm Kenya",
  description:
    "Cash-purchase solar energy systems for homes, businesses, and farms. EPRA-compliant installation with remote monitoring. From KES 35,000.",
};

export default function SolarEnergyPage() {
  return (
    <>
      <PageHero
        badge="&#9889; Nishati by Precifarm"
        title="Own Your Power."
        titleAccent="Stop Renting It."
        subtitle="KPLC bills keep rising. Load-shedding keeps disrupting. Generators keep burning money. Nishati solar systems give you energy independence — you own the system outright from day one, and the sun does not send monthly invoices."
        backgroundImage="/images/solar-panel-installation.jpg"
        meta={[
          { icon: "&#128176;", text: "Cash Purchase — Own It Outright" },
          { icon: "&#128225;", text: "Remote Monitoring Included" },
          { icon: "&#128274;", text: "EPRA Compliant" },
        ]}
      />

      {/* Image + Value Split */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/solar-pump-system.jpg"
              alt="Solar panel system with submersible pump delivering water to storage"
              className="rounded-2xl w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Cash Purchase Makes Sense</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Leasing and pay-as-you-go solar products keep you locked into monthly payments — often for systems you never fully own. With Nishati, you pay once and the power is yours for 25+ years.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our systems use Tier-1 panels with 25-year performance warranties and are installed by EPRA-certified engineers. Every installation includes remote monitoring so you can track your solar production in real time.
            </p>
          </div>
        </div>
      </Section>

      {/* Value Props */}
      <Section className="border-t border-gray-100">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Cash Purchase", desc: "No leasing, no subscriptions, no hidden fees. You own the system from installation day." },
            { title: "Monitored Uptime", desc: "PreciSense remote monitoring with SMS alerts and real-time dashboard — know your system is performing." },
            { title: "Certified Install", desc: "EPRA-compliant installation by certified solar engineers. Fully permitted and inspection-ready." },
            { title: "25-Year Panels", desc: "Tier-1 panels with 25-year performance warranty and 10-year product warranty. Built to outlast your roof." },
          ].map((v) => (
            <div key={v.title} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Installation Process */}
      <Section>
        <SectionHeader title="How It Works" subtitle="From first call to monitoring dashboard — typically completed in 3-7 days." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Step number="01" title="Site Assessment" description="We visit your property, assess load requirements, inspect roof or ground mounting options, and measure solar exposure." />
          <Step number="02" title="System Design" description="Custom system sizing based on your actual energy consumption. Detailed quotation with no hidden costs." />
          <Step number="03" title="Installation" description="EPRA-certified team installs panels, inverter, batteries, and wiring. Typically 1-3 days for homes, 3-7 for commercial." />
          <Step number="04" title="Monitoring" description="PreciSense remote monitoring activated. SMS alerts for any issues. Dashboard access from your phone." />
        </div>
      </Section>

      {/* Solar Installation Image Split */}
      <Section className="border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">The Economics of Going Solar in Kenya</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-1">Average KPLC Bill Savings</h3>
                <p className="text-sm text-gray-500">Most home systems save KES 3,000 - 15,000 per month. Business systems save KES 20,000 - 200,000+ per month depending on size.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-1">Payback Period</h3>
                <p className="text-sm text-gray-500">Home systems: 18-36 months. Business systems: 12-24 months. After payback, your electricity is essentially free.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-1">System Lifespan</h3>
                <p className="text-sm text-gray-500">25+ years of production from Tier-1 panels. Batteries last 8-15 years depending on type. Inverters carry 5-10 year warranties.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/solar-pump-product.jpg"
              alt="Solar-powered submersible pump system with panel array and water trough"
              className="rounded-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Home Solar */}
      <Section>
        <SectionHeader title="Home Solar Packages" subtitle="Reliable household power — lights, TV, phone charging, refrigerator, and full home electrification. End load-shedding at home." />
        <div className="grid sm:grid-cols-3 gap-6">
          <PricingCard name="Basic Home" description="300W / 200Ah" price="KES 35,000" priceUnit="- 55,000"
            features={["1-3 lights", "Phone charging", "Radio", "Remote monitoring", "EPRA-compliant installation"]} ctaText="Get a Quote" />
          <PricingCard name="Standard Home" description="600W / 400Ah" price="KES 85,000" priceUnit="- 120,000" featured
            features={["6+ lights", "TV and fan", "Refrigerator", "Remote monitoring + SMS alerts", "EPRA-compliant installation"]} ctaText="Get a Quote" />
          <PricingCard name="Premium Home" description="1.5 kW / 800Ah" price="KES 180,000" priceUnit="- 280,000"
            features={["Full home power", "Washing machine", "Water pumps", "Remote monitoring + dashboard", "EPRA-compliant installation"]} ctaText="Get a Quote" />
        </div>
      </Section>

      {/* Business Solar */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="Business Solar Packages" subtitle="Keep your business running through outages. Protect revenue, reduce electricity costs, and eliminate generator dependency." />
        <div className="grid sm:grid-cols-3 gap-6">
          <PricingCard name="SME Starter" description="1-2 kW / 400Ah" price="KES 120,000" priceUnit="- 200,000"
            features={["Computers and lighting", "Phone charging stations", "POS systems", "Remote monitoring"]} ctaText="Get a Quote" />
          <PricingCard name="SME Standard" description="3-5 kW / 800Ah" price="KES 280,000" priceUnit="- 480,000" featured
            features={["Full office power", "Refrigeration", "AC units", "Real-time monitoring"]} ctaText="Get a Quote" />
          <PricingCard name="Commercial" description="10-50 kW" price="KES 1.2M" priceUnit="- 6M+"
            features={["Industrial loads", "Workshops", "Cold rooms", "Enterprise monitoring"]} ctaText="Get a Quote" />
        </div>
      </Section>

      {/* Farm Solar */}
      <Section>
        <SectionHeader title="Farm Solar Packages" subtitle="Power your cold storage, agro-processing, security lighting, and pump systems — all from the sun. Designed for rural and off-grid locations." />
        <div className="grid sm:grid-cols-3 gap-6">
          <PricingCard name="Farm Basic" description="2 kW / 400Ah" price="KES 180,000" priceUnit="- 280,000"
            features={["Lighting and security", "Small processing", "Remote monitoring"]} ctaText="Get a Quote" />
          <PricingCard name="Farm Standard" description="5 kW / 800Ah" price="KES 420,000" priceUnit="- 680,000" featured
            features={["Cold room", "Processing equipment", "Water pumping", "Full monitoring dashboard"]} ctaText="Get a Quote" />
          <PricingCard name="Farm Commercial" description="10-30 kW" price="KES 1M" priceUnit="- 4M+"
            features={["Full agro-processing facility", "Multiple buildings", "Integrated pump systems", "Enterprise monitoring"]} ctaText="Get a Quote" />
        </div>
      </Section>

      {/* Component Standards */}
      <Section className="bg-navy-900 text-white">
        <SectionHeader title="Nishati Component Standards" subtitle="We only install premium, proven components with local serviceability and genuine manufacturer warranties." light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DarkCard title="Solar Panels" description="Tier-1 only: Jinko, Canadian Solar, JA Solar, Longi. 25-year performance warranty, proven in Kenyan conditions." />
          <DarkCard title="Batteries" description="Lithium (LiFePO4) for longevity or AGM for budget builds — both locally serviceable with spare parts in Nairobi." />
          <DarkCard title="Inverters" description="Victron Energy, Growatt, Schneider Electric — reliable, efficient, and backed by local distributors." />
          <DarkCard title="Installation" description="EPRA-certified team. Professional mounting, proper earthing, surge protection, and full system documentation." />
          <DarkCard title="Monitoring" description="PreciSense real-time dashboard included with every system. Track production, consumption, and battery health." />
          <DarkCard title="Warranty" description="10 years product + 25 years performance on panels. Inverter and battery warranties honored locally." />
        </div>
      </Section>

      <CTASection title="Take Control of Your Energy Costs" subtitle="Get a free site assessment and customized solar proposal for your home, business, or farm. We respond within 24 hours." />
    </>
  );
}
