import Link from "next/link";
import { cancellationPolicy } from "@/data/packages";

export const metadata = {
  title: "Terms & Conditions - Kailash Sangrila",
  description: "Read our terms and conditions, booking policy, cancellation policy, and important guidelines for Adikailash and Omparvat Yatra.",
};

export default function TermsPage() {
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
            Legal Information
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-gray-400">Please read these terms carefully before booking your yatra.</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 space-y-10">

            {/* Booking & Payment */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Booking & Payment Policy
              </h2>
              <ul className="space-y-3 text-gray-400 ml-11">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">30-40% advance payment</strong> is required to confirm the booking.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Remaining balance must be cleared <strong className="text-white">before the start of the journey</strong> (prior to departure from Delhi/Dharchula).</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Payments once made are subject to cancellation policies.</span>
                </li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Cancellation & Refund Policy
              </h2>
              <div className="ml-11">
                <p className="text-gray-400 mb-4">Cancellation charges will apply as per the timing of cancellation:</p>
                <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50">
                  <table className="w-full">
                    <thead className="bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-white">Cancellation Period</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold text-white">Deduction</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      {cancellationPolicy.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-gray-400">{item.period}</td>
                          <td className="px-4 py-3 text-right font-medium text-red-400">{item.deduction}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 mt-4 text-sm">
                  <strong className="text-gray-400">Note:</strong> No refund for unused services or early exit from the yatra.
                </p>
              </div>
            </div>

            {/* Weather & Force Majeure */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Weather & Force Majeure
              </h2>
              <ul className="space-y-3 text-gray-400 ml-11">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>The itinerary is subject to change due to weather, landslides, roadblocks, or government restrictions.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>Any additional cost due to delays (stay, transport, food) will be borne by the client.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>No refunds for delays or cancellations caused by natural or unavoidable circumstances.</span>
                </li>
              </ul>
            </div>

            {/* Responsibility & Liability */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Responsibility & Liability
              </h2>
              <ul className="space-y-3 text-gray-400 ml-11">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>We act as facilitators and are not liable for accidents, loss, injury, or death during the yatra.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Clients are responsible for their belongings.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong className="text-white">Travel insurance is highly recommended.</strong></span>
                </li>
              </ul>
            </div>

            {/* Behaviour & Discipline */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Behaviour & Discipline
              </h2>
              <ul className="space-y-3 text-gray-400 ml-11">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Participants must follow the instructions of the tour coordinator/guide.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Any misconduct may result in removal from the tour <strong className="text-white">without refund</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Special Notes */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 text-black rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Special Notes
              </h2>
              <div className="ml-11 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Mobile network connectivity is very limited or unavailable in many areas.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Electricity and water supply may be limited in remote locations.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">This is a spiritual and adventure journey, not a luxury tour.</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kailash Darshan Permission */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Kailash Darshan Permission
              </h2>
              <div className="ml-11 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Permission beyond Nabhidang <strong className="text-white">depends upon Army Forces</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Taxi fare of <strong className="text-white">Rs. 2,000 per person</strong> to be paid when army will allow for Darshan.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">No Prior Promise for Kailash Darshan.</strong></span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Persons with <strong className="text-white">Cardiac, Sugar, or any kind of Respiratory Disease are not allowed</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Back to Booking */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">By booking with us, you agree to these terms and conditions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
              >
                Book Your Yatra
              </Link>
              <Link
                href="/contact"
                className="border-2 border-slate-600 text-gray-300 hover:border-amber-500/50 hover:text-amber-400 px-8 py-3 rounded-full font-bold transition-colors"
              >
                Have Questions?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
