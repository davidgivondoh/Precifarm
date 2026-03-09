import Link from "next/link";
import type { ReactNode } from "react";

/* ── Section wrapper ── */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

/* ── Section header ── */
export function SectionHeader({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${light ? "text-gray-400" : "text-gray-500"}`}>{subtitle}</p>
      )}
    </div>
  );
}

/* ── Page hero (sub-pages) ── */
export function PageHero({
  badge,
  title,
  titleAccent,
  subtitle,
  meta,
}: {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  meta?: { icon: string; text: string }[];
  gradient?: string;
}) {
  return (
    <section className="pt-32 pb-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          {badge}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-5">
          {title} <span className="text-navy-900">{titleAccent}</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-6">{subtitle}</p>
        {meta && (
          <div className="flex flex-wrap gap-6 mt-6">
            {meta.map((m, i) => (
              <div key={i} className="flex items-center gap-2 font-medium text-navy-700">
                <span className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center text-base">
                  {m.icon}
                </span>
                {m.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Stat card ── */
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-7 text-center hover:shadow-md hover:-translate-y-0.5 transition-all">
      <span className="text-3xl font-extrabold text-navy-900 block">{value}</span>
      <span className="text-sm text-gray-500 mt-1">{label}</span>
    </div>
  );
}

/* ── Feature card (services) ── */
export function FeatureCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all block"
    >
      <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-navy-900 transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}

/* ── Benefit item ── */
export function Benefit({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 min-w-[48px] bg-gray-100 rounded-xl flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

/* ── Pricing card ── */
export function PricingCard({
  name,
  description,
  price,
  priceUnit = "",
  features,
  featured = false,
  ctaHref = "/#quote",
  ctaText = "Get Started",
}: {
  name: string;
  description: string;
  price: string;
  priceUnit?: string;
  features: string[];
  featured?: boolean;
  ctaHref?: string;
  ctaText?: string;
}) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 transition-all ${
        featured
          ? "border-2 border-navy-900 shadow-lg"
          : "border-2 border-gray-200 hover:border-gray-400 hover:shadow-md"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy-900 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
          Most Popular
        </span>
      )}
      <div className="text-xl font-bold text-navy-900 mb-1">{name}</div>
      <div className="text-sm text-gray-500 mb-5">{description}</div>
      <div className="text-3xl font-extrabold text-navy-900 mb-1">
        {price}
        {priceUnit && <small className="text-sm font-medium text-gray-500"> {priceUnit}</small>}
      </div>
      <ul className="mt-6 mb-8 space-y-2.5">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
            <span className="text-navy-800 font-bold shrink-0">&#10003;</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`block text-center py-2.5 px-5 rounded-lg text-sm font-semibold transition-colors ${
          featured
            ? "bg-navy-900 text-white hover:bg-navy-800"
            : "border-2 border-navy-900 text-navy-900 hover:bg-gray-50"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}

/* ── Data table ── */
export function DataTable({
  headers,
  rows,
  featuredRow,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
  featuredRow?: number;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
      <table className="w-full border-collapse">
        <thead className="bg-navy-900 text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors ${
                ri === featuredRow ? "bg-gray-50 font-semibold" : ""
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-3.5 text-sm ${
                    ci === row.length - 1 ? "font-semibold text-navy-900" : "text-gray-700"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Includes list item ── */
export function IncludesItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-gray-600 py-2">
      <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-navy-800 text-xs font-bold shrink-0">
        &#10003;
      </span>
      {children}
    </div>
  );
}

/* ── CTA Section ── */
export function CTASection({
  title,
  subtitle,
  primaryHref = "/#quote",
  primaryText = "Request a Free Quote",
}: {
  title: string;
  subtitle: string;
  primaryHref?: string;
  primaryText?: string;
}) {
  return (
    <section className="py-20 bg-navy-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-8 text-lg">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-base"
          >
            {primaryText}
          </Link>
          <a
            href="https://wa.me/254794702768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-500 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Step (process) ── */
export function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-13 h-13 bg-navy-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

/* ── Dark card (for green sections) ── */
export function DarkCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/6 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
      <h4 className="text-white font-bold mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
