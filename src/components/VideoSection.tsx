"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
            Watch Video
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Divine Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch our pilgrims share their spiritual experience at Adikailash and Omparvat
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-amber-500/10"
        >
          {/* Video thumbnail */}
          <div className="absolute inset-0">
            <Image
              src="/images/gallery/70.jpg"
              alt="Adikailash & Omparvat Journey"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Play button overlay */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              >
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Pulse rings */}
                  <span className="absolute inset-0 rounded-full bg-amber-500/30 animate-ping" />
                  <span className="absolute -inset-4 rounded-full bg-amber-500/10 animate-pulse" />

                  {/* Play button */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
                    <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actual video player */}
          {isPlaying && (
            <div className="absolute inset-0 bg-black">
              <video
                src="/videos/journey-1.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors z-10"
                aria-label="Close video"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>

        {/* Video stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { label: "Happy Pilgrims", value: "500+" },
            { label: "Video Views", value: "10K+" },
            { label: "5-Star Reviews", value: "200+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
