"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the best time to visit Adikailash?",
    answer: "The best time to visit Adikailash is from May to October. June to September offers the most favorable weather conditions. The roads are clear and weather is pleasant during this period.",
  },
  {
    question: "Is prior trekking experience required?",
    answer: "No prior trekking experience is required for our tours. However, moderate fitness is recommended as you'll be at high altitudes. We recommend starting light walks 2-3 weeks before the journey.",
  },
  {
    question: "What documents are required for the yatra?",
    answer: "You'll need a valid government ID (Aadhaar/Passport/Voter ID), 4 passport-size photographs, and medical fitness certificate. We handle all permit arrangements on your behalf.",
  },
  {
    question: "Is Kailash Darshan guaranteed?",
    answer: "Kailash Darshan from Old Lipulekh Pass depends on permission from the Army. While we visit the area on every trip, the final darshan is subject to military clearance on that particular day.",
  },
  {
    question: "What about mobile network and connectivity?",
    answer: "Mobile network is very limited or unavailable in most areas during the yatra. BSNL has the best coverage. We recommend informing your family beforehand about limited connectivity.",
  },
  {
    question: "Is the journey safe for senior citizens?",
    answer: "We've successfully taken pilgrims aged 60+ on our tours. However, those with cardiac, respiratory, or diabetes conditions should consult their doctor first. We carry emergency oxygen on all trips.",
  },
  {
    question: "What type of accommodation is provided?",
    answer: "Accommodation includes hotels in towns (Dharchula, Pithoragarh) and guesthouses/homestays in remote areas (Nabi Village). Rooms are clean and comfortable with attached/common bathrooms.",
  },
  {
    question: "Can I customize a package for my group?",
    answer: "Yes! We offer customized packages for private groups. Contact us with your group size and preferences, and we'll create a personalized itinerary with the best rates.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-amber-500/30 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors"
          >
            <span className="font-semibold text-white pr-4">{faq.question}</span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 text-amber-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-5 text-gray-400 border-t border-slate-700/50 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
