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
        title="From Concept"
        titleAccent="to Harvest"
        subtitle="Principal engineering consulting for medium and large-scale agricultural development. We integrate water sourcing, pumping, storage, distribution, irrigation, and energy into a single engineered solution optimized for ROI."
        meta={[
          { icon: "&#128207;", text: "5 - 500+ Hectares" },
          { icon: "&#128176;", text: "From KES 150,000" },
          { icon: "&#128197;", text: "2-18 Month Timelines" },
        ]}
      />

      {/* Design Process */}
      <Section>
        <SectionHeader title="Our Design Process" subtitle="A proven three-phase approach from discovery to implementation." />
        <div className="grid sm:grid-cols-3 gap-8">
          <Step number="01" title="Discovery" description="Site visit, stakeholder needs, water assessment, soil analysis, crop planning. 2-3 weeks." />
          <Step number="02" title="Design" description="Engineering calculations, hydraulics, specifications, BoQ, cost estimate. 3-6 weeks." />
          <Step number="03" title="Implementation" description="Procurement, installation, quality control, supervision, testing, commissioning. 4-16 weeks." />
        </div>
      </Section>

      {/* Tier 1 */}
      <Section className="border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Tier 1 — Irrigation Design</h2>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">5-20 Hectares</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 150,000</span>
        </div>
        <p className="text-gray-500 mb-8">Targeted irrigation design without full energy integration</p>

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
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">Tier 2 — Integrated Water &amp; Energy</h2>
            <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-bold">&#9733; Most Requested</span>
          </div>
          <span className="text-2xl font-extrabold text-navy-900">From KES 450,000</span>
        </div>
        <p className="text-gray-500 mb-8">20-100 hectares. Everything in Tier 1, plus energy systems, automation, and control architecture.</p>

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
        <SectionHeader title="Tier 3 — Turnkey Farm Development" subtitle="100+ hectares. Complete farm development from feasibility to first harvest season." light />
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <DarkCard
            title="Full Scope"
            description="Market analysis, water availability, ROI modeling. Complete farm master planning and phasing. All civil, mechanical, and electrical engineering. Vendor management and quality assurance."
          />
          <DarkCard
            title="Delivery"
            description="Construction supervision and quality control. Testing, handover, and certification. Operations team training. Agronomist support through first harvest season."
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
        <p className="text-gray-400 text-center mt-4">Timeline: 6-18 months depending on scale</p>
      </Section>

      <CTASection title="Let's Design Your Farm" subtitle="Tell us about your project and we'll scope the right engineering solution for you." />
    </>
  );
}
