import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  DataTable,
  IncludesItem,
  Step,
  DarkCard,
  CTASection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Solar Pumping Systems — Precifarm Kenya",
  description:
    "Turnkey solar water pumping systems for boreholes, rivers, and open water sources. From KES 145,000 with 99.2% uptime guarantee.",
};

export default function SolarPumpsPage() {
  return (
    <>
      <PageHero
        badge="&#9788; Solar Pumping Systems"
        title="Stop Paying for Diesel."
        titleAccent="Start Pumping Free Water."
        subtitle="Kenyan farmers lose millions every year to fuel costs and unreliable grid power. Our turnkey solar pump systems deliver water every single day — no fuel bills, no generator noise, no KPLC dependency. Just sunlight and water."
        meta={[
          { icon: "&#128176;", text: "From KES 145,000" },
          { icon: "&#9878;", text: "99.2% Uptime Guarantee" },
          { icon: "&#128197;", text: "7-12 Day Installation" },
        ]}
      />

      {/* Hero Image + Intro Split */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1611365892117-00ac6c5a8db4?w=800&q=80"
              alt="Solar-powered water pump system installed in a semi-arid farming area"
              className="rounded-2xl w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Water Security for Every Farm in Kenya</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Whether you are irrigating tomatoes in Kajiado, running a dairy in Nyandarua, or supplying water to a school in Turkana — our solar pump systems are engineered for Kenyan conditions. High heat, dusty environments, deep boreholes, and remote locations are what we build for.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Every system pays for itself within 12-24 months through fuel savings alone. After that, your water is essentially free for the next 25 years.
            </p>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="How It Works" subtitle="From first call to flowing water — a straightforward process with no hidden steps." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step number="01" title="Site Assessment" description="We visit your farm, test the borehole or water source, measure solar exposure, and understand your daily water needs." />
          <Step number="02" title="System Design" description="Our engineers size the exact pump, panel array, and controller configuration for your specific conditions." />
          <Step number="03" title="Installation" description="Professional team installs panels, pump, controller, and cabling. Typical completion in 7-12 days." />
          <Step number="04" title="Commissioning" description="System tested, performance verified, and your team trained on operation. Monitoring activated." />
        </div>
      </Section>

      {/* Packages Table */}
      <Section>
        <SectionHeader title="Solar Pump Packages" subtitle="Choose the right system for your farm size and water requirements. Every package is fully installed and commissioned." />
        <DataTable
          headers={["Package", "Size", "Solar Array", "Max Head", "Daily Output", "Best For", "Price"]}
          rows={[
            ["SP-1000", "1 kW", "4 x 330W", "70m / 25m", "8,000-12,000 L", "1-3 acres, livestock, domestic", "KES 145,000"],
            ["SP-2000", "2 kW", "6 x 400W", "120m / 40m", "15,000-25,000 L", "3-10 acres, greenhouses, dairy", "KES 285,000"],
            [<strong key="sp3">SP-3000 &#9733;</strong>, "3 kW", "8 x 400W", "180m", "25,000-40,000 L", "10-25 acres, flower farms, schools", "KES 425,000"],
            ["SP-4000", "4 kW", "10 x 400W", "220m", "40,000-60,000 L", "25-50 acres, agro-processing", "KES 580,000"],
            ["SP-5000", "5 kW+", "14 x 400W", "280m", "60,000-100,000+ L", "50+ acres, irrigation schemes", "KES 850,000+"],
          ]}
          featuredRow={2}
        />
        <p className="text-sm text-gray-400 mt-4 text-center">Not sure which package? Tell us your acreage and water source — we will recommend the right system.</p>
      </Section>

      {/* Image + ROI Split */}
      <Section className="border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">The Numbers Speak for Themselves</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-1">Diesel Pump Running Cost</h3>
                <p className="text-sm text-gray-500">KES 1,500 - 4,000 per day in fuel, plus maintenance, oil changes, and breakdowns. That is KES 45,000 - 120,000 per month.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-1">Solar Pump Running Cost</h3>
                <p className="text-sm text-gray-500">KES 0 per day. Zero fuel. Zero grid bills. Minimal maintenance. The sun does not send invoices.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-1">Payback Period</h3>
                <p className="text-sm text-gray-500">Most systems pay for themselves in 12-24 months. After that, you are saving KES 500,000+ every year.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80"
              alt="Solar panel array powering agricultural pump"
              className="rounded-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* What's Included */}
      <Section>
        <SectionHeader title="What's Included in Every System" subtitle="Every solar pump package comes complete — no hidden costs, no surprise extras, no middlemen." />
        <div className="grid sm:grid-cols-2 gap-x-8">
          <IncludesItem>Complete solar array with mounting structure (hot-dip galvanized steel)</IncludesItem>
          <IncludesItem>Pump unit (Lorentz, Grundfos, Dayliff, CRI, or Franklin)</IncludesItem>
          <IncludesItem>MPPT or VFD controller with dry-run protection and LCD display</IncludesItem>
          <IncludesItem>Submersible-rated UV-resistant cables and connectors</IncludesItem>
          <IncludesItem>Professional installation and commissioning</IncludesItem>
          <IncludesItem>Operator training on-site</IncludesItem>
          <IncludesItem>Maintenance package (1-3 years depending on system)</IncludesItem>
          <IncludesItem>Manufacturer-backed warranty (5-10 years)</IncludesItem>
        </div>
      </Section>

      {/* Warranty & Monitoring */}
      <Section className="border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Warranty Coverage</h2>
            <p className="text-sm text-gray-500 mb-6">Every system is backed by the manufacturer and serviced locally in Kenya — no overseas claims or wait times.</p>
            <DataTable
              headers={["Package", "Warranty"]}
              rows={[
                ["SP-1000, SP-2000", "5 years comprehensive"],
                ["SP-3000, SP-4000", "7 years comprehensive"],
                ["SP-5000", "10 years comprehensive"],
              ]}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">PreciSense Monitoring</h2>
            <p className="text-sm text-gray-500 mb-6">Know exactly how your pump is performing from anywhere — flow rates, solar production, and fault alerts on your phone.</p>
            <DataTable
              headers={["Package", "Tier", "Duration"]}
              rows={[
                ["SP-1000", "Optional", "—"],
                ["SP-2000", "Basic", "12 months"],
                ["SP-3000", "Pro", "24 months"],
                ["SP-4000", "Business", "36 months"],
                ["SP-5000", "Enterprise", "Permanent"],
              ]}
              featuredRow={2}
            />
          </div>
        </div>
      </Section>

      {/* Component Standards */}
      <Section className="bg-navy-900 text-white">
        <SectionHeader title="Built with Components You Can Trust" subtitle="We only use proven, bankable components with robust local support and spare parts availability across Kenya." light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DarkCard title="Solar Panels" description="Tier-1 manufacturers: Jinko, Canadian Solar, JA Solar, Longi. 25-year performance warranty." />
          <DarkCard title="Pumps" description="Lorentz, Grundfos, Dayliff, CRI, Franklin — chosen based on your borehole depth and flow requirements." />
          <DarkCard title="Controllers" description="Lorentz, Grundfos, Schneider, ABB — with dry-run protection to safeguard your investment." />
          <DarkCard title="Cables" description="UV-resistant, submersible-rated cabling built for underground and underwater conditions." />
          <DarkCard title="Mounting" description="Hot-dip galvanized steel structures engineered for Kenya's wind loads and terrain." />
          <DarkCard title="Warranty" description="Manufacturer-backed, locally serviceable — no waiting for overseas parts or technicians." />
        </div>
      </Section>

      <CTASection title="Ready to Eliminate Fuel Costs?" subtitle="Request a free site assessment and detailed quotation — we respond within 24 hours, and site visits are free across Kenya." />
    </>
  );
}
