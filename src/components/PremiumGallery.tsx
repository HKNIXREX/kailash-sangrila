"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { id: 1, title: "Adikailash Peak", category: "peaks", color: "from-blue-900 to-indigo-900" },
  { id: 2, title: "Omparvat View", category: "peaks", color: "from-purple-900 to-violet-900" },
  { id: 3, title: "Journey Path", category: "trek", color: "from-green-900 to-emerald-900" },
  { id: 4, title: "Base Camp", category: "camp", color: "from-amber-900 to-orange-900" },
  { id: 5, title: "Sunrise View", category: "peaks", color: "from-rose-900 to-pink-900" },
  { id: 6, title: "Local Village", category: "culture", color: "from-cyan-900 to-teal-900" },
  { id: 7, title: "Mountain Trail", category: "trek", color: "from-slate-800 to-slate-900" },
  { id: 8, title: "Pilgrim Group", category: "culture", color: "from-yellow-900 to-amber-900" },
];

const categories = ["all", "peaks", "trek", "camp", "culture"];

export default function PremiumGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
            Photo Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Glimpses of the{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Divine Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the breathtaking landscapes you&apos;ll experience during your pilgrimage
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black"
                  : "bg-slate-800 text-gray-400 hover:text-white border border-slate-700 hover:border-amber-500/50"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image.id)}
                className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer group ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* Gradient placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${image.color}`} />

                {/* Mountain icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/10" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                  </svg>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 border-2 border-white rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold">{image.title}</h4>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full capitalize">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full aspect-video rounded-3xl overflow-hidden"
              >
                {/* Image content */}
                <div className={`absolute inset-0 bg-gradient-to-br ${galleryImages.find(img => img.id === selectedImage)?.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-32 h-32 text-white/20" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-2xl font-bold">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </h3>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
