"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const upcomingBatches = [
  { id: 1, date: "June 15-20, 2026", package: "5D/4N Kathgodam", slots: 4, status: "filling" },
  { id: 2, date: "June 22-27, 2026", package: "6D/5N Delhi", slots: 8, status: "available" },
  { id: 3, date: "July 01-06, 2026", package: "5D/4N Kathgodam", slots: 2, status: "almost-full" },
  { id: 4, date: "July 08-15, 2026", package: "8D/7N Kumaon Darshan", slots: 10, status: "available" },
  { id: 5, date: "July 15-20, 2026", package: "6D/5N Delhi", slots: 6, status: "available" },
];

export default function BatchDates() {
  const getStatusBadge = (status: string, slots: number) => {
    switch (status) {
      case "almost-full":
        return (
          <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
            Only {slots} left!
          </span>
        );
      case "filling":
        return (
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full border border-yellow-500/30">
            Filling Fast
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
            {slots} slots
          </span>
        );
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
            Upcoming Departures
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Travel Date
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fixed departure dates with guaranteed departures. Book early to secure your spot!
          </p>
        </motion.div>

        <div className="grid gap-4">
          {upcomingBatches.map((batch, index) => (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  {/* Date */}
                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-bold text-amber-400">
                      {batch.date.split(" ")[1].split("-")[0]}
                    </div>
                    <div className="text-gray-500 text-sm uppercase">
                      {batch.date.split(" ")[0]}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-12 bg-slate-700" />

                  {/* Package info */}
                  <div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-amber-400 transition-colors">
                      {batch.package}
                    </h3>
                    <p className="text-gray-500 text-sm">{batch.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {getStatusBadge(batch.status, batch.slots)}
                  <Link
                    href="/booking"
                    className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold rounded-full transition-all duration-300 text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm mb-4">
            Can&apos;t find a suitable date? We also organize private group tours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            Request Custom Date
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
