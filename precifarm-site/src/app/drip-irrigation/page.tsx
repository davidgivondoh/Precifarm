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
  title: "Drip Irrigation Kits Kenya — Quarter-Acre to 10+ Acres",
  description:
    "Precision drip irrigation kits and systems for Kenyan farmers. Save 60% water, boost yields by 50%. Quarter-acre kits from KES 45,000 with professional installation and agronomist support across all 47 counties.",
  keywords: [
    "drip irrigation kit Kenya",
    "drip irrigation system",
    "drip tape Kenya price",
    "precision irrigation",
    "irrigation kit price Kenya",
    "drip irrigation installation",
    "vegetable irrigation Kenya",
    "greenhouse irrigation",
    "smallholder irrigation kit",
    "drip irrigation components Kenya",
  ],
  alternates: { canonical: "https://precifarm.com/drip-irrigation" },
  openGraph: {
    title: "Drip Irrigation Kits Kenya — From KES 45,000",
    description: "Save 60% water and boost yields by 50% with precision drip irrigation. Kits from quarter-acre to 10+ acres.",
    url: "https://precifarm.com/drip-irrigation",
    images: [{ url: "/images/dripmain.jpg", width: 1200, height: 630, alt: "Drip irrigation system installed on Kenyan farmland" }],
  },
};

