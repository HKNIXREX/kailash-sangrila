import Link from "next/link";
import PremiumPackageCard from "@/components/PremiumPackageCard";
import PremiumHero from "@/components/PremiumHero";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import JourneyMap from "@/components/JourneyMap";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import TrustBadges from "@/components/TrustBadges";
import BatchDates from "@/components/BatchDates";
import VideoSection from "@/components/VideoSection";
import PremiumGallery from "@/components/PremiumGallery";
import TiltCard from "@/components/TiltCard";
import { packages, inclusions } from "@/data/packages";

export default function Home() {
  const featuredPackages = packages.slice(0, 6);

  return (
    <div className="bg-black">
      {/* Premium Animated Hero */}
      <PremiumHero />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter
              end={500}
              suffix="+"
              label="Happy Pilgrims"
              icon={
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
            <AnimatedCounter
              end={7}
              label="Tour Packages"
              icon={
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <AnimatedCounter
              end={10}
              suffix="+"
              label="Years Experience"
              icon={
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <AnimatedCounter
              end={100}
              suffix="%"
              label="Safe Journeys"
              icon={
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Journey Map Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
              The Sacred Route
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Journey to the{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Divine Peaks
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Follow the sacred path through the magnificent Himalayas to reach the holy Adikailash and Omparvat.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <JourneyMap />
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your Trusted Partner for{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  Himalayan Pilgrimages
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Kailash Sangrila specializes in organizing spiritual journeys to the sacred peaks of
                Adikailash, Omparvat, and Kailash. With years of experience navigating the
                challenging terrains of Uttarakhand, we ensure a safe, comfortable, and
                spiritually enriching experience for all our pilgrims.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🏔️", text: "Expert Local Guides" },
                  { icon: "🏨", text: "Comfortable Stays" },
                  { icon: "📋", text: "All Permits Included" },
                  { icon: "🏥", text: "Medical Support" },
                ].map((item, index) => (
                  <TiltCard key={index}>
                    <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-amber-500/30 transition-colors cursor-pointer">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-gray-300">{item.text}</span>
                    </div>
                  </TiltCard>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold group"
              >
                Learn More About Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-500/20 rounded-full opacity-20 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-orange-500/20 rounded-full opacity-20 blur-3xl" />

                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <TiltCard>
                      <div className="rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-amber-600 to-orange-800 shadow-xl flex items-center justify-center">
                        <svg className="w-20 h-20 text-white/30" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                        </svg>
                      </div>
                    </TiltCard>
                    <TiltCard>
                      <div className="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-slate-700 to-slate-900 shadow-xl flex items-center justify-center border border-slate-600/50">
                        <svg className="w-24 h-24 text-amber-500/20" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                        </svg>
                      </div>
                    </TiltCard>
                  </div>
                  <div className="space-y-4 pt-8">
                    <TiltCard>
                      <div className="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-yellow-600 to-amber-800 shadow-xl flex items-center justify-center">
                        <svg className="w-24 h-24 text-white/30" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                        </svg>
                      </div>
                    </TiltCard>
                    <TiltCard>
                      <div className="rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-slate-800 to-black shadow-xl flex items-center justify-center border border-amber-500/30">
                        <svg className="w-20 h-20 text-amber-500/30" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M50 10 L70 40 L90 70 L50 60 L10 70 L30 40 Z" />
                        </svg>
                      </div>
                    </TiltCard>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white">500+</p>
                    <p className="text-sm text-gray-400">Happy Pilgrims</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
              Our Tours
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Premium{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Tour Packages
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our carefully curated pilgrimage packages designed to provide
              the most authentic and comfortable spiritual experience.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <PremiumPackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
            >
              View All Packages
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Batch Dates Section */}
      <BatchDates />

      {/* Inclusions Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold mb-4 border border-amber-500/30">
              What&apos;s Included
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need for a{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Perfect Journey</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {inclusions.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <TiltCard>
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/50 hover:border-amber-500/50 group h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white font-medium">{item}</p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PremiumGallery />

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Pilgrims Say
              </span>
            </h2>
          </AnimatedSection>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <FAQAccordion />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto">
              Book your Adikailash Yatra today and experience the divine beauty of the Himalayas.
              Limited slots available for upcoming batches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-black text-amber-400 hover:bg-slate-900 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Book Your Yatra Now
              </Link>
              <a
                href="tel:+919876543210"
                className="bg-transparent border-2 border-black text-black hover:bg-black/10 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +91 98765 43210
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
