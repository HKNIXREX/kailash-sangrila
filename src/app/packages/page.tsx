"use client";

import { useState } from "react";
import PremiumPackageCard from "@/components/PremiumPackageCard";
import { packages } from "@/data/packages";

type FilterType = "all" | "dharchula" | "pithoragarh" | "kathgodam" | "delhi";

export default function PackagesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredPackages = packages.filter((pkg) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "dharchula") return pkg.pickupDropoff.toLowerCase().includes("dharchula");
    if (activeFilter === "pithoragarh") return pkg.pickupDropoff.toLowerCase().includes("pithoragarh");
    if (activeFilter === "kathgodam") return pkg.pickupDropoff.toLowerCase().includes("kathgodam");
    if (activeFilter === "delhi") return pkg.pickupDropoff.toLowerCase().includes("delhi");
    return true;
  });

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All Packages" },
    { key: "dharchula", label: "Ex Dharchula" },
    { key: "pithoragarh", label: "Ex Pithoragarh" },
    { key: "kathgodam", label: "Ex Kathgodam" },
    { key: "delhi", label: "Ex Delhi" },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-6">
            Premium Pilgrimages
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Tour{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Packages
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our carefully designed pilgrimage packages. From short 3-day trips to comprehensive 8-day journeys.
          </p>
        </div>
      </section>

      {/* Package Filters */}
      <section className="py-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold"
                    : "bg-slate-800 text-gray-300 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPackages.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <PremiumPackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No packages found for this filter.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 text-amber-400 hover:text-amber-300 font-medium"
              >
                View all packages
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 border border-green-500/30">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">All Inclusive Packages</h3>
              <p className="text-gray-400 text-sm">
                Transportation, accommodation, meals (breakfast & dinner), permits, and emergency oxygen included.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Flexible Payment</h3>
              <p className="text-gray-400 text-sm">
                Pay 30-40% advance to confirm booking. Remaining balance before departure.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 border border-amber-500/30">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Group Discounts</h3>
              <p className="text-gray-400 text-sm">
                Prices shown are per person for a group of 4. Contact us for custom group rates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