export default function DripIrrigationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/drip-kit-onions.jpg"
            alt="Lush onions growing with precision drip irrigation lines on Kenyan farmland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-navy-900/90 via-navy-900/70 to-navy-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-white/15 text-white backdrop-blur-sm">
            Precision Drip Irrigation
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-3 leading-[1.1] tracking-tight max-w-2xl">
            Every Drop Counts.
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-300 mb-6 leading-[1.1] tracking-tight max-w-2xl">
            Every Harvest Proves It.
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8 sm:mb-10">
            Deliver water directly to the root zone — no waste, no runoff, no guesswork. Kenyan farmers using our systems report 20-50% higher yields while using 60% less water.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-base"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#kits"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              View Drip Kits
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-white block">KES 45K</span>
              <span className="text-xs text-gray-300">Starting Price</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-white block">60%</span>
              <span className="text-xs text-gray-300">Water Saved</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-white block">+50%</span>
              <span className="text-xs text-gray-300">Higher Yields</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-white block">500+</span>
              <span className="text-xs text-gray-300">Farms Installed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/dripmain.jpg"
              alt="Drip irrigation manifold with red valves installed on Kenyan red soil farmland"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Built for Kenyan Growing Conditions</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              From the volcanic soils of Mt. Kenya to the sandy loams of the Coast, our drip systems are designed around your specific soil type, crop selection, and water source. We do not sell generic kits — every installation is mapped and sized for your farm.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Whether you grow tomatoes, capsicum, onions, French beans for export, or flowers for the Nairobi auction, precision drip irrigation is the single most impactful investment you can make.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Drip */}
      <Section className="bg-gray-50">
        <SectionHeader title="Why Drip Irrigation?" subtitle="The economics are clear — drip pays for itself within one or two growing seasons." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stat: "60%", label: "Water Saved", desc: "90-95% efficiency vs 50-60% for flood irrigation. In water-scarce areas, this is the difference between a crop and a loss." },
            { stat: "+50%", label: "Higher Yields", desc: "Consistent, precise water delivery produces uniform crops with better size, quality, and market value." },
            { stat: "70%", label: "Less Labor", desc: "No manual watering crews. Set your system and redirect your workforce to harvesting, packing, and selling." },
            { stat: "80%", label: "Less Disease", desc: "Dry foliage means fewer fungal infections. Less crop loss, fewer chemicals, higher profit margins." },
          ].map((b) => (
            <div key={b.label} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
              <span className="text-3xl font-extrabold text-green-600 block mb-1">{b.stat}</span>
              <h3 className="text-base font-bold text-navy-900 mb-2">{b.label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="How It Works" subtitle="From your first call to water flowing at the root zone — here is what to expect." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step number="01" title="Farm Survey" description="We visit your farm, assess soil type, water source, slope, and crop plan to design the optimal layout." />
          <Step number="02" title="System Design" description="Custom layout with pipe sizing, emitter spacing, filtration, and pressure calculations for your exact conditions." />
          <Step number="03" title="Installation" description="Professional team lays mainlines, sub-mains, and drip tape. Filters and valves installed and pressure-tested." />
          <Step number="04" title="Agronomist Support" description="Ongoing guidance on irrigation scheduling, fertigation, and crop management to maximize your returns." />
        </div>
      </Section>

      {/* Proven Results */}
      <section className="relative h-56 sm:h-72 md:h-88 overflow-hidden">
        <img
          src="/images/farmer3.jpeg"
          alt="Kenyan farmers harvesting tomatoes grown with drip irrigation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-900/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-10 w-full">
            <p className="text-white text-2xl md:text-3xl font-bold max-w-2xl">
              500+ farms installed across 47 counties. If it grows in Kenyan soil, we have irrigated it.
            </p>
          </div>
        </div>
      </section>

      {/* Drip Kits */}
      <Section id="kits">
        <SectionHeader title="Drip Irrigation Kits" subtitle="Choose the right kit for your farm size. Every kit includes drip tape, pipes, filters, fittings, and a custom layout design." />

        {/* Quarter Acre */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-navy-900">Quarter-Acre Kit</h3>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">0.25 Acres</span>
            </div>
            <span className="text-xl font-extrabold text-navy-900">From KES 45,000</span>
          </div>
          <p className="text-gray-500 text-sm mb-5">Perfect for kitchen gardens, trial plots, smallholder vegetables, and tree seedlings. Start small, prove the results, and scale up.</p>
          <DataTable
            headers={["Option", "Price"]}
            rows={[
              ["Kit Only (DIY)", "KES 45,000"],
              ["Kit + Installation", "KES 55,000"],
              ["Kit + Installation + Pump", "KES 95,000 - 150,000"],
            ]}
          />
          <div className="grid sm:grid-cols-2 gap-x-8 mt-5">
            <IncludesItem>1,500m 16mm drip tape</IncludesItem>
            <IncludesItem>32mm HDPE main line</IncludesItem>
            <IncludesItem>1&quot; disc filter</IncludesItem>
            <IncludesItem>Complete fittings</IncludesItem>
            <IncludesItem>Layout design</IncludesItem>
            <IncludesItem>1 agronomist session</IncludesItem>
          </div>
        </div>

        {/* Half Acre */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-navy-900">Half-Acre Kit</h3>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">0.5 Acres</span>
            </div>
            <span className="text-xl font-extrabold text-navy-900">From KES 75,000</span>
          </div>
          <p className="text-gray-500 text-sm mb-5">Ideal for smallholder commercial farming — tomatoes, capsicum, onions, and market vegetables. The sweet spot for farmers transitioning from rain-fed to irrigated agriculture.</p>
          <DataTable
            headers={["Option", "Price"]}
            rows={[
              ["Kit Only (DIY)", "KES 75,000"],
              ["Kit + Installation", "KES 90,000"],
              ["Kit + Solar Pump (SP-1000)", "KES 220,000"],
            ]}
          />
          <div className="grid sm:grid-cols-2 gap-x-8 mt-5">
            <IncludesItem>3,000m 16mm drip tape</IncludesItem>
            <IncludesItem>40mm main line, 32mm sub-main</IncludesItem>
            <IncludesItem>1.5&quot; disc/screen filter</IncludesItem>
            <IncludesItem>All fittings included</IncludesItem>
            <IncludesItem>2 agronomist sessions</IncludesItem>
          </div>
        </div>

        {/* One Acre — Featured */}
        <div className="bg-white border-2 border-green-500 rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 relative shadow-lg">
          <span className="absolute -top-3 right-6 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-navy-900">One-Acre Kit</h3>
              <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-bold">1 Acre</span>
            </div>
            <span className="text-xl font-extrabold text-navy-900">From KES 85,000</span>
          </div>
          <p className="text-gray-500 text-sm mb-5">Our most requested package. Built for serious commercial vegetable farming, intensive horticulture, and export-grade crop production.</p>
          <DataTable
            headers={["Configuration", "Kit Only", "Installed"]}
            rows={[
              ["2 Lines/Bed", "KES 120,000", "KES 145,000"],
              ["3 Lines/Bed", "KES 145,000", "KES 175,000"],
              ["Single Line", "KES 85,000", "KES 105,000"],
              ["Gravity-Fed (kit + 10,000L tank)", "—", "KES 185,000"],
              ["Solar Powered (kit + SP-2000 + tank)", "—", "KES 420,000"],
              [<strong key="prem">Premium Solar (kit + SP-3000 + sensors)</strong>, "—", "KES 550,000"],
            ]}
            featuredRow={5}
          />
          <div className="grid sm:grid-cols-2 gap-x-8 mt-5">
            <IncludesItem>6,000m premium drip tape (0.4mm wall, UV-treated)</IncludesItem>
            <IncludesItem>50mm main line, 40mm sub-main</IncludesItem>
            <IncludesItem>2&quot; auto-flush filter</IncludesItem>
            <IncludesItem>Pressure regulation</IncludesItem>
            <IncludesItem>Farm survey + professional installation</IncludesItem>
            <IncludesItem>4 agronomist sessions</IncludesItem>
            <IncludesItem>1-year maintenance</IncludesItem>
          </div>
        </div>

        {/* Multi-Acre */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-navy-900">Multi-Acre Systems</h3>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">2-10 Acres</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-5">Engineered for medium to large commercial operations — flower farms, agro-processors, institutional farms, and county government projects.</p>
          <DataTable
            headers={["Scale", "Configuration", "Price"]}
            rows={[
              ["2 Acres", "2 Lines/Bed", "KES 240,000"],
              ["3 Acres", "2 Lines/Bed", "KES 350,000"],
              ["5 Acres", "2 Lines/Bed", "KES 550,000"],
              ["10 Acres", "2 Lines/Bed", "KES 1,050,000"],
            ]}
          />
          <div className="grid sm:grid-cols-2 gap-x-8 mt-5">
            <IncludesItem>Heavy-duty drip tape</IncludesItem>
            <IncludesItem>Industrial filtration (sand + disc)</IncludesItem>
            <IncludesItem>Fertigation integration</IncludesItem>
            <IncludesItem>Zone control valves</IncludesItem>
            <IncludesItem>Optional automation</IncludesItem>
            <IncludesItem>PreciSense soil monitoring</IncludesItem>
            <IncludesItem>Complete installation</IncludesItem>
            <IncludesItem>12-month agronomist partnership</IncludesItem>
          </div>
        </div>
      </Section>

      {/* Components Price List */}
      <Section className="bg-gray-50">
        <SectionHeader title="Components Price List" subtitle="Need replacements or building a custom system? Individual components available for purchase and delivery across Kenya." />
        <DataTable
          headers={["Component", "Specification", "Unit Price"]}
          rows={[
            ["Drip Tape 16mm (0.3mm wall)", "1,000m roll, 20cm spacing", "KES 7,500"],
            ["Drip Tape 16mm (0.4mm wall)", "1,000m roll, 20cm spacing", "KES 9,000"],
            ["Drip Tape 16mm (0.8mm wall)", "1,000m roll, 15cm spacing", "KES 14,000"],
            ["HDPE Pipe (32mm)", "Per meter", "KES 85"],
            ["HDPE Pipe (40mm)", "Per meter", "KES 120"],
            ["HDPE Pipe (50mm)", "Per meter", "KES 180"],
            ['Disc Filter (1.5")', "120 mesh", "KES 3,500"],
            ['Disc Filter (2")', "120 mesh", "KES 5,500"],
            ['Screen Filter (2")', "120 mesh", "KES 4,200"],
            ['Pressure Regulator (1.5")', "—", "KES 2,800"],
            ["End Cap (16mm)", "Pack of 50", "KES 800"],
            ["Connector (16mm)", "Pack of 50", "KES 1,200"],
            ["Take-off Valve (16mm)", "Each", "KES 35"],
          ]}
        />
      </Section>

      <CTASection title="Ready to Grow More with Less Water?" subtitle="Get a customized irrigation plan and quote for your farm — we respond within 24 hours and site visits are always free." />
    </>
  );
}
