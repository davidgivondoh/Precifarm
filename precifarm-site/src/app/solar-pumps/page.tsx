import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  DataTable,
  IncludesItem,
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
        title="Zero Fuel Costs."
        titleAccent="Guaranteed Performance."
        subtitle="Fully integrated turnkey solar pump packages — panels, pump, controller, cabling, mounting, installation, and commissioning. All cash-purchase with manufacturer warranty."
        meta={[
          { icon: "&#128176;", text: "From KES 145,000" },
          { icon: "&#9878;", text: "99.2% Uptime Guarantee" },
          { icon: "&#128197;", text: "7-12 Day Installation" },
        ]}
      />

      {/* Packages Table */}
      <Section>
        <SectionHeader title="Solar Pump Packages" subtitle="Choose the right system for your farm size and water requirements." />
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
      </Section>

      {/* What's Included */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="What's Included in Every System" subtitle="Every solar pump package comes complete — no hidden costs, no surprises." />
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
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Warranty Coverage</h2>
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
            <h2 className="text-2xl font-bold mb-6">PreciSense Monitoring</h2>
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
        <SectionHeader title="Component Quality Standards" subtitle="Only proven, bankable components with robust local support." light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DarkCard title="Solar Panels" description="Tier-1: Jinko, Canadian Solar, JA Solar, Longi" />
          <DarkCard title="Pumps" description="Lorentz, Grundfos, Dayliff, CRI, Franklin" />
          <DarkCard title="Controllers" description="Lorentz, Grundfos, Schneider, ABB" />
          <DarkCard title="Cables" description="UV-resistant, submersible-rated" />
          <DarkCard title="Mounting" description="Hot-dip galvanized steel structures" />
          <DarkCard title="Warranty" description="Manufacturer-backed, locally serviceable" />
        </div>
      </Section>

      <CTASection title="Get Your Solar Pump System" subtitle="Request a free site assessment and detailed quotation — response within 24 hours." />
    </>
  );
}
