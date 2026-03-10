"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LogoMarkFull } from "./Logo";

const navItems = [
  { href: "/solar-pumps", label: "Solar Pumps" },
  { href: "/drip-irrigation", label: "Drip Irrigation" },
  { href: "/farm-design", label: "Farm Design" },
  { href: "/solar-energy", label: "Nishati Solar" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/">
          <LogoMarkFull />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === item.href
                  ? "text-navy-900 bg-gray-100"
                  : "text-gray-500 hover:text-navy-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#quote"
            className="ml-2 px-5 py-2.5 text-sm font-semibold bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navy-800 rounded transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy-800 rounded transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy-800 rounded transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg flex flex-col p-4 gap-1 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md ${
                  pathname === item.href
                    ? "text-navy-900 bg-gray-100"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-semibold bg-navy-900 text-white rounded-lg text-center"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
