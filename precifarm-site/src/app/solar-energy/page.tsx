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
        title="Cash-Purchase Solar."
        titleAccent="Monitored Uptime."
        subtitle="Own your solar energy system outright from day one. No leasing, no finance — just clean, reliable power for your home, business, or farm. EPRA-compliant installation by certified engineers."
        gradient="white"
        meta={[
          { icon: "&#128176;", text: "Cash Purchase — Own It Outright" },
          { icon: "&#128225;", text: "Remote Monitoring Included" },
          { icon: "&#128274;", text: "EPRA Compliant" },
        ]}
      />

      {/* Value Props */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Cash Purchase", desc: "No leasing, no finance — own the system outright from day one." },
            { title: "Monitored Uptime", desc: "Remote monitoring via PreciSense with SMS alerts and real-time dashboard." },
            { title: "Certified Install", desc: "EPRA-compliant installation by certified solar engineers." },
            { title: "10-Year Warranty", desc: "Tier-1 panels: 25-year performance warranty, 10-year product warranty." },
          ].map((v) => (
            <div key={v.title} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Home Solar */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="Home Solar Packages" subtitle="Reliable household power — lights, TV, phone charging, and appliances." />
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
      <Section>
        <SectionHeader title="Business Solar Packages" subtitle="Keep operations running through outages and reduce electricity bills." />
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
      <Section className="border-t border-gray-100">
        <SectionHeader title="Farm Solar Packages" subtitle="Cold storage, agro-processing, lighting, and integrated pump systems." />
        <div className="grid sm:grid-cols-3 gap-6">
          <PricingCard name="Farm Basic" description="2 kW / 400Ah" price="KES 180,000" priceUnit="- 280,000"
            features={["Lighting and security", "Small processing", "Remote monitoring"]} ctaText="Get a Quote" />
          <PricingCard name="Farm Standard" description="5 kW / 800Ah" price="KES 420,000" priceUnit="- 680,000" featured
            features={["Cold room", "Processing equipment", "Water pumping", "Full monitoring dashboard"]} ctaText="Get a Quote" />
          <PricingCard name="Farm Commercial" description="10-30 kW" price="KES 1M" priceUnit="- 4M+"
            features={["Full agro-processing facility", "Multiple buildings", "Integrated pump systems", "Enterprise monitoring"]} ctaText="Get a Quote" />
        </div>
      </Section>

      {/* Installation Process */}
      <Section>
        <SectionHeader title="Installation Process" subtitle="From assessment to monitoring — typically completed in 1-3 days." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step number="01" title="Site Assessment" description="Visit, assess load requirements, inspect roof/ground mounting options." />
          <Step number="02" title="System Design" description="Optimum system size and configuration with detailed quotation." />
          <Step number="03" title="Installation" description="Certified team installs and commissions — typically 1-3 days." />
          <Step number="04" title="Monitoring" description="Remote monitoring activated, SMS alerts and dashboard access." />
        </div>
      </Section>

      {/* Component Standards */}
      <Section className="bg-navy-900 text-white">
        <SectionHeader title="Nishati Component Standards" subtitle="Premium components with industry-leading warranties and local serviceability." light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DarkCard title="Solar Panels" description="Tier-1: Jinko, Canadian Solar, JA Solar, Longi. 25-year performance warranty." />
          <DarkCard title="Batteries" description="Lithium (LiFePO4) or AGM — both locally serviceable." />
          <DarkCard title="Inverters" description="Victron Energy, Growatt, Schneider Electric." />
          <DarkCard title="Installation" description="Professional team, EPRA-compliant, fully permitted." />
          <DarkCard title="Monitoring" description="Real-time dashboard included with every system." />
          <DarkCard title="Warranty" description="10 years product + 25 years performance on panels." />
        </div>
      </Section>

      <CTASection title="Go Solar with Nishati" subtitle="Get a free site assessment and customized solar proposal for your home, business, or farm." />
    </>
  );
}
