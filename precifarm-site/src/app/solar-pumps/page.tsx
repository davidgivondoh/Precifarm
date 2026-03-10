import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  SectionHeader,
  DataTable,
  IncludesItem,
  Step,
  CTASection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Solar Water Pumps Kenya — Borehole & River Pumping Systems",
  description:
    "Turnkey solar water pumping systems for boreholes, rivers, and dams in Kenya. From KES 145,000 with 99.2% uptime guarantee and 25-year panel warranty. Eliminate diesel costs and pump free water with solar energy.",
  keywords: [
    "solar water pump Kenya",
    "solar borehole pump",
    "solar pump price Kenya",
    "solar water pumping system",
    "borehole pump solar powered",
    "river water pump solar",
    "agricultural solar pump",
    "Lorentz pump Kenya",
    "solar pump installation",
    "off-grid water pump Kenya",
  ],
  alternates: { canonical: "https://precifarm.com/solar-pumps" },
  openGraph: {
    title: "Solar Water Pumps Kenya — From KES 145,000",
    description: "Turnkey solar water pumping for boreholes, rivers, and dams. 99.2% uptime, 25-year warranty, zero fuel costs.",
    url: "https://precifarm.com/solar-pumps",
    images: [{ url: "/images/pump5.jpg", width: 1200, height: 630, alt: "Solar water pump system installed on a Kenyan farm" }],
  },
};

export default function SolarPumpsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pump5.jpg"
            alt="Solar-powered water pump delivering water on a Kenyan farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-white/15 text-white backdrop-blur-sm">
            Solar Pumping Systems
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-3 leading-[1.1] tracking-tight max-w-2xl">
            Stop Paying for Diesel.
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-300 mb-6 leading-[1.1] tracking-tight max-w-2xl">
            Start Pumping Free Water.
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
            Turnkey solar pump systems that deliver water every single day — no fuel bills, no generator noise, no KPLC dependency. Just sunlight and water.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-base"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#packages"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              View Packages
            </Link>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">KES 145K</span>
              <span className="text-xs text-gray-300">Starting Price</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">99.2%</span>
              <span className="text-xs text-gray-300">Uptime Guarantee</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">7-12</span>
              <span className="text-xs text-gray-300">Days to Install</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">25 yr</span>
              <span className="text-xs text-gray-300">System Lifespan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Water Security for Every Farm in Kenya</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Whether you are irrigating tomatoes in Kajiado, running a dairy in Nyandarua, or supplying water to a school in Turkana — our solar pump systems are engineered for Kenyan conditions. High heat, dusty environments, deep boreholes, and remote locations are what we build for.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Every system pays for itself within 12-24 months through fuel savings alone. After that, your water is essentially free for the next 25 years.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden bg-white p-6">
            <img
              src="/images/solar-pumps-hero.png"
              alt="Range of submersible pumps and solar panels available from Precifarm"
              className="w-full h-72 object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Diesel vs Solar Comparison */}
      <Section className="bg-gray-50">
        <SectionHeader title="Why Switch to Solar?" subtitle="See exactly how much you save when you replace diesel or grid-powered pumping with solar." />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Diesel Card */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-red-50 px-8 py-5 border-b border-red-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Old Way</p>
                  <h3 className="text-xl font-bold text-gray-900">Diesel Pump</h3>
                </div>
                <span className="text-3xl">&#9981;&#65039;</span>
              </div>
            </div>
            <div className="p-8 space-y-5">
              {[
                { label: "Daily fuel", value: "KES 1,500 - 4,000" },
                { label: "Monthly cost", value: "KES 45,000 - 120,000" },
                { label: "Annual cost", value: "KES 540,000 - 1.4M" },
                { label: "Maintenance", value: "Oil, filters, breakdowns" },
                { label: "Lifespan", value: "3 - 5 years" },
                { label: "Noise &amp; emissions", value: "High" },
                { label: "Reliability", value: "Fuel-dependent" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className="text-sm font-bold text-red-600">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solar Card */}
          <div className="bg-white rounded-2xl border-2 border-green-500 overflow-hidden relative shadow-lg">
            <span className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</span>
            <div className="bg-green-50 px-8 py-5 border-b border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-1">Smart Way</p>
                  <h3 className="text-xl font-bold text-gray-900">Solar Pump</h3>
                </div>
                <span className="text-3xl">&#9728;&#65039;</span>
              </div>
            </div>
            <div className="p-8 space-y-5">
              {[
                { label: "Daily fuel", value: "KES 0", highlight: true },
                { label: "Monthly cost", value: "KES 0", highlight: true },
                { label: "Annual cost", value: "KES 0", highlight: true },
                { label: "Maintenance", value: "Annual check-up only", highlight: false },
                { label: "Lifespan", value: "25+ years", highlight: false },
                { label: "Noise &amp; emissions", value: "None", highlight: false },
                { label: "Reliability", value: "99.2% uptime", highlight: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <span className={`text-sm font-bold ${item.highlight ? "text-green-600 bg-green-50 px-3 py-1 rounded-full" : "text-green-700"}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Savings summary */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Your Savings at a Glance</p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <span className="text-4xl font-extrabold text-navy-900 block">12-24</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider block mt-1">Months to Payback</span>
              <p className="text-sm text-gray-500 mt-2">System pays for itself through fuel &amp; maintenance savings</p>
            </div>
            <div className="text-center sm:border-x sm:border-gray-100 sm:px-8">
              <span className="text-4xl font-extrabold text-green-600 block">500K+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider block mt-1">KES Saved Per Year</span>
              <p className="text-sm text-gray-500 mt-2">After payback, every shilling stays in your pocket</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-extrabold text-navy-900 block">25+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider block mt-1">Years of Free Water</span>
              <p className="text-sm text-gray-500 mt-2">Solar panels keep producing long after they have paid off</p>
            </div>
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
      <Section id="packages">
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

      {/* Large installation image */}
      <section className="relative h-[350px] overflow-hidden">
        <img
          src="/images/solar-pump-irrigation-system.webp"
          alt="Technician installing elevated solar panel array for irrigation pump system"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-10 w-full">
            <p className="text-white text-2xl md:text-3xl font-bold max-w-2xl">
              From single-panel domestic setups to 14-panel commercial arrays — we engineer systems that scale with your farm.
            </p>
          </div>
        </div>
      </section>

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

      {/* Water source image + use cases */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/sp100.png"
              alt="Submersible pump with solar panel delivering water"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Works with Any Water Source</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our systems pump from boreholes up to 280m deep, rivers, dams, water pans, and shallow wells. We match the pump type to your specific water source and terrain.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Boreholes", desc: "Up to 280m depth" },
                { title: "Rivers & Dams", desc: "Surface pumping" },
                { title: "Water Pans", desc: "Open water sources" },
                { title: "Shallow Wells", desc: "Under 25m depth" },
              ].map((s) => (
                <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-navy-900">{s.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTASection title="Ready to Eliminate Fuel Costs?" subtitle="Request a free site assessment and detailed quotation — we respond within 24 hours, and site visits are free across Kenya." />
    </>
  );
}
