"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TourPackage } from "@/data/packages";

interface PackageCardProps {
  pkg: TourPackage;
  index?: number;
}

const gradients = [
  "from-blue-600 to-blue-800",
  "from-orange-500 to-red-600",
  "from-green-600 to-emerald-800",
  "from-purple-600 to-purple-800",
  "from-cyan-600 to-blue-700",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-700",
];

export default function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative h-60 overflow-hidden">
        {/* Gradient background with pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id={`mountains-${index}`} patternUnits="userSpaceOnUse" width="100" height="100">
                  <path d="M0 100 L25 50 L50 80 L75 30 L100 70 L100 100 Z" fill="white" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#mountains-${index})`} />
            </svg>
          </div>
        </div>

        {/* Animated glow on hover */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />

        {/* Duration badge */}
        <div className="absolute top-4 left-4 z-10">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {pkg.duration}
          </motion.span>
        </div>

        {/* Popular badge for certain packages */}
        {index === 0 && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
              Popular
            </span>
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <h3 className="text-white text-xl font-bold mb-1 group-hover:text-orange-300 transition-colors">
            {pkg.name}
          </h3>
          <p className="text-gray-300 text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {pkg.pickupDropoff}
          </p>
        </div>
      </div>

      <div className="p-6">
        {/* Price section */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <span className="text-sm text-gray-500">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                ₹{pkg.price.toLocaleString()}
              </span>
              <span className="text-gray-500 text-sm">/person</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-500 block">{pkg.priceNote}</span>
            <span className="text-sm text-gray-600 font-medium">{pkg.daysNights}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {pkg.highlights.slice(0, 3).map((highlight, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start text-gray-600 text-sm"
            >
              <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {highlight}
            </motion.li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={`/packages/${pkg.id}`}
            className="flex-1 text-center border-2 border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500 px-4 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            View Details
          </Link>
          <Link
            href={`/booking?package=${pkg.id}`}
            className="flex-1 text-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
