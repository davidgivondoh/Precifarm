import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  DataTable,
  IncludesItem,
  Step,
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
        title="Every Drop Counts."
        titleAccent="Every Harvest Proves It."
        subtitle="Water is your most valuable input. Drip irrigation delivers it directly to the root zone — no waste, no runoff, no guesswork. Kenyan farmers using our systems report 20-50% higher yields while using 60% less water."
        meta={[
          { icon: "&#128176;", text: "From KES 45,000" },
          { icon: "&#128167;", text: "Save 60% Water" },
          { icon: "&#127793;", text: "2-12 Months Agronomist Support" },
        ]}
      />

      {/* Image + Intro Split */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/drip-field-redsoil.jpg"
              alt="Drip irrigation lines installed on rows of red Kenyan soil farmland"
              className="rounded-2xl w-full h-80 object-cover"
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

      {/* Why Drip */}
      <Section>
        <SectionHeader title="Why Drip Irrigation?" subtitle="The economics are clear — drip pays for itself within one or two growing seasons." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Save 60% Water", desc: "90-95% efficiency vs 50-60% for flood irrigation. In water-scarce areas, this is the difference between a crop and a loss." },
            { title: "+20-50% Yields", desc: "Consistent, precise water delivery produces uniform crops with better size, quality, and market value." },
            { title: "Cut Labor 50-70%", desc: "No manual watering crews. Set your system and redirect your workforce to harvesting, packing, and selling." },
            { title: "Reduce Disease", desc: "Dry foliage means fewer fungal infections. Less crop loss, fewer chemicals, higher profit margins." },
          ].map((b) => (
            <div key={b.title} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Crops Image Split */}
      <Section className="border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Proven Results Across Every Crop</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our systems are producing results on farms growing tomatoes, onions, capsicum, French beans, strawberries, herbs, flowers, tree seedlings, avocados, macadamia, and many more. If it grows in Kenyan soil, we have irrigated it.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <span className="text-2xl font-extrabold text-navy-900 block">500+</span>
                <span className="text-xs text-gray-500">Farms Installed</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <span className="text-2xl font-extrabold text-navy-900 block">47</span>
                <span className="text-xs text-gray-500">Counties Served</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/crops-drip.jpg"
              alt="Lush green onions growing with drip irrigation tape on rich soil"
              className="rounded-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Quarter Acre */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Quarter-Acre Kit</h2>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">0.25 Acres</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 45,000</span>
        </div>
        <p className="text-gray-500 mb-6">Perfect for kitchen gardens, trial plots, smallholder vegetables, and tree seedlings. Start small, prove the results, and scale up.</p>
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
      <Section className="border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Half-Acre Kit</h2>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">0.5 Acres</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 75,000</span>
        </div>
        <p className="text-gray-500 mb-6">Ideal for smallholder commercial farming — tomatoes, capsicum, onions, and market vegetables. The sweet spot for farmers transitioning from rain-fed to irrigated agriculture.</p>
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
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">One-Acre Kit</h2>
            <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-bold">&#9733; Most Popular</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 85,000</span>
        </div>
        <p className="text-gray-500 mb-6">Our most requested package. Built for serious commercial vegetable farming, intensive horticulture, and export-grade crop production.</p>
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
      <Section className="border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Multi-Acre Systems</h2>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">2-10 Acres</span>
          </div>
        </div>
        <p className="text-gray-500 mb-6">Engineered for medium to large commercial operations — flower farms, agro-processors, institutional farms, and county government projects.</p>
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
      <Section>
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
