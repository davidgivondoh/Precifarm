import Link from "next/link";
import { LogoMarkLight } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <LogoMarkLight />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Engineering agricultural systems that perform from day one and pay for themselves within months.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/solar-pumps" className="text-sm hover:text-white transition-colors">Solar Pumps</Link></li>
              <li><Link href="/drip-irrigation" className="text-sm hover:text-white transition-colors">Drip Irrigation</Link></li>
              <li><Link href="/farm-design" className="text-sm hover:text-white transition-colors">Farm Design</Link></li>
              <li><Link href="/solar-energy" className="text-sm hover:text-white transition-colors">Nishati Solar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/#services" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#quote" className="text-sm hover:text-white transition-colors">Get a Quote</Link></li>
              <li><Link href="/#precisense" className="text-sm hover:text-white transition-colors">PreciSense</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href="tel:+254794702768" className="text-sm hover:text-white transition-colors">+254 794 702 768</a></li>
              <li><a href="mailto:info@precifarm.com" className="text-sm hover:text-white transition-colors">info@precifarm.com</a></li>
              <li><a href="https://wa.me/254794702768" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <span>&copy; {new Date().getFullYear()} Precifarm. All rights reserved.</span>
          <span>Kenya-wide delivery and installation</span>
        </div>
      </div>
    </footer>
  );
}
