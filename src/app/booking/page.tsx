"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { packages } from "@/data/packages";

function BookingForm() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");

  const [formData, setFormData] = useState({
    packageId: packageId || "",
    name: "",
    email: "",
    phone: "",
    travelers: "1",
    travelDate: "",
    specialRequests: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (packageId) {
      setFormData((prev) => ({ ...prev, packageId }));
    }
  }, [packageId]);

  const selectedPackage = packages.find((p) => p.id === formData.packageId);
  const totalPrice = selectedPackage
    ? selectedPackage.price * parseInt(formData.travelers || "1")
    : 0;
  const advancePayment = Math.round(totalPrice * 0.3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center py-20">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Booking Request Received!</h2>
          <p className="text-gray-400 mb-6">
            Thank you for your booking request. Our team will contact you within 24 hours to confirm your booking and share payment details.
          </p>
          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black py-3 rounded-xl font-bold transition-colors"
            >
              Back to Home
            </Link>
            <a
              href="https://wa.me/918979092584"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-6">
            Secure Booking
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Book Your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Yatra
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Fill in your details to request a booking. Our team will get in touch shortly.</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Booking Details</h2>

                {/* Package Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Package *
                  </label>
                  <select
                    value={formData.packageId}
                    onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white transition-colors"
                    required
                  >
                    <option value="" className="bg-slate-900">Choose a package</option>
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id} className="bg-slate-900">
                        {pkg.name} - {pkg.pickupDropoff} ({pkg.daysNights}) - Rs. {pkg.price.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-colors"
                      placeholder="+91 89790 92584"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Number of Travelers *
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white transition-colors"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n} className="bg-slate-900">{n} {n === 1 ? "Person" : "People"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Travel Date *
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white transition-colors"
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-colors resize-none"
                    placeholder="Any dietary requirements, accessibility needs, or special requests..."
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-1 mr-3 accent-amber-500"
                      required
                    />
                    <span className="text-sm text-gray-400">
                      I agree to the{" "}
                      <Link href="/terms" className="text-amber-400 hover:text-amber-300 transition-colors">
                        Terms & Conditions
                      </Link>{" "}
                      and cancellation policy.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 disabled:from-amber-500/50 disabled:to-yellow-500/50 text-black py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Submit Booking Request"
                  )}
                </button>
              </form>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4">Booking Summary</h3>

                {selectedPackage ? (
                  <>
                    <div className="border-b border-slate-700 pb-4 mb-4">
                      <h4 className="font-medium text-white">{selectedPackage.name}</h4>
                      <p className="text-sm text-gray-400">{selectedPackage.pickupDropoff}</p>
                      <p className="text-sm text-gray-400">{selectedPackage.daysNights}</p>
                    </div>

                    <div className="space-y-3 border-b border-slate-700 pb-4 mb-4">
                      <div className="flex justify-between text-gray-400">
                        <span>Price per person</span>
                        <span className="text-white">Rs. {selectedPackage.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Travelers</span>
                        <span className="text-white">x {formData.travelers}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between font-semibold text-lg">
                        <span className="text-white">Total</span>
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Rs. {totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Advance (30%)</span>
                        <span>Rs. {advancePayment.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                      <p className="text-sm text-amber-400">
                        <strong>Note:</strong> 30-40% advance payment required to confirm booking. Remaining balance before departure.
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Select a package to see pricing
                  </p>
                )}

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-sm text-gray-400 mb-3">Need help booking?</p>
                  <a
                    href="tel:+918979092584"
                    className="flex items-center justify-center w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-medium transition-colors border border-slate-600"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call +91 89790 92584
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    }>
      <BookingForm />
    </Suspense>
  );
}
