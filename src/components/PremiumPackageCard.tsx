"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TourPackage } from "@/data/packages";
import PackageImage from "./PackageImage";

interface PremiumPackageCardProps {
  pkg: TourPackage;
  index?: number;
  featured?: boolean;
}

export default function PremiumPackageCard({ pkg, index = 0, featured = false }: PremiumPackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Package Image */}
      <div className={`relative overflow-hidden ${featured ? "h-64" : "h-48"}`}>
        <PackageImage
          packageId={pkg.id}
          alt={pkg.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />

      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className={`p-6 ${featured ? "md:p-8" : ""}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold">
                {pkg.duration}
              </span>
              {index === 0 && (
                <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-black text-xs font-bold">
                  POPULAR
                </span>
              )}
            </div>
            <h3 className={`text-white font-bold group-hover:text-amber-400 transition-colors ${featured ? "text-2xl" : "text-xl"}`}>
              {pkg.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {pkg.pickupDropoff}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-slate-700/50">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              ₹{pkg.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm">/ person</span>
          </div>
          <p className="text-gray-500 text-xs mt-1">{pkg.priceNote}</p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {pkg.highlights.slice(0, featured ? 4 : 3).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
              <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {highlight}
            </div>
          ))}
        </div>

        {/* Duration info */}
        <div className="flex items-center gap-4 mb-6 py-4 bg-slate-800/50 rounded-xl px-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {pkg.daysNights}
          </div>
          <div className="w-px h-4 bg-slate-700" />
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {pkg.itinerary.length} Destinations
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 relative z-10">
          <Link
            href={`/packages/${pkg.id}`}
            className="flex-1 text-center py-3 border border-slate-600 rounded-xl text-white font-medium hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300"
          >
            View Details
          </Link>
          <Link
            href={`/booking?package=${pkg.id}`}
            className="flex-1 text-center py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl text-black font-bold hover:from-amber-400 hover:to-yellow-400 transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
          <path d="M100 0 L100 100 L0 0 Z" fill="currentColor" />
        </svg>
      </div>
    </motion.div>
  );
}
