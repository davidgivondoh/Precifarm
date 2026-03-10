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
  title: "Solar Energy Systems Kenya — Home, Business & Farm Solar Packages",
  description:
    "Cash-purchase solar energy systems for homes, businesses, and farms in Kenya. EPRA-compliant installation with remote monitoring. Home solar from KES 35,000, business from KES 120,000. Own your power — no leasing, no subscriptions.",
  keywords: [
    "solar energy system Kenya",
    "solar panel installation Kenya",
    "home solar system Kenya",
    "business solar Kenya",
    "solar panel price Kenya",
    "EPRA certified solar installation",
    "Nishati solar",
    "solar battery system Kenya",
    "off-grid solar Kenya",
    "farm solar power Kenya",
  ],
  alternates: { canonical: "https://precifarm.com/solar-energy" },
  openGraph: {
    title: "Solar Energy Systems Kenya — From KES 35,000",
    description: "Own your power with cash-purchase solar systems. EPRA-compliant, 25-year warranty, remote monitoring included.",
    url: "https://precifarm.com/solar-energy",
    images: [{ url: "/images/solar-panel-installation.jpg", width: 1200, height: 630, alt: "Solar panel installation on a Kenyan home rooftop" }],
  },
};

export default function SolarEnergyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solar-panel-installation.jpg"
            alt="Rooftop solar panel installation powering a Kenyan home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-navy-900/90 via-navy-900/70 to-navy-900/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 bg-white/15 text-white backdrop-blur-sm">
            Nishati by Precifarm
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight max-w-2xl">
            Own Your Power.{" "}
            <span className="text-gray-300">Stop Renting It.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
            KPLC bills keep rising. Load-shedding keeps disrupting. Generators keep burning money. Nishati solar systems give you energy independence — you own the system outright from day one.
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
              <span className="text-2xl font-extrabold text-white block">KES 35K</span>
              <span className="text-xs text-gray-300">Starting Price</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">25 Yrs</span>
              <span className="text-xs text-gray-300">Panel Warranty</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">3-7 Days</span>
              <span className="text-xs text-gray-300">Installation</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
              <span className="text-2xl font-extrabold text-white block">EPRA</span>
              <span className="text-xs text-gray-300">Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cash Purchase */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Cash Purchase Makes Sense</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Leasing and pay-as-you-go solar products keep you locked into monthly payments — often for systems you never fully own. With Nishati, you pay once and the power is yours for 25+ years.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Our systems use Tier-1 panels with 25-year performance warranties and are installed by EPRA-certified engineers. Every installation includes remote monitoring so you can track your solar production in real time.
            </p>
            <p className="text-gray-500 leading-relaxed">
              No hidden fees. No monthly subscriptions. No middlemen. Just clean, reliable energy that pays for itself.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/energy-job.png"
              alt="Aerial view of solar panel array installed on a Kenyan farm"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Value Props */}
      <Section className="bg-gray-50">
        <SectionHeader title="Why Choose Nishati Solar" subtitle="Premium solar systems designed for Kenyan conditions — owned by you from day one." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { stat: "Own", label: "Cash Purchase", desc: "No leasing, no subscriptions, no hidden fees. You own the system from installation day." },
            { stat: "24/7", label: "Monitored Uptime", desc: "PreciSense remote monitoring with SMS alerts and real-time dashboard — know your system is performing." },
            { stat: "EPRA", label: "Certified Install", desc: "EPRA-compliant installation by certified solar engineers. Fully permitted and inspection-ready." },
            { stat: "25yr", label: "Panel Warranty", desc: "Tier-1 panels with 25-year performance warranty and 10-year product warranty. Built to outlast your roof." },
          ].map((v) => (
            <div key={v.label} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all">
              <span className="text-2xl font-extrabold text-green-600 block mb-1">{v.stat}</span>
              <h3 className="text-base font-bold text-navy-900 mb-2">{v.label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="border-t border-gray-100">
        <SectionHeader title="How It Works" subtitle="From first call to monitoring dashboard — typically completed in 3-7 days." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step number="01" title="Site Assessment" description="We visit your property, assess load requirements, inspect roof or ground mounting options, and measure solar exposure." />
          <Step number="02" title="System Design" description="Custom system sizing based on your actual energy consumption. Detailed quotation with no hidden costs." />
          <Step number="03" title="Installation" description="EPRA-certified team installs panels, inverter, batteries, and wiring. Typically 1-3 days for homes, 3-7 for commercial." />
          <Step number="04" title="Monitoring" description="PreciSense remote monitoring activated. SMS alerts for any issues. Dashboard access from your phone." />
        </div>
      </Section>

      {/* Visual break */}
      <section className="relative h-88 overflow-hidden">
        <img
          src="/images/solarpanels.jpg"
          alt="Large-scale solar panel array powering agricultural operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-900/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-10 w-full">
            <p className="text-white text-2xl md:text-3xl font-bold max-w-2xl">
              From single-panel home setups to commercial arrays — we engineer systems that scale with your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Economics */}
      <Section>
        <SectionHeader title="The Economics of Going Solar" subtitle="Solar is not just good for the environment — it is the smartest financial decision you can make in Kenya today." />
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-all">
            <span className="text-3xl font-extrabold text-green-600 block mb-2">KES 3K-200K+</span>
            <h3 className="text-base font-bold text-navy-900 mb-2">Monthly Savings</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Home systems save KES 3,000-15,000/month. Business systems save KES 20,000-200,000+ depending on size.</p>
          </div>
          <div className="bg-white border-2 border-green-500 rounded-2xl p-8 text-center shadow-lg relative">
            <span className="absolute -top-3 right-6 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Best ROI</span>
            <span className="text-3xl font-extrabold text-green-600 block mb-2">12-36 Months</span>
            <h3 className="text-base font-bold text-navy-900 mb-2">Payback Period</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Home systems: 18-36 months. Business systems: 12-24 months. After payback, your electricity is essentially free.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-all">
            <span className="text-3xl font-extrabold text-green-600 block mb-2">25+ Years</span>
            <h3 className="text-base font-bold text-navy-900 mb-2">System Lifespan</h3>
            <p className="text-sm text-gray-500 leading-relaxed">25+ years of production from Tier-1 panels. Batteries last 8-15 years. Inverters carry 5-10 year warranties.</p>
          </div>
        </div>
      </Section>

      {/* Home Solar Packages */}
      <Section className="bg-gray-50" id="packages">
        <SectionHeader title="Home Solar Packages" subtitle="Reliable household power — lights, TV, phone charging, refrigerator, and full home electrification. End load-shedding at home." />
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Basic */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-1">Basic Home</h3>
            <p className="text-sm text-gray-500 mb-4">300W / 200Ah</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 35,000 <small className="text-sm font-medium text-gray-500">- 55,000</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>1-3 lights</IncludesItem>
              <IncludesItem>Phone charging</IncludesItem>
              <IncludesItem>Radio</IncludesItem>
              <IncludesItem>Remote monitoring</IncludesItem>
              <IncludesItem>EPRA-compliant installation</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all">
              Get a Quote
            </Link>
          </div>
          {/* Standard — Featured */}
          <div className="bg-white border-2 border-green-500 rounded-2xl p-8 relative shadow-lg">
            <span className="absolute -top-3 right-6 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
            <h3 className="text-xl font-bold text-navy-900 mb-1">Standard Home</h3>
            <p className="text-sm text-gray-500 mb-4">600W / 400Ah</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 85,000 <small className="text-sm font-medium text-gray-500">- 120,000</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>6+ lights</IncludesItem>
              <IncludesItem>TV and fan</IncludesItem>
              <IncludesItem>Refrigerator</IncludesItem>
              <IncludesItem>Remote monitoring + SMS alerts</IncludesItem>
              <IncludesItem>EPRA-compliant installation</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-all">
              Get a Quote
            </Link>
          </div>
          {/* Premium */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-1">Premium Home</h3>
            <p className="text-sm text-gray-500 mb-4">1.5 kW / 800Ah</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 180,000 <small className="text-sm font-medium text-gray-500">- 280,000</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>Full home power</IncludesItem>
              <IncludesItem>Washing machine</IncludesItem>
              <IncludesItem>Water pumps</IncludesItem>
              <IncludesItem>Remote monitoring + dashboard</IncludesItem>
              <IncludesItem>EPRA-compliant installation</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all">
              Get a Quote
            </Link>
          </div>
        </div>
      </Section>

      {/* Business Solar Packages */}
      <Section>
        <SectionHeader title="Business Solar Packages" subtitle="Keep your business running through outages. Protect revenue, reduce electricity costs, and eliminate generator dependency." />
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-1">SME Starter</h3>
            <p className="text-sm text-gray-500 mb-4">1-2 kW / 400Ah</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 120,000 <small className="text-sm font-medium text-gray-500">- 200,000</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>Computers and lighting</IncludesItem>
              <IncludesItem>Phone charging stations</IncludesItem>
              <IncludesItem>POS systems</IncludesItem>
              <IncludesItem>Remote monitoring</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all">
              Get a Quote
            </Link>
          </div>
          <div className="bg-white border-2 border-green-500 rounded-2xl p-8 relative shadow-lg">
            <span className="absolute -top-3 right-6 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
            <h3 className="text-xl font-bold text-navy-900 mb-1">SME Standard</h3>
            <p className="text-sm text-gray-500 mb-4">3-5 kW / 800Ah</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 280,000 <small className="text-sm font-medium text-gray-500">- 480,000</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>Full office power</IncludesItem>
              <IncludesItem>Refrigeration</IncludesItem>
              <IncludesItem>AC units</IncludesItem>
              <IncludesItem>Real-time monitoring</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-all">
              Get a Quote
            </Link>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-1">Commercial</h3>
            <p className="text-sm text-gray-500 mb-4">10-50 kW</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 1.2M <small className="text-sm font-medium text-gray-500">- 6M+</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>Industrial loads</IncludesItem>
              <IncludesItem>Workshops</IncludesItem>
              <IncludesItem>Cold rooms</IncludesItem>
              <IncludesItem>Enterprise monitoring</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all">
              Get a Quote
            </Link>
          </div>
        </div>
      </Section>

      {/* Farm Solar Packages */}
      <Section className="bg-gray-50">
        <SectionHeader title="Farm Solar Packages" subtitle="Power your cold storage, agro-processing, security lighting, and pump systems — all from the sun. Designed for rural and off-grid locations." />
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-1">Farm Basic</h3>
            <p className="text-sm text-gray-500 mb-4">2 kW / 400Ah</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 180,000 <small className="text-sm font-medium text-gray-500">- 280,000</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>Lighting and security</IncludesItem>
              <IncludesItem>Small processing</IncludesItem>
              <IncludesItem>Remote monitoring</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all">
              Get a Quote
            </Link>
          </div>
          <div className="bg-white border-2 border-green-500 rounded-2xl p-8 relative shadow-lg">
            <span className="absolute -top-3 right-6 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</span>
            <h3 className="text-xl font-bold text-navy-900 mb-1">Farm Standard</h3>
            <p className="text-sm text-gray-500 mb-4">5 kW / 800Ah</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 420,000 <small className="text-sm font-medium text-gray-500">- 680,000</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>Cold room</IncludesItem>
              <IncludesItem>Processing equipment</IncludesItem>
              <IncludesItem>Water pumping</IncludesItem>
              <IncludesItem>Full monitoring dashboard</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-all">
              Get a Quote
            </Link>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-900 mb-1">Farm Commercial</h3>
            <p className="text-sm text-gray-500 mb-4">10-30 kW</p>
            <span className="text-2xl font-extrabold text-navy-900 block mb-1">KES 1M <small className="text-sm font-medium text-gray-500">- 4M+</small></span>
            <div className="h-px bg-gray-200 my-6" />
            <div className="space-y-1 mb-6">
              <IncludesItem>Full agro-processing facility</IncludesItem>
              <IncludesItem>Multiple buildings</IncludesItem>
              <IncludesItem>Integrated pump systems</IncludesItem>
              <IncludesItem>Enterprise monitoring</IncludesItem>
            </div>
            <Link href="/#quote" className="block text-center py-3 px-5 rounded-lg text-sm font-semibold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all">
              Get a Quote
            </Link>
          </div>
        </div>
      </Section>

      {/* Component Standards */}
      <Section>
        <SectionHeader title="Nishati Component Standards" subtitle="We only install premium, proven components with local serviceability and genuine manufacturer warranties." />
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/jinko-home-backup.png"
              alt="Jinko Tier-1 solar panels installed on a commercial rooftop in Kenya"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 min-w-10 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm shrink-0">01</div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Tier-1 Solar Panels</h4>
                <p className="text-sm text-gray-500">Jinko, Canadian Solar, JA Solar, Longi. 25-year performance warranty, proven in Kenyan conditions.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 min-w-10 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm shrink-0">02</div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Premium Batteries</h4>
                <p className="text-sm text-gray-500">Lithium (LiFePO4) for longevity or AGM for budget builds — both locally serviceable with spare parts in Nairobi.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 min-w-10 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm shrink-0">03</div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Reliable Inverters</h4>
                <p className="text-sm text-gray-500">Victron Energy, Growatt, Schneider Electric — efficient and backed by local distributors.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 min-w-10 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm shrink-0">04</div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">PreciSense Monitoring</h4>
                <p className="text-sm text-gray-500">Real-time dashboard included with every system. Track production, consumption, and battery health from your phone.</p>
              </div>
            </div>
          </div>
        </div>
        <DataTable
          headers={["Component", "Brands", "Warranty"]}
          rows={[
            ["Solar Panels (Tier-1)", "Jinko, Canadian Solar, JA Solar, Longi", "25-year performance + 10-year product"],
            ["Batteries (LiFePO4/AGM)", "BYD, Pylontech, Trojan", "8-15 years depending on type"],
            ["Inverters", "Victron, Growatt, Schneider Electric", "5-10 year manufacturer warranty"],
            ["Installation", "EPRA-certified engineers", "2-year workmanship guarantee"],
            ["Monitoring", "PreciSense by Precifarm", "Included with every system"],
          ]}
        />
      </Section>

      <CTASection title="Take Control of Your Energy Costs" subtitle="Get a free site assessment and customized solar proposal for your home, business, or farm. We respond within 24 hours." />
    </>
  );
}
