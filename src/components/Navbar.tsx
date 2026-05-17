"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HanumanIcon from "@/components/HanumanIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-amber-500/20 shadow-lg shadow-amber-500/5"
          : "bg-black/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
                <HanumanIcon className="w-10 h-10 text-black" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Kailash</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent"> Sangrila</span>
                <p className="text-xs text-gray-400 -mt-1">Explore the Unexplored</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-amber-400 font-semibold transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/packages" className="text-white hover:text-amber-400 font-semibold transition-colors relative group">
              Packages
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/about" className="text-white hover:text-amber-400 font-semibold transition-colors relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/contact" className="text-white hover:text-amber-400 font-semibold transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/booking"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-amber-400 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-xl border-t border-amber-500/20 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          <Link href="/" className="block text-gray-300 hover:text-amber-400 font-medium py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/packages" className="block text-gray-300 hover:text-amber-400 font-medium py-2" onClick={() => setIsOpen(false)}>
            Packages
          </Link>
          <Link href="/about" className="block text-gray-300 hover:text-amber-400 font-medium py-2" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className="block text-gray-300 hover:text-amber-400 font-medium py-2" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            href="/booking"
            className="block bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-3 rounded-full font-bold text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
