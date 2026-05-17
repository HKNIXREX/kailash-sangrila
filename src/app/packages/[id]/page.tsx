import Link from "next/link";
import { notFound } from "next/navigation";
import { packages, inclusions, exclusions, packingList } from "@/data/packages";
import PackageImage from "@/components/PackageImage";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    id: pkg.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const pkg = packages.find((p) => p.id === resolvedParams.id);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.name} - ${pkg.pickupDropoff} | Kailash Sangrila`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const pkg = packages.find((p) => p.id === resolvedParams.id);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <PackageImage
            packageId={pkg.id}
            alt={pkg.name}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/packages"
            className="inline-flex items-center text-gray-400 hover:text-amber-400 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Packages
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
              {pkg.duration}
            </span>
            <span className="bg-slate-800/80 text-gray-300 px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border border-slate-700">
              {pkg.pickupDropoff}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pkg.name}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-8">{pkg.description}</p>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Rs. {pkg.price.toLocaleString()}</span>
              <span className="text-gray-400 ml-2">/ per person</span>
            </div>
            <Link
              href={`/booking?package=${pkg.id}`}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
            >
              Book This Package
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Itinerary */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-8">Detailed Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-amber-500/30 last:border-transparent last:pb-0">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-black text-xs font-bold">
                      {day.day}
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 ml-4 hover:border-amber-500/30 transition-colors">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Day {day.day}: {day.title}
                      </h3>
                      <ul className="space-y-2">
                        {day.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start text-gray-400">
                            <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tour Highlights */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Tour Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 hover:bg-amber-500/20 transition-colors">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 sticky top-24 mb-8">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Rs. {pkg.price.toLocaleString()}</span>
                  <p className="text-gray-500 text-sm">{pkg.priceNote}</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Duration</span>
                    <span className="font-medium text-white">{pkg.daysNights}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Start Point</span>
                    <span className="font-medium text-white">{pkg.pickupDropoff.replace("Ex ", "")}</span>
                  </div>
                </div>
                <Link
                  href={`/booking?package=${pkg.id}`}
                  className="block w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black text-center py-3 rounded-xl font-bold transition-all duration-300 mb-3 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
                >
                  Book Now
                </Link>
                <a
                  href="https://wa.me/918979092584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-bold transition-colors"
                >
                  WhatsApp Inquiry
                </a>
              </div>

              {/* Inclusions */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Inclusions
                </h3>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Exclusions
                </h3>
                <ul className="space-y-2">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Things to Pack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Essentials
              </h3>
              <ul className="space-y-2">
                {packingList.essentials.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-400 text-sm">
                    <svg className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Medicines & Health Kit
              </h3>
              <ul className="space-y-2">
                {packingList.medicines.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-400 text-sm">
                    <svg className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Ready to Book This Package?</h2>
          <p className="text-black/80 mb-8">
            Contact us now to confirm your slot. Limited seats available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/booking?package=${pkg.id}`}
              className="bg-black text-amber-400 hover:bg-slate-900 px-8 py-3 rounded-full font-bold transition-colors"
            >
              Book Now
            </Link>
            <a
              href="tel:+918979092584"
              className="border-2 border-black text-black hover:bg-black/10 px-8 py-3 rounded-full font-bold transition-colors"
            >
              Call: +91 89790 92584
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
