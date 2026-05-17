"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const journeyPoints = [
  {
    id: 1,
    name: "Delhi / Kathgodam",
    day: "Day 1",
    description: "Journey begins from Delhi or Kathgodam railway station",
    altitude: "400m",
    x: 15,
    y: 70,
  },
  {
    id: 2,
    name: "Pithoragarh",
    day: "Day 1-2",
    description: "Gateway to Kumaon Himalayas, scenic hill town",
    altitude: "1,650m",
    x: 30,
    y: 55,
  },
  {
    id: 3,
    name: "Dharchula",
    day: "Day 2",
    description: "Border town on the banks of River Kali",
    altitude: "915m",
    x: 45,
    y: 45,
  },
  {
    id: 4,
    name: "Nabi Village",
    day: "Day 3",
    description: "Base for Adikailash exploration, traditional Kumaoni village",
    altitude: "2,750m",
    x: 60,
    y: 35,
  },
  {
    id: 5,
    name: "Jonglingkong",
    day: "Day 4",
    description: "Base point of Adikailash Ji, sacred viewpoint",
    altitude: "4,200m",
    x: 75,
    y: 25,
  },
  {
    id: 6,
    name: "Adikailash & Omparvat",
    day: "Day 4-5",
    description: "Divine darshan of Adikailash and Omparvat peaks",
    altitude: "5,500m+",
    x: 88,
    y: 15,
  },
];

export default function JourneyMap() {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Mountain silhouette */}
      <svg className="absolute bottom-0 left-0 right-0 h-32 opacity-20" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path
          d="M0 20 L10 12 L20 16 L35 5 L45 10 L55 3 L65 8 L75 2 L85 7 L95 4 L100 10 L100 20 Z"
          fill="url(#mountainGrad)"
        />
        <defs>
          <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative h-[400px] md:h-[500px]">
        {/* Journey path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d={`M ${journeyPoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="0.5"
            strokeDasharray="2 1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Journey points */}
        {journeyPoints.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute cursor-pointer"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            onMouseEnter={() => setActivePoint(point.id)}
            onMouseLeave={() => setActivePoint(null)}
          >
            {/* Pulse effect */}
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full animate-ping" />

            {/* Point marker */}
            <div
              className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                activePoint === point.id
                  ? "bg-gradient-to-br from-amber-400 to-orange-500 scale-125"
                  : "bg-gradient-to-br from-amber-500/50 to-orange-500/50 border border-amber-400/50"
              }`}
            >
              <span className="text-white text-xs font-bold">{point.id}</span>
            </div>

            {/* Label */}
            <div
              className={`absolute whitespace-nowrap transition-all duration-300 ${
                index % 2 === 0 ? "-bottom-12" : "-top-12"
              } left-1/2 -translate-x-1/2`}
            >
              <div className="text-amber-400 text-xs font-semibold">{point.day}</div>
              <div className="text-white text-sm font-medium">{point.name}</div>
            </div>
          </motion.div>
        ))}

        {/* Info popup */}
        <AnimatePresence>
          {activePoint && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-amber-500/30"
            >
              {(() => {
                const point = journeyPoints.find((p) => p.id === activePoint);
                if (!point) return null;
                return (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-amber-400 text-sm font-semibold">{point.day}</span>
                      <span className="text-gray-400 text-xs bg-white/10 px-2 py-1 rounded-full">
                        {point.altitude}
                      </span>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">{point.name}</h4>
                    <p className="text-gray-300 text-sm">{point.description}</p>
                  </>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
          <span className="text-gray-400">Journey Point</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400/30 via-amber-400 to-amber-400/30" />
          <span className="text-gray-400">Route Path</span>
        </div>
      </div>
    </div>
  );
}
