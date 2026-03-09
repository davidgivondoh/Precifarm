"use client";

import { useState, type FormEvent } from "react";

const counties = [
  "Baringo","Bomet","Bungoma","Busia","Elgeyo-Marakwet","Embu","Garissa",
  "Homa Bay","Isiolo","Kajiado","Kakamega","Kericho","Kiambu","Kilifi",
  "Kirinyaga","Kisii","Kisumu","Kitui","Kwale","Laikipia","Lamu","Machakos",
  "Makueni","Mandera","Marsabit","Meru","Migori","Mombasa","Murang'a",
  "Nairobi","Nakuru","Nandi","Narok","Nyamira","Nyandarua","Nyeri","Samburu",
  "Siaya","Taita-Taveta","Tana River","Tharaka-Nithi","Trans-Nzoia","Turkana",
  "Uasin Gishu","Vihiga","Wajir","West Pokot",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;

    const message = [
      `*New Quote Request — Precifarm*`,
      ``,
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      data.email ? `*Email:* ${data.email}` : "",
      `*County:* ${data.county}`,
      `*System:* ${data.system}`,
      data.details ? `*Details:* ${data.details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setWhatsappUrl(`https://wa.me/254794702768?text=${encodeURIComponent(message)}`);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <h3 className="text-2xl font-bold text-navy-900 mb-3">Quote Request Ready!</h3>
        <p className="text-gray-500 mb-6">
          Click below to send your request via WhatsApp. Our team will respond within 24 hours.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors text-lg"
        >
          Send via WhatsApp
        </a>
        <p className="mt-4 text-sm text-gray-400">
          Or call us directly:{" "}
          <a href="tel:+254794702768" className="text-navy-900 font-semibold underline">
            +254 794 702 768
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-navy-700">Full Name</label>
        <input type="text" id="name" name="name" placeholder="John Kamau" required
          className="px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-colors" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-semibold text-navy-700">Phone / WhatsApp</label>
        <input type="tel" id="phone" name="phone" placeholder="+254 7XX XXX XXX" required
          className="px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-colors" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-navy-700">Email</label>
        <input type="email" id="email" name="email" placeholder="john@example.com"
          className="px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-colors" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="county" className="text-sm font-semibold text-navy-700">County</label>
        <select id="county" name="county" required
          className="px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-colors bg-white">
          <option value="">Select your county</option>
          {counties.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="system" className="text-sm font-semibold text-navy-700">System Type</label>
        <select id="system" name="system" required
          className="px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-colors bg-white">
          <option value="">Select system type</option>
          <option value="Solar Pumping">Solar Pumping</option>
          <option value="Drip Irrigation">Drip Irrigation</option>
          <option value="Farm Design">Farm Design</option>
          <option value="Solar Energy (Nishati)">Solar Energy (Nishati)</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="details" className="text-sm font-semibold text-navy-700">Project Details (optional)</label>
        <textarea id="details" name="details" rows={4} placeholder="Tell us about your farm size, water source, crops, or any specific requirements..."
          className="px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-colors resize-y" />
      </div>
      <div className="sm:col-span-2 mt-2">
        <button type="submit"
          className="w-full px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors text-base cursor-pointer">
          Submit Quote Request
        </button>
      </div>
    </form>
  );
}
