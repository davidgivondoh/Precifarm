import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  Step,
  DataTable,
  IncludesItem,
  DarkCard,
  CTASection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Farm Design Services — Precifarm Kenya",
  description:
    "Principal engineering consulting for medium and large-scale agricultural development. Irrigation design, water & energy integration, and turnkey farm development from 5 to 500+ hectares.",
};

export default function FarmDesignPage() {
  return (
    <>
      <PageHero
        badge="&#128208; Farm Design Services"
        title="Your Farm,"
        titleAccent="Engineered for Profit."
        subtitle="Great farms are not accidents — they are engineered. We bring together water sourcing, pumping, storage, distribution, irrigation, energy, and automation into a single integrated design that maximizes your return on every hectare."
        backgroundImage="/images/water-tanks.jpg"
        meta={[
          { icon: "&#128207;", text: "5 - 500+ Hectares" },
          { icon: "&#128176;", text: "From KES 150,000" },
          { icon: "&#128197;", text: "2-18 Month Timelines" },
        ]}
      />

      {/* Image + Intro Split */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Invest in Professional Farm Design?</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              We have seen it too many times: farms built piece by piece, with mismatched pumps, undersized pipes, and irrigation systems that waste water and energy. The cost of poor design compounds every single season.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Professional engineering design typically saves 15-30% on infrastructure costs by right-sizing every component from the start. More importantly, it ensures your farm performs at its designed capacity from day one — no trial and error, no expensive retrofits.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Whether you are developing virgin land in Laikipia, expanding an existing operation in Naivasha, or planning a county government irrigation scheme, our engineers bring the same rigor to every project.
            </p>
          </div>
          <div>
            <img
              src="/images/pipe-fittings.jpg"
              alt="Close-up of drip irrigation pipe fittings and compression connectors on farm soil"
              className="rounded-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Design Process */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="Our Design Process" subtitle="A proven three-phase approach that de-risks your investment and delivers a farm that works." />
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <Step number="01" title="Discovery" description="Site visit, stakeholder needs, water assessment, soil analysis, crop planning. We understand your land before we draw a single line. 2-3 weeks." />
          <Step number="02" title="Design" description="Engineering calculations, hydraulics, specifications, BoQ, and cost estimate. Every pipe, pump, and panel sized for your exact conditions. 3-6 weeks." />
          <Step number="03" title="Implementation" description="Procurement, installation, quality control, supervision, testing, and commissioning. We stay until the water flows and the crops grow. 4-16 weeks." />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/solar-pump-components.jpg"
              alt="Collection of submersible pumps and solar panels for agricultural water systems"
              className="rounded-2xl w-full h-72 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">What Makes Our Approach Different</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-navy-800 text-xs font-bold shrink-0 mt-0.5">&#10003;</span>
                <p className="text-sm text-gray-600">We are farmers and engineers — not just consultants. We understand crop economics, not just pipe hydraulics.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-navy-800 text-xs font-bold shrink-0 mt-0.5">&#10003;</span>
                <p className="text-sm text-gray-600">Every design is optimized for ROI, not just technical perfection. We size systems to your budget and growth plan.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-navy-800 text-xs font-bold shrink-0 mt-0.5">&#10003;</span>
                <p className="text-sm text-gray-600">We use locally available, serviceable components. No exotic equipment that cannot be maintained in Kenya.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-navy-800 text-xs font-bold shrink-0 mt-0.5">&#10003;</span>
                <p className="text-sm text-gray-600">Our designs include operator training and maintenance plans — so your team can run the farm long after we leave.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Tier 1 */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Tier 1 — Irrigation Design</h2>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">5-20 Hectares</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 150,000</span>
        </div>
        <p className="text-gray-500 mb-8">Focused irrigation engineering for farms that need precision water delivery designed right the first time.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h4 className="font-bold mb-4">Scope of Work</h4>
            <div className="space-y-1">
              <IncludesItem>Topographic survey of farm</IncludesItem>
              <IncludesItem>Water source capacity, quality, and reliability assessment</IncludesItem>
              <IncludesItem>Complete pipe sizing and hydraulic pressure calculations</IncludesItem>
              <IncludesItem>Block planning, zone allocation, and emitter mapping</IncludesItem>
              <IncludesItem>Pump, filter, pipe, and emitter specifications</IncludesItem>
              <IncludesItem>Detailed bill of quantities with current pricing</IncludesItem>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h4 className="font-bold mb-4">Deliverables</h4>
            <div className="space-y-1">
              <IncludesItem>AutoCAD/GIS farm layout with dimensions</IncludesItem>
              <IncludesItem>Hydraulic calculations (flow rates, pressures, losses)</IncludesItem>
              <IncludesItem>Equipment specifications (exact models and quantities)</IncludesItem>
              <IncludesItem>Itemized Bill of Quantities</IncludesItem>
              <IncludesItem>Installation drawings for contractors</IncludesItem>
              <IncludesItem>Operation and maintenance manual</IncludesItem>
            </div>
          </div>
        </div>

        <DataTable
          headers={["Scale", "Design Fee"]}
          rows={[
            ["5-10 hectares", "KES 150,000"],
            ["10-20 hectares", "KES 250,000"],
            ["Implementation supervision (add-on)", "+ KES 75,000 - 125,000"],
          ]}
        />
        <p className="text-sm text-gray-400 mt-4">Timeline: 2-4 weeks design, 4-8 weeks implementation</p>
      </Section>

      {/* Tier 2 */}
      <Section className="border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Tier 2 — Integrated Water &amp; Energy</h2>
            <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-bold">&#9733; Most Requested</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 450,000</span>
        </div>
        <p className="text-gray-500 mb-8">20-100 hectares. The complete solution — irrigation, solar energy, pump stations, automation, and fertigation designed as one integrated system. This is where the real savings happen.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h4 className="font-bold mb-4">Additional Scope</h4>
            <div className="space-y-1">
              <IncludesItem>Solar energy system sizing, panel layout, inverter spec</IncludesItem>
              <IncludesItem>Full pump station engineering</IncludesItem>
              <IncludesItem>Tank sizing, placement, and structural specifications</IncludesItem>
              <IncludesItem>Generator and grid backup integration design</IncludesItem>
              <IncludesItem>SCADA/VFD automation architecture</IncludesItem>
              <IncludesItem>Chemical fertigation injection system design</IncludesItem>
              <IncludesItem>Multi-zone valve scheduling</IncludesItem>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h4 className="font-bold mb-4">Additional Deliverables</h4>
            <div className="space-y-1">
              <IncludesItem>Electrical single-line diagrams and load schedules</IncludesItem>
              <IncludesItem>Pump station civil and mechanical drawings</IncludesItem>
              <IncludesItem>PLC/SCADA control system design</IncludesItem>
              <IncludesItem>Solar production and ROI projections</IncludesItem>
              <IncludesItem>5-year preventive maintenance plan</IncludesItem>
              <IncludesItem>Operator and management training program</IncludesItem>
            </div>
          </div>
        </div>

        <DataTable
          headers={["Scale", "Design Fee"]}
          rows={[
            ["20-50 hectares", "KES 450,000"],
            ["50-100 hectares", "KES 750,000"],
            ["Project management (add-on)", "+ KES 200,000 - 350,000"],
          ]}
        />
        <p className="text-sm text-gray-400 mt-4">Timeline: 4-8 weeks design, 3-6 months implementation</p>
      </Section>

      {/* Tier 3 */}
      <Section className="bg-navy-900 text-white">
        <SectionHeader title="Tier 3 — Turnkey Farm Development" subtitle="100+ hectares. From raw land to first harvest. Complete farm development for investors, institutions, and government projects." light />
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <DarkCard
            title="Full Scope"
            description="Market analysis and feasibility study. Water availability and rights assessment. ROI modeling and financial projections. Complete farm master planning and phasing. All civil, mechanical, and electrical engineering. Vendor management, procurement, and quality assurance."
          />
          <DarkCard
            title="Delivery"
            description="Construction supervision and quality control at every phase. System testing, performance verification, and handover certification. Operations team recruitment and training. Agronomist support through first harvest season to prove the design works."
          />
        </div>
        <DataTable
          headers={["Fee Structure", "Detail"]}
          rows={[
            ["Design fees", "3-5% of project value"],
            ["Project management", "8-12% of project value"],
            ["Typical project range", "KES 20M - 500M+"],
          ]}
        />
        <p className="text-gray-400 text-center mt-4">Timeline: 6-18 months depending on scale and complexity</p>
      </Section>

      <CTASection title="Let's Engineer Your Farm for Success" subtitle="Tell us about your project — acreage, location, crops, and budget — and we will scope the right solution. First consultation is free." />
    </>
  );
}
