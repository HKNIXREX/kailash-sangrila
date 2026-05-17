import Link from "next/link";

export const metadata = {
  title: "About Us - Divya Darshan | Your Himalayan Pilgrimage Partner",
  description: "Learn about Divya Darshan, your trusted partner for Adikailash, Omparvat, and Kailash Yatra. Expert guides, safe journeys, and unforgettable spiritual experiences.",
};

export default function AboutPage() {
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
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Divya Darshan
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore the Unexplored - Your gateway to sacred Himalayan pilgrimages
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Born from a Passion for{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  Sacred Journeys
                </span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Divya Darshan was founded with a simple yet profound mission: to make the sacred pilgrimage
                to Adikailash, Omparvat, and the magnificent peaks of the Kumaon Himalayas accessible to
                devotees from all walks of life.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our founders, born and raised in the valleys of Uttarakhand, have deep roots in these sacred
                mountains. Their intimate knowledge of the terrain, weather patterns, and local culture ensures
                that every pilgrim receives not just a tour, but a truly transformative spiritual experience.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Today, we have successfully guided hundreds of pilgrims to witness the divine beauty of
                Adikailash Ji and experience the spiritual energy of these sacred peaks.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl h-48 bg-gradient-to-br from-amber-600 to-orange-800 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/30" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                  </svg>
                </div>
                <div className="rounded-2xl h-64 bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600/50 flex items-center justify-center">
                  <svg className="w-20 h-20 text-amber-500/20" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl h-64 bg-gradient-to-br from-yellow-600 to-amber-800 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/30" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                  </svg>
                </div>
                <div className="rounded-2xl h-48 bg-gradient-to-br from-slate-800 to-black border border-amber-500/30 flex items-center justify-center">
                  <svg className="w-16 h-16 text-amber-500/30" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              What Sets Us{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Apart
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Safety First",
                description: "Emergency oxygen, medical support, and experienced guides ensure your safety at high altitudes."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Local Expertise",
                description: "Our guides are locals who know every trail, temple, and story of these sacred mountains."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Spiritual Focus",
                description: "We understand the spiritual significance of these journeys and respect their sacred nature."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Transparent Pricing",
                description: "No hidden costs. All inclusions and exclusions are clearly communicated upfront."
              }
            ].map((value, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700/50 hover:border-amber-500/30 transition-colors">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-400 border border-amber-500/30">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Pilgrims" },
              { number: "10+", label: "Years Experience" },
              { number: "7", label: "Tour Packages" },
              { number: "100%", label: "Safe Journeys" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations We Cover */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
              Sacred Sites
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Destinations We{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Cover
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Adikailash Ji",
                description: "Also known as Chhota Kailash, this sacred peak is believed to be Lord Shiva's abode. Standing at 6,191 meters, it mirrors the famous Mount Kailash."
              },
              {
                name: "Omparvat",
                description: "The mountain with the natural 'Om' symbol etched in snow. A spiritually significant site that fills devotees with divine energy."
              },
              {
                name: "Patal Bhuvneshwar",
                description: "A limestone cave temple with natural rock formations representing the entire Hindu pantheon. An underground marvel."
              },
              {
                name: "Jageshwar Dham",
                description: "A cluster of 124 ancient stone temples dedicated to Lord Shiva, nestled in the Deodar forests of Kumaon."
              },
              {
                name: "Kainchi Dham",
                description: "The famous ashram of Neem Karoli Baba, visited by spiritual seekers from around the world including Steve Jobs."
              },
              {
                name: "Darma Valley",
                description: "A pristine valley leading to Panchachuli Base Camp, offering some of the most stunning Himalayan views."
              }
            ].map((dest, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-amber-500 hover:bg-slate-800 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{dest.name}</h3>
                <p className="text-gray-400 text-sm">{dest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Experience the Divine?
          </h2>
          <p className="text-black/80 text-lg mb-8">
            Join us on a journey that will transform your spirit and create memories for a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-black text-amber-400 hover:bg-slate-900 px-8 py-4 rounded-full font-bold transition-colors"
            >
              View Tour Packages
            </Link>
            <Link
              href="/contact"
              className="border-2 border-black text-black hover:bg-black/10 px-8 py-4 rounded-full font-bold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
