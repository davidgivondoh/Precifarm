import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://precifarm.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Precifarm — Precision Agricultural Engineering | Kenya",
    template: "%s | Precifarm Kenya",
  },
  description:
    "Precifarm designs, supplies, installs, and maintains precision agricultural water and energy infrastructure across Kenya. Solar pumps, drip irrigation, farm design, and solar energy systems for smallholder and commercial farmers.",
  keywords: [
    "solar water pump Kenya",
    "drip irrigation Kenya",
    "farm design Kenya",
    "solar energy Kenya",
    "precision agriculture Kenya",
    "solar pump installation",
    "drip irrigation kit",
    "agricultural engineering Kenya",
    "Precifarm",
    "Nishati solar",
    "smallholder irrigation",
    "borehole solar pump",
    "EPRA certified solar",
    "farm irrigation system",
    "water pumping system Kenya",
  ],
  authors: [{ name: "Precifarm", url: siteUrl }],
  creator: "Precifarm",
  publisher: "Precifarm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Precifarm",
    title: "Precifarm — Precision Agricultural Engineering | Kenya",
    description:
      "Solar pumps, drip irrigation, farm design, and solar energy systems engineered for Kenyan farmers. 850+ farms served across 38 counties.",
    images: [
      {
        url: "/images/sp500.jpg",
        width: 1200,
        height: 630,
        alt: "Precifarm solar-powered water pumping system on a Kenyan farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precifarm — Precision Agricultural Engineering | Kenya",
    description:
      "Solar pumps, drip irrigation, farm design, and solar energy systems engineered for Kenyan farmers.",
    images: ["/images/sp500.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Precifarm",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description:
      "Precision agricultural engineering company in Kenya specializing in solar pumps, drip irrigation, farm design, and solar energy systems.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-794-702-768",
      contactType: "sales",
      email: "info@precifarm.com",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
      addressRegion: "Kenya",
    },
    sameAs: ["https://wa.me/254794702768"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Precifarm",
    description:
      "Agricultural engineering company providing solar water pumps, drip irrigation systems, farm design services, and solar energy solutions across Kenya.",
    url: siteUrl,
    telephone: "+254794702768",
    email: "info@precifarm.com",
    priceRange: "KES 35,000 - KES 6,000,000+",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.2921,
      longitude: 36.8219,
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "850",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.variable} font-sans text-navy-800 bg-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
