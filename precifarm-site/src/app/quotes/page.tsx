"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  getStoredQuotes,
  updateQuoteStatus,
  deleteQuote,
  type QuoteEntry,
} from "@/components/QuoteForm";

const statusColors: Record<QuoteEntry["status"], string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  quoted: "bg-green-100 text-green-700",
  closed: "bg-gray-100 text-gray-500",
};

const statusLabels: Record<QuoteEntry["status"], string> = {
  new: "New",
  contacted: "Contacted",
  quoted: "Quoted",
  closed: "Closed",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportCSV(quotes: QuoteEntry[]) {
  const headers = ["Name", "Phone", "Email", "County", "System", "Details", "Date", "Status"];
  const rows = quotes.map((q) => [
    q.name,
    q.phone,
    q.email,
    q.county,
    q.system,
    q.details.replace(/"/g, '""'),
    new Date(q.submittedAt).toISOString(),
    q.status,
  ]);

  const csv = [
    headers.join(","),
    ...rows.map((r) => r.map((cell) => `"${cell}"`).join(",")),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `precifarm-quotes-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<QuoteEntry[]>([]);
  const [filter, setFilter] = useState<"all" | QuoteEntry["status"]>("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    setQuotes(getStoredQuotes());
  }, []);

  function refresh() {
    setQuotes(getStoredQuotes());
  }

  function handleStatusChange(id: string, status: QuoteEntry["status"]) {
    updateQuoteStatus(id, status);
    refresh();
  }

  function handleDelete(id: string) {
    if (confirm("Delete this quote request?")) {
      deleteQuote(id);
      setSelectedId(null);
      refresh();
    }
  }

  const filtered = useMemo(() => {
    let list = quotes;
    if (filter !== "all") list = list.filter((q) => q.status === filter);
    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter(
        (q) =>
          q.name.toLowerCase().includes(s) ||
          q.phone.includes(s) ||
          q.email.toLowerCase().includes(s) ||
          q.county.toLowerCase().includes(s) ||
          q.system.toLowerCase().includes(s)
      );
    }
    return list;
  }, [quotes, filter, search]);

  const counts = useMemo(() => {
    const c = { all: quotes.length, new: 0, contacted: 0, quoted: 0, closed: 0 };
    quotes.forEach((q) => c[q.status]++);
    return c;
  }, [quotes]);

  const selectedQuote = selectedId ? quotes.find((q) => q.id === selectedId) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-navy-900">Quote Requests</h1>
              <p className="text-sm text-gray-500 mt-1">
                {counts.all} total &middot; {counts.new} new
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => exportCSV(filtered)}
                disabled={filtered.length === 0}
                className="px-4 py-2 text-sm font-semibold border-2 border-navy-900 text-navy-900 rounded-lg hover:bg-navy-900 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Export CSV
              </button>
              <Link
                href="/"
                className="px-4 py-2 text-sm font-semibold bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-all"
              >
                Back to Site
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {(["all", "new", "contacted", "quoted", "closed"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-xl p-4 text-left transition-all border-2 ${
                filter === s
                  ? "border-navy-900 bg-white shadow-md"
                  : "border-transparent bg-white hover:border-gray-200"
              }`}
            >
              <span className="text-2xl font-extrabold text-navy-900 block">{counts[s]}</span>
              <span className="text-xs text-gray-500 capitalize">{s === "all" ? "All Quotes" : s}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, email, county, or system..."
            className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10 transition-colors bg-white"
          />
        </div>

        {/* Content */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
            <p className="text-gray-400 text-lg mb-2">
              {quotes.length === 0
                ? "No quote requests yet"
                : "No quotes match your filter"}
            </p>
            <p className="text-gray-400 text-sm">
              {quotes.length === 0
                ? "When visitors submit the quote form, their requests will appear here."
                : "Try changing the filter or search term."}
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Quote List */}
            <div className="lg:col-span-2 space-y-3">
              {filtered.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setSelectedId(q.id)}
                  className={`w-full text-left bg-white rounded-xl border-2 p-5 transition-all hover:shadow-md ${
                    selectedId === q.id ? "border-navy-900 shadow-md" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-navy-900 text-sm truncate">{q.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[q.status]}`}>
                          {statusLabels[q.status]}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">
                        {q.phone} &middot; {q.county} &middot; {q.system}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">
                      {formatDate(q.submittedAt)}
                    </span>
                  </div>
                  {q.details && (
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2">{q.details}</p>
                  )}
                </button>
              ))}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-1">
              {selectedQuote ? (
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-navy-900 text-lg">{selectedQuote.name}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${statusColors[selectedQuote.status]}`}>
                      {statusLabels[selectedQuote.status]}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</label>
                      <p className="text-sm text-navy-900 font-medium">
                        <a href={`tel:${selectedQuote.phone}`} className="underline">{selectedQuote.phone}</a>
                      </p>
                    </div>
                    {selectedQuote.email && (
                      <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                        <p className="text-sm text-navy-900">
                          <a href={`mailto:${selectedQuote.email}`} className="underline">{selectedQuote.email}</a>
                        </p>
                      </div>
                    )}
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">County</label>
                      <p className="text-sm text-navy-900">{selectedQuote.county}</p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">System Type</label>
                      <p className="text-sm text-navy-900">{selectedQuote.system}</p>
                    </div>
                    {selectedQuote.details && (
                      <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Details</label>
                        <p className="text-sm text-gray-600 leading-relaxed">{selectedQuote.details}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Submitted</label>
                      <p className="text-sm text-navy-900">{formatDate(selectedQuote.submittedAt)}</p>
                    </div>
                  </div>

                  {/* Status Actions */}
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">Update Status</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(["new", "contacted", "quoted", "closed"] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => handleStatusChange(selectedQuote.id, s)}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all capitalize ${
                            selectedQuote.status === s
                              ? "bg-navy-900 text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-2">
                    <a
                      href={`https://wa.me/${selectedQuote.phone.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(`Hi ${selectedQuote.name}, thank you for your interest in Precifarm ${selectedQuote.system}. I'd like to discuss your project.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-2.5 px-4 rounded-lg text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all"
                    >
                      WhatsApp {selectedQuote.name.split(" ")[0]}
                    </a>
                    <a
                      href={`tel:${selectedQuote.phone}`}
                      className="block text-center py-2.5 px-4 rounded-lg text-sm font-semibold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all"
                    >
                      Call {selectedQuote.phone}
                    </a>
                    <button
                      onClick={() => handleDelete(selectedQuote.id)}
                      className="block w-full text-center py-2.5 px-4 rounded-lg text-sm font-semibold text-red-500 hover:bg-red-50 transition-all"
                    >
                      Delete Quote
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-400 text-sm">Select a quote to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
