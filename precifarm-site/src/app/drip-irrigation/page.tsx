import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  DataTable,
  IncludesItem,
  CTASection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Precision Drip Irrigation — Precifarm Kenya",
  description:
    "Precision drip irrigation kits and systems from quarter-acre to 10+ acres. 90-95% water efficiency with agronomist support. From KES 45,000.",
};

export default function DripIrrigationPage() {
  return (
    <>
      <PageHero
        badge="&#128167; Precision Drip Irrigation"
        title="90-95% Water Efficiency."
        titleAccent="Maximum Yields."
        subtitle="From quarter-acre kitchen gardens to 10+ acre commercial farms. Professional installation, agronomist support, and precision water delivery for every crop."
        meta={[
          { icon: "&#128176;", text: "From KES 45,000" },
          { icon: "&#128167;", text: "Save 60% Water" },
          { icon: "&#127793;", text: "2-12 Months Agronomist Support" },
        ]}
      />

      {/* Why Drip */}
      <Section>
        <SectionHeader title="Why Drip Irrigation?" subtitle="The science is clear — drip irrigation outperforms every other method." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Save 60% Water", desc: "90-95% efficiency vs 50-60% for flood irrigation. Every drop counts." },
            { title: "+20-50% Yields", desc: "Consistent water delivery produces consistent, uniform harvests." },
            { title: "Cut Labor 50-70%", desc: "No manual watering — set it and run. Free your workforce for other tasks." },
            { title: "Reduce Disease", desc: "Dry foliage reduces fungal issues and crop loss significantly." },
          ].map((b) => (
            <div key={b.title} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quarter Acre */}
      <Section className="border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Quarter-Acre Kit</h2>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">0.25 Acres</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 45,000</span>
        </div>
        <p className="text-gray-500 mb-6">Best for: Kitchen gardens, trial plots, smallholder vegetables, tree seedlings</p>
        <DataTable
          headers={["Option", "Price"]}
          rows={[
            ["Kit Only (DIY)", "KES 45,000"],
            ["Kit + Installation", "KES 55,000"],
            ["Kit + Installation + Pump", "KES 95,000 - 150,000"],
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-x-8 mt-6">
          <IncludesItem>1,500m 16mm drip tape</IncludesItem>
          <IncludesItem>32mm HDPE main line</IncludesItem>
          <IncludesItem>1&quot; disc filter</IncludesItem>
          <IncludesItem>Complete fittings</IncludesItem>
          <IncludesItem>Layout design</IncludesItem>
          <IncludesItem>1 agronomist session</IncludesItem>
        </div>
      </Section>

      {/* Half Acre */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Half-Acre Kit</h2>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">0.5 Acres</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 75,000</span>
        </div>
        <p className="text-gray-500 mb-6">Best for: Smallholder vegetables, market gardens, tomatoes, capsicum, onions</p>
        <DataTable
          headers={["Option", "Price"]}
          rows={[
            ["Kit Only (DIY)", "KES 75,000"],
            ["Kit + Installation", "KES 90,000"],
            ["Kit + Solar Pump (SP-1000)", "KES 220,000"],
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-x-8 mt-6">
          <IncludesItem>3,000m 16mm drip tape</IncludesItem>
          <IncludesItem>40mm main line, 32mm sub-main</IncludesItem>
          <IncludesItem>1.5&quot; disc/screen filter</IncludesItem>
          <IncludesItem>All fittings included</IncludesItem>
          <IncludesItem>2 agronomist sessions</IncludesItem>
        </div>
      </Section>

      {/* One Acre (Featured) */}
      <Section className="border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">One-Acre Kit</h2>
            <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-bold">&#9733; Most Popular</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 85,000</span>
        </div>
        <p className="text-gray-500 mb-6">Best for: Commercial vegetable farming, intensive horticulture, export crops</p>
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
        <div className="grid sm:grid-cols-2 gap-x-8 mt-6">
          <IncludesItem>6,000m premium drip tape (0.4mm wall, UV-treated)</IncludesItem>
          <IncludesItem>50mm main line, 40mm sub-main</IncludesItem>
          <IncludesItem>2&quot; auto-flush filter</IncludesItem>
          <IncludesItem>Pressure regulation</IncludesItem>
          <IncludesItem>Farm survey + professional installation</IncludesItem>
          <IncludesItem>4 agronomist sessions</IncludesItem>
          <IncludesItem>1-year maintenance</IncludesItem>
        </div>
      </Section>

      {/* Multi-Acre */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Multi-Acre Systems</h2>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">2-10 Acres</span>
          </div>
        </div>
        <p className="text-gray-500 mb-6">Best for: Medium to large commercial farms, agro-processors, flower farms</p>
        <DataTable
          headers={["Scale", "Configuration", "Price"]}
          rows={[
            ["2 Acres", "2 Lines/Bed", "KES 240,000"],
            ["3 Acres", "2 Lines/Bed", "KES 350,000"],
            ["5 Acres", "2 Lines/Bed", "KES 550,000"],
            ["10 Acres", "2 Lines/Bed", "KES 1,050,000"],
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-x-8 mt-6">
          <IncludesItem>Heavy-duty drip tape</IncludesItem>
          <IncludesItem>Industrial filtration (sand + disc)</IncludesItem>
          <IncludesItem>Fertigation integration</IncludesItem>
          <IncludesItem>Zone control valves</IncludesItem>
          <IncludesItem>Optional automation</IncludesItem>
          <IncludesItem>PreciSense soil monitoring</IncludesItem>
          <IncludesItem>Complete installation</IncludesItem>
          <IncludesItem>12-month agronomist partnership</IncludesItem>
        </div>
      </Section>

      {/* Components Price List */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="Components Price List" subtitle="Individual and replacement components available for purchase." />
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

      <CTASection title="Start Saving Water Today" subtitle="Get a customized irrigation plan and quote for your farm — response within 24 hours." />
    </>
  );
}
