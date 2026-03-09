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
      {/* Hero */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">
                Trusted across 38 counties in Kenya
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-navy-900 mb-6 leading-[1.1] tracking-tight">
                Engineering farms that pay for themselves
              </h1>
              <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
                We design, install, and maintain solar-powered water pumping, precision drip
                irrigation, and complete farm energy systems — with guaranteed uptime and ROI
                calculated before breaking ground.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors text-base"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-navy-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-base"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-5 max-w-sm w-full">
                <StatCard value="850+" label="Systems Installed" />
                <StatCard value="99.2%" label="System Uptime" />
                <StatCard value="38" label="Counties Served" />
                <StatCard value="18 mo" label="Avg. Payback" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section id="services">
        <SectionHeader
          title="What We Do"
          subtitle="End-to-end agricultural engineering — from water sourcing to energy systems — designed to maximize your ROI."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard href="/solar-pumps" icon="&#9788;" title="Solar Pumping" description="Zero fuel costs with turnkey solar pump systems for boreholes, rivers, and open water. From KES 145,000." />
          <FeatureCard href="/drip-irrigation" icon="&#128167;" title="Drip Irrigation" description="90-95% water efficiency. Quarter-acre kits to 10+ acre commercial systems with agronomist support." />
          <FeatureCard href="/farm-design" icon="&#128208;" title="Farm Design" description="Principal engineering consulting from concept to harvest. Surveys, hydraulics, and project management." />
          <FeatureCard href="/solar-energy" icon="&#9889;" title="Nishati Solar" description="Cash-purchase solar energy for homes, businesses, and farms. EPRA-compliant with remote monitoring." />
        </div>
      </Section>

      {/* Why Precifarm */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="Why Precifarm" subtitle="We don't just sell equipment — we engineer complete systems with guaranteed performance." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Benefit icon="&#9878;" title="99.2% Uptime Guarantee" description="If any system drops below 99% uptime in a month, we automatically credit your account." />
          <Benefit icon="&#128200;" title="18-Month Average Payback" description="ROI is calculated before breaking ground. Our systems pay for themselves within months." />
          <Benefit icon="&#9201;" title="24-Hour Quote Turnaround" description="Our engineering team responds with scope and pricing within 24 hours of enquiry." />
          <Benefit icon="&#127758;" title="Kenya-wide Coverage" description="Delivery and installation to all 38+ counties with local service and support." />
          <Benefit icon="&#128274;" title="EPRA Compliant" description="All solar installations comply with Energy and Petroleum Regulatory Authority standards." />
          <Benefit icon="&#128225;" title="PreciSense Monitoring" description="IoT remote monitoring with real-time data, alerts, and historical performance tracking." />
        </div>
      </Section>

      {/* Brands */}
      <Section>
        <SectionHeader title="Our Brands" subtitle="Three focused brands delivering specialized expertise across agriculture and energy." />
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
            <h3 className="text-lg font-bold mb-1">Precifarm</h3>
            <p className="text-sm text-gray-400 mb-3">Parent Brand</p>
            <p className="text-sm text-gray-500">Agri-engineering for farms — solar pumping, precision irrigation, and full farm design services.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
            <h3 className="text-lg font-bold mb-1">Nishati by Precifarm</h3>
            <p className="text-sm text-gray-400 mb-3">Solar Energy</p>
            <p className="text-sm text-gray-500">Cash-purchase solar energy systems for homes, businesses, and farms across Kenya.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
            <h3 className="text-lg font-bold mb-1">PreciSense&trade;</h3>
            <p className="text-sm text-gray-400 mb-3">Monitoring Platform</p>
            <p className="text-sm text-gray-500">Remote IoT monitoring for all installed systems — real-time data, SMS alerts, and dashboards.</p>
          </div>
        </div>
      </Section>

      {/* Trusted Components */}
      <Section className="bg-navy-900 text-white">
        <SectionHeader title="Trusted Components" subtitle="We source only proven, bankable components with robust local support networks." light />
        <div className="grid sm:grid-cols-3 gap-6">
          <DarkCard title="Solar Panels" description="Tier-1 only: Jinko Solar, Canadian Solar, JA Solar, Longi Solar — 25-year performance warranty." />
          <DarkCard title="Pumps" description="Lorentz, Grundfos, Dayliff, CRI, Franklin Electric — AISI 304/316 stainless steel wet ends." />
          <DarkCard title="Controllers & Inverters" description="Lorentz, Grundfos, Schneider, ABB, Victron Energy, Growatt — dry-run protection standard." />
        </div>
      </Section>

      {/* PreciSense */}
      <Section id="precisense">
        <SectionHeader title="PreciSense&trade; Monitoring" subtitle="Real-time visibility into system performance, alerts, and historical data — from anywhere." />
        <DataTable
          headers={["Tier", "Features", "Monthly Cost"]}
          rows={[
            ["Lite", "SMS alerts, daily summary", "Free"],
            ["Standard", "Mobile app, real-time data, 30-day history", "KES 500"],
            ["Pro", "Full dashboard, soil sensors, 1-year history", "KES 1,500"],
            ["Enterprise", "Multi-site, API access, SCADA integration", "KES 5,000"],
          ]}
        />
      </Section>

      {/* Maintenance */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="Maintenance Packages" subtitle="Keep your systems running at peak performance with annual maintenance contracts." />
        <div className="grid sm:grid-cols-3 gap-6">
          <PricingCard name="Essential" description="Annual inspection and remote support" price="KES 12,000" priceUnit="/year" features={["Annual on-site inspection", "Remote technical support", "Performance report"]} />
          <PricingCard name="Standard" description="Bi-annual service with priority support" price="KES 24,000" priceUnit="/year" features={["Bi-annual on-site service", "Priority support response", "Minor repairs included", "Quarterly performance reports"]} featured />
          <PricingCard name="Premium" description="Quarterly service with 24/7 support" price="KES 48,000" priceUnit="/year" features={["Quarterly on-site service", "24/7 emergency support", "All repairs included", "Monthly performance reports", "Priority parts replacement"]} />
        </div>
      </Section>

      {/* CTA */}
      <CTASection title="Ready to Transform Your Farm?" subtitle="Get a detailed scope and pricing within 24 hours. No obligation, no pressure." />

      {/* Quote Form */}
      <section id="quote" className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Get Your Free Quote</h2>
            <p className="text-center text-gray-500 mb-9">Tell us about your project and our engineering team will respond within 24 hours.</p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
