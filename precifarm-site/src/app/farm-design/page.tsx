import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  SectionHeader,
  Step,
  DataTable,
  IncludesItem,
  CTASection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Farm Design & Agricultural Engineering Services Kenya",
  description:
    "Professional farm design and agricultural engineering for 5 to 500+ hectares in Kenya. Irrigation design, solar energy integration, water systems, and turnkey farm development. Save 15-30% on infrastructure costs.",
  keywords: [
    "farm design Kenya",
    "agricultural engineering Kenya",
    "irrigation design consulting",
    "farm planning services",
    "agricultural consulting Kenya",
    "farm infrastructure design",
    "turnkey farm development",
    "irrigation engineering",
    "farm master planning",
    "commercial farm design Kenya",
  ],
  alternates: { canonical: "https://precifarm.com/farm-design" },
  openGraph: {
    title: "Farm Design & Agricultural Engineering — Precifarm Kenya",
    description: "Professional farm design from 5 to 500+ hectares. Irrigation, solar, water systems, and turnkey development.",
    url: "https://precifarm.com/farm-design",
    images: [{ url: "/images/water-irrigation-large-scale.jpg", width: 1200, height: 630, alt: "Large-scale farm design with solar irrigation infrastructure" }],
  },
};

export default function FarmDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/water-irrigation-large-scale.jpg"
            alt="Large-scale solar panel array powering irrigation infrastructure on a Kenyan farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-navy-900/90 via-navy-900/70 to-navy-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-white/15 text-white backdrop-blur-sm">
            Farm Design Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-3 leading-[1.1] tracking-tight max-w-2xl">
            Your Farm,
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-300 mb-6 leading-[1.1] tracking-tight max-w-2xl">
            Engineered for Profit.
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
            Great farms are not accidents — they are engineered. We bring together water, pumping, storage, irrigation, energy, and automation into a single integrated design that maximizes your return on every hectare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-base"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="#tiers"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              View Service Tiers
            </Link>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">5-500+</span>
              <span className="text-xs text-gray-300">Hectares</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">KES 150K</span>
              <span className="text-xs text-gray-300">Starting Price</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">15-30%</span>
              <span className="text-xs text-gray-300">Cost Savings</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">38</span>
              <span className="text-xs text-gray-300">Counties Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Invest in Professional Farm Design?</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              We have seen it too many times: farms built piece by piece, with mismatched pumps, undersized pipes, and irrigation systems that waste water and energy. The cost of poor design compounds every single season.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Professional engineering design typically saves 15-30% on infrastructure costs by right-sizing every component from the start. More importantly, it ensures your farm performs at its designed capacity from day one.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Whether you are developing virgin land in Laikipia, expanding an existing operation in Naivasha, or planning a county government irrigation scheme, our engineers bring the same rigor to every project.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/farm-design.webp"
              alt="Center pivot irrigation system watering green crops on a professionally designed farm"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section className="bg-gray-50">
        <SectionHeader title="What Makes Our Approach Different" subtitle="We are farmers and engineers — not just consultants. We understand crop economics, not just pipe hydraulics." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stat: "ROI", label: "Optimized Design", desc: "Every design is optimized for return on investment, not just technical perfection. We size systems to your budget and growth plan." },
            { stat: "Local", label: "Serviceable Parts", desc: "We use locally available, serviceable components. No exotic equipment that cannot be maintained in Kenya." },
            { stat: "Full", label: "Training Included", desc: "Our designs include operator training and maintenance plans — so your team can run the farm long after we leave." },
            { stat: "End", label: "to End Service", desc: "From feasibility study to first harvest, we manage the entire process. One point of contact, one accountable team." },
          ].map((b) => (
            <div key={b.label} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
              <span className="text-2xl font-extrabold text-green-600 block mb-1">{b.stat}</span>
              <h3 className="text-base font-bold text-navy-900 mb-2">{b.label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Design Process */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="Our Design Process" subtitle="A proven three-phase approach that de-risks your investment and delivers a farm that works." />
        <div className="grid sm:grid-cols-3 gap-8">
          <Step number="01" title="Discovery" description="Site visit, stakeholder needs, water assessment, soil analysis, crop planning. We understand your land before we draw a single line. 2-3 weeks." />
          <Step number="02" title="Design" description="Engineering calculations, hydraulics, specifications, BoQ, and cost estimate. Every pipe, pump, and panel sized for your exact conditions. 3-6 weeks." />
          <Step number="03" title="Implementation" description="Procurement, installation, quality control, supervision, testing, and commissioning. We stay until the water flows and the crops grow. 4-16 weeks." />
        </div>
      </Section>

      {/* Visual break */}
      <section className="relative h-88 overflow-hidden">
        <img
          src="/images/professional-farm-design.jpg"
          alt="Professional center pivot irrigation system with mountain landscape backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-900/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-10 w-full">
            <p className="text-white text-2xl md:text-3xl font-bold max-w-2xl">
              Water sourcing, solar energy, irrigation, and automation — designed as one integrated system.
            </p>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <Section id="tiers">
        <SectionHeader title="Service Tiers" subtitle="Choose the right level of engineering for your project. Every tier includes site visits, professional drawings, and a detailed bill of quantities." />

        {/* Tier 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-navy-900">Tier 1 — Irrigation Design</h3>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">5-20 Hectares</span>
            </div>
            <span className="text-xl font-extrabold text-navy-900">From KES 150,000</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">Focused irrigation engineering for farms that need precision water delivery designed right the first time.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-sm text-navy-900 mb-3">Scope of Work</h4>
              <div className="space-y-1">
                <IncludesItem>Topographic survey of farm</IncludesItem>
                <IncludesItem>Water source assessment</IncludesItem>
                <IncludesItem>Pipe sizing and hydraulic calculations</IncludesItem>
                <IncludesItem>Block planning and emitter mapping</IncludesItem>
                <IncludesItem>Equipment specifications</IncludesItem>
                <IncludesItem>Detailed bill of quantities</IncludesItem>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm text-navy-900 mb-3">Deliverables</h4>
              <div className="space-y-1">
                <IncludesItem>AutoCAD/GIS farm layout</IncludesItem>
                <IncludesItem>Hydraulic calculations report</IncludesItem>
                <IncludesItem>Equipment specs (models &amp; quantities)</IncludesItem>
                <IncludesItem>Itemized Bill of Quantities</IncludesItem>
                <IncludesItem>Installation drawings</IncludesItem>
                <IncludesItem>O&amp;M manual</IncludesItem>
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
          <p className="text-xs text-gray-400 mt-3">Timeline: 2-4 weeks design, 4-8 weeks implementation</p>
        </div>

        {/* Tier 2 — Featured */}
        <div className="bg-white border-2 border-green-500 rounded-2xl p-8 mb-8 relative shadow-lg">
          <span className="absolute -top-3 right-6 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Requested</span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-navy-900">Tier 2 — Integrated Water &amp; Energy</h3>
              <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-bold">20-100 Ha</span>
            </div>
            <span className="text-xl font-extrabold text-navy-900">From KES 450,000</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">The complete solution — irrigation, solar energy, pump stations, automation, and fertigation designed as one integrated system. This is where the real savings happen.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-sm text-navy-900 mb-3">Additional Scope</h4>
              <div className="space-y-1">
                <IncludesItem>Solar energy system design</IncludesItem>
                <IncludesItem>Full pump station engineering</IncludesItem>
                <IncludesItem>Tank sizing and structural specs</IncludesItem>
                <IncludesItem>Generator/grid backup integration</IncludesItem>
                <IncludesItem>SCADA/VFD automation architecture</IncludesItem>
                <IncludesItem>Fertigation injection system</IncludesItem>
                <IncludesItem>Multi-zone valve scheduling</IncludesItem>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm text-navy-900 mb-3">Additional Deliverables</h4>
              <div className="space-y-1">
                <IncludesItem>Electrical diagrams and load schedules</IncludesItem>
                <IncludesItem>Pump station civil/mechanical drawings</IncludesItem>
                <IncludesItem>PLC/SCADA control system design</IncludesItem>
                <IncludesItem>Solar production &amp; ROI projections</IncludesItem>
                <IncludesItem>5-year maintenance plan</IncludesItem>
                <IncludesItem>Operator training program</IncludesItem>
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
          <p className="text-xs text-gray-400 mt-3">Timeline: 4-8 weeks design, 3-6 months implementation</p>
        </div>

        {/* Tier 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-navy-900">Tier 3 — Turnkey Farm Development</h3>
              <span className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-bold">100+ Ha</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-8">From raw land to first harvest. Complete farm development for investors, institutions, and government projects.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-sm text-navy-900 mb-3">Full Scope</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Market analysis and feasibility study</p>
                <p>Water availability and rights assessment</p>
                <p>ROI modeling and financial projections</p>
                <p>Complete farm master planning and phasing</p>
                <p>All civil, mechanical, and electrical engineering</p>
                <p>Vendor management and quality assurance</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm text-navy-900 mb-3">Delivery</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Construction supervision at every phase</p>
                <p>System testing and handover certification</p>
                <p>Operations team recruitment and training</p>
                <p>Agronomist support through first harvest</p>
                <p>Performance verification and reporting</p>
                <p>Ongoing advisory retainer available</p>
              </div>
            </div>
          </div>
          <DataTable
            headers={["Fee Structure", "Detail"]}
            rows={[
              ["Design fees", "3-5% of project value"],
              ["Project management", "8-12% of project value"],
              ["Typical project range", "KES 20M - 500M+"],
            ]}
          />
          <p className="text-gray-400 text-xs mt-3">Timeline: 6-18 months depending on scale and complexity</p>
        </div>
      </Section>

      <CTASection title="Let's Engineer Your Farm for Success" subtitle="Tell us about your project — acreage, location, crops, and budget — and we will scope the right solution. First consultation is free." />
    </>
  );
}
