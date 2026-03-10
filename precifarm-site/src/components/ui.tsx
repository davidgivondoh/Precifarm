import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/* ── Section wrapper ── */
export function Section({
  children,
  className = "",
  id,
  background = "white",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "alt" | "warm" | "gradient" | "gradient-reverse" | "navy";
}) {
  const bgMap: Record<string, string> = {
    white: "bg-white",
    alt: "bg-section-alt",
    warm: "bg-section-warm",
    gradient: "bg-gradient-warm",
    "gradient-reverse": "bg-gradient-warm-reverse",
    navy: "bg-gradient-navy text-white",
  };
  return (
    <section id={id} className={`py-20 md:py-24 ${bgMap[background] ?? ""} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
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
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-gray-300" : "text-gray-500"}`}>
          {subtitle}
        </p>
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
  backgroundImage,
}: {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  meta?: { icon: string; text: string }[];
  gradient?: string;
  backgroundImage?: string;
}) {
  const hasImage = !!backgroundImage;

  return (
    <section
      className={`relative pt-32 pb-20 ${
        hasImage ? "hero-overlay" : "bg-gradient-warm border-b border-warm-200"
      }`}
    >
      {hasImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${
            hasImage
              ? "bg-white/15 text-white backdrop-blur-sm"
              : "bg-warm-100 text-navy-700"
          }`}
        >
          {badge}
        </span>
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 ${
            hasImage ? "text-white" : "text-navy-900"
          }`}
        >
          {title}{" "}
          <span className={hasImage ? "text-gray-200" : "text-navy-700"}>{titleAccent}</span>
        </h1>
        <p
          className={`text-lg max-w-2xl leading-relaxed mb-6 ${
            hasImage ? "text-gray-200" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
        {meta && (
          <div className="flex flex-wrap gap-6 mt-8">
            {meta.map((m, i) => (
              <div
                key={i}
                className={`flex items-center gap-2.5 font-medium ${
                  hasImage ? "text-white" : "text-navy-700"
                }`}
              >
                <span
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-base ${
                    hasImage ? "bg-white/15 backdrop-blur-sm" : "bg-warm-100"
                  }`}
                >
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

/* ── Image section ── */
export function ImageSection({
  src,
  alt,
  caption,
  priority = false,
  aspectRatio = "video",
  overlay,
  children,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  aspectRatio?: "video" | "wide" | "square";
  overlay?: boolean;
  children?: ReactNode;
}) {
  const aspectMap: Record<string, string> = {
    video: "aspect-video",
    wide: "aspect-[21/9]",
    square: "aspect-square",
  };

  return (
    <figure className="relative overflow-hidden rounded-2xl shadow-sm">
      <div className={`relative ${aspectMap[aspectRatio]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
        />
        {overlay && (
          <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 via-transparent to-transparent" />
        )}
        {children && (
          <div className="absolute inset-0 flex items-end p-8 z-10">{children}</div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-400">{caption}</figcaption>
      )}
    </figure>
  );
}

/* ── Testimonial ── */
export function Testimonial({
  quote,
  name,
  role,
  location,
}: {
  quote: string;
  name: string;
  role: string;
  location?: string;
}) {
  return (
    <blockquote className="bg-white border border-warm-200 rounded-2xl p-8 shadow-sm card-lift">
      <svg
        className="w-8 h-8 text-warm-200 mb-4"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">{quote}</p>
      <footer className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white text-sm font-bold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <div className="font-semibold text-navy-900 text-sm">{name}</div>
          <div className="text-xs text-gray-400">
            {role}
            {location && <span> &middot; {location}</span>}
          </div>
        </div>
      </footer>
    </blockquote>
  );
}

/* ── Stat card ── */
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-warm-200 rounded-2xl p-8 text-center shadow-sm card-lift">
      <span className="text-3xl md:text-4xl font-extrabold text-navy-900 block tracking-tight">
        {value}
      </span>
      <span className="text-sm text-gray-500 mt-2 block">{label}</span>
    </div>
  );
}

/* ── Feature card (services) ── */
export function FeatureCard({
  href,
  title,
  description,
  image,
}: {
  href: string;
  icon?: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white border border-warm-200 rounded-2xl shadow-sm card-lift block overflow-hidden"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center text-sm font-semibold text-navy-900 group-hover:text-navy-700">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
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
    <div className="flex gap-4 items-start group">
      <div className="w-12 h-12 min-w-12 bg-warm-50 border border-warm-200 rounded-xl flex items-center justify-center text-xl group-hover:bg-warm-100 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-navy-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
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
      className={`relative bg-white rounded-2xl p-8 transition-all card-lift ${
        featured
          ? "border-2 border-navy-900 shadow-lg ring-1 ring-navy-900/5"
          : "border border-warm-200 shadow-sm hover:border-gray-300"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-navy-900 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-sm">
          Most Popular
        </span>
      )}
      <div className="text-xl font-bold text-navy-900 mb-1">{name}</div>
      <div className="text-sm text-gray-500 mb-5">{description}</div>
      <div className="text-3xl font-extrabold text-navy-900 mb-1 tracking-tight">
        {price}
        {priceUnit && <small className="text-sm font-medium text-gray-500"> {priceUnit}</small>}
      </div>
      <div className="h-px bg-warm-200 my-6" />
      <ul className="mb-8 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
            <span className="text-navy-800 font-bold shrink-0 mt-0.5">&#10003;</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`block text-center py-3 px-5 rounded-lg text-sm font-semibold transition-all ${
          featured
            ? "bg-navy-900 text-white hover:bg-navy-800 shadow-sm"
            : "border-2 border-navy-900 text-navy-900 hover:bg-warm-50"
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
    <div className="overflow-x-auto rounded-2xl border border-warm-200 bg-white shadow-sm">
      <table className="w-full border-collapse">
        <thead className="bg-navy-900 text-white">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-warm-200 last:border-b-0 hover:bg-warm-50 transition-colors ${
                ri === featuredRow ? "bg-warm-50 font-semibold" : ""
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-4 text-sm ${
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
    <div className="flex items-center gap-2.5 text-sm text-gray-600 py-2.5">
      <span className="w-6 h-6 bg-warm-50 border border-warm-200 rounded-full flex items-center justify-center text-navy-800 text-xs font-bold shrink-0">
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
    <section className="py-20 md:py-24 bg-gray-50 border-t border-gray-200 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-navy-900">{title}</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all shadow-sm text-base"
          >
            {primaryText}
          </Link>
          <a
            href="https://wa.me/254794702768"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-all text-base"
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
      <div className="w-14 h-14 bg-navy-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-sm">
        {number}
      </div>
      <h4 className="font-bold text-navy-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

/* ── Dark card (for navy sections) ── */
export function DarkCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/6 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-white/20">
      <h4 className="text-white font-bold mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
