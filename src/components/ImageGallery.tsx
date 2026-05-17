"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "from-blue-600 to-indigo-800", title: "Adikailash Peak", location: "Jonglingkong" },
  { src: "from-orange-500 to-red-600", title: "Omparvat", location: "Nabhidang" },
  { src: "from-emerald-600 to-green-800", title: "Parvati Sarovar", location: "Near Adikailash" },
  { src: "from-purple-600 to-violet-800", title: "Patal Bhuvneshwar", location: "Gangolihat" },
  { src: "from-cyan-500 to-blue-700", title: "River Kali", location: "Nabi Village" },
  { src: "from-amber-500 to-orange-700", title: "Jageshwar Dham", location: "Almora" },
  { src: "from-rose-500 to-pink-700", title: "Panchachuli Peaks", location: "Darma Valley" },
  { src: "from-teal-500 to-emerald-700", title: "Kainchi Dham", location: "Nainital" },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            onClick={() => setSelectedImage(index)}
            className={`relative cursor-pointer rounded-xl overflow-hidden shadow-lg ${
              index === 0 || index === 5 ? "md:col-span-2 md:row-span-2 h-64 md:h-full" : "h-40 md:h-48"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${image.src}`} />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white font-semibold">{image.title}</h4>
              <p className="text-gray-300 text-sm">{image.location}</p>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full h-[60vh] rounded-2xl bg-gradient-to-br ${images[selectedImage].src}`} />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-white text-2xl font-bold">{images[selectedImage].title}</h3>
                <p className="text-gray-300">{images[selectedImage].location}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage + 1) % images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
