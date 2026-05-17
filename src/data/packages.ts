export interface DayItinerary {
  day: number;
  title: string;
  highlights: string[];
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  daysNights: string;
  pickupDropoff: string;
  price: number;
  priceNote: string;
  description: string;
  itinerary: DayItinerary[];
  highlights: string[];
}

// Helper function to get image path from package ID
// Just add images named as: {package-id}.jpg to public/images/
export function getPackageImage(packageId: string): string {
  return `/images/${packageId}.jpg`;
}

export const packages: TourPackage[] = [
  {
    id: "ex-dharchula-3d2n",
    name: "Adikailash & Omparvat Yatra",
    duration: "3 Days",
    daysNights: "3 Days / 2 Nights",
    pickupDropoff: "Ex Dharchula",
    price: 10800,
    priceNote: "Mix Group of 4 Pax",
    description: "Experience the divine journey to Adikailash and Omparvat starting from Dharchula. Witness breathtaking views of the Himalayas and sacred sites.",
    highlights: [
      "Bird's eye view of India and Nepal border",
      "Adikailash Ji Darshan",
      "Omparvat View Point",
      "Kailash Darshan from Old Lipulekh Pass"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dharchula to Nabi Village",
        highlights: [
          "Scenic Bird eye view of India and Nepal",
          "Explore the unexplored Valley",
          "Drive parallel to River Kali",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 2,
        title: "Nabi Village to Jonglingkong to Nabi",
        highlights: [
          "Morning Drive to Jonglingkong (Base Point of Adikailash Ji)",
          "Elephant Peak, Mata Kunti Fort, Bharma Parvat, Ganesh Parvat",
          "Adikailash Ji, Parvat Mukut, Pandav Parvat, Parvati Sarovar",
          "Shiv Parvati Dham, Bhim ki Kheti, Gauri Kund",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 3,
        title: "Nabi to Nabhidang to Dharchula",
        highlights: [
          "Morning Drive to Nabhidang (Omparvat View Point)",
          "Kalimata Temple, Origin of River Kali / Sharda",
          "Ved Vyas Rishi Cave, Sheshnag Parvat, Nabhi Parvat (Naval Peak)",
          "Omparvat, Trishul Parvat",
          "Drive to Old Lipulekh Pass for Kailash Darshan",
          "Drop off to Dharchula"
        ]
      }
    ]
  },
  {
    id: "ex-pithoragarh-3d2n",
    name: "Adikailash & Omparvat Yatra",
    duration: "3 Days",
    daysNights: "3 Days / 2 Nights",
    pickupDropoff: "Ex Pithoragarh",
    price: 12800,
    priceNote: "Mix Group of 4 Pax",
    description: "Begin your sacred journey from Pithoragarh and explore the divine Adikailash and Omparvat with stunning Himalayan views.",
    highlights: [
      "Bird's eye view of India and Nepal border",
      "Adikailash Ji Darshan",
      "Omparvat View Point",
      "Kailash Darshan from Old Lipulekh Pass"
    ],
    itinerary: [
      {
        day: 1,
        title: "Pithoragarh to Nabi Village",
        highlights: [
          "Scenic Bird eye view of India and Nepal",
          "Explore the unexplored Valley",
          "Drive parallel to River Kali",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 2,
        title: "Nabi Village to Jonglingkong to Nabi",
        highlights: [
          "Morning Drive to Jonglingkong (Base Point of Adikailash Ji)",
          "Elephant Peak, Mata Kunti Fort, Bharma Parvat, Ganesh Parvat",
          "Adikailash Ji, Parvat Mukut, Pandav Parvat, Parvati Sarovar",
          "Shiv Parvati Dham, Bhim ki Kheti, Gauri Kund",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 3,
        title: "Nabi to Nabhidang to Pithoragarh",
        highlights: [
          "Morning Drive to Nabhidang (Omparvat View Point)",
          "Kalimata Temple, Origin of River Kali / Sharda",
          "Ved Vyas Rishi Cave, Sheshnag Parvat, Nabhi Parvat (Naval Peak)",
          "Omparvat, Trishul Parvat",
          "Drive to Old Lipulekh Pass for Kailash Darshan",
          "Drop off to Dharchula/Pithoragarh"
        ]
      }
    ]
  },
  {
    id: "ex-kathgodam-direct-5d4n",
    name: "Adikailash & Omparvat Yatra (Direct)",
    duration: "5 Days",
    daysNights: "5 Days / 4 Nights",
    pickupDropoff: "Ex Kathgodam (Direct)",
    price: 17800,
    priceNote: "Mix Group of 4 Pax",
    description: "A comprehensive 5-day journey from Kathgodam covering the sacred Adikailash and Omparvat with comfortable stays.",
    highlights: [
      "Lush Green Valley of Uttarakhand",
      "Scenic Beauty of Kumaon Region",
      "Adikailash Ji Darshan",
      "Omparvat View Point",
      "Kailash Darshan"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kathgodam to Dharchula",
        highlights: [
          "Enjoy the Lush Green Valley of Uttarakhand",
          "Scenic Beauty of Kumaon Region",
          "Overnight Stay at Dharchula"
        ]
      },
      {
        day: 2,
        title: "Dharchula to Nabi Village",
        highlights: [
          "Scenic Bird eye view of India and Nepal",
          "Explore the unexplored Valley",
          "Drive parallel to River Kali",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 3,
        title: "Nabi Village to Jonglingkong to Nabi",
        highlights: [
          "Morning Drive to Jonglingkong (Base Point of Adikailash Ji)",
          "Elephant Peak, Mata Kunti Fort, Bharma Parvat, Ganesh Parvat",
          "Adikailash Ji, Parvat Mukut, Pandav Parvat, Parvati Sarovar",
          "Shiv Parvati Dham, Bhim ki Kheti, Gauri Kund",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 4,
        title: "Nabi to Nabhidang to Dharchula",
        highlights: [
          "Morning Drive to Nabhidang (Omparvat View Point)",
          "Kalimata Temple, Origin of River Kali / Sharda",
          "Ved Vyas Rishi Cave, Sheshnag Parvat, Nabhi Parvat (Naval Peak)",
          "Omparvat, Trishul Parvat",
          "Drive to Old Lipulekh Pass for Kailash Darshan",
          "Overnight Stay Dharchula"
        ]
      },
      {
        day: 5,
        title: "Dharchula to Kathgodam",
        highlights: [
          "Drive back to Kathgodam",
          "Farewell to Beautiful Yatra",
          "Keep Memories Safe, Plan again & Get blessing from Lord Shiva"
        ]
      }
    ]
  },
  {
    id: "ex-kathgodam-kumaon-6d5n",
    name: "Adikailash Yatra with Kumaon Darshan",
    duration: "6 Days",
    daysNights: "6 Days / 5 Nights",
    pickupDropoff: "Ex Kathgodam (Kumaon Darshan)",
    price: 22000,
    priceNote: "Mix Group of 4 Pax",
    description: "Experience the best of Kumaon region along with the divine Adikailash Yatra. Visit Kainchi Dham, Jageshwar Dham, and more.",
    highlights: [
      "Kainchi Dham & Baba Neeb Karoli Ashram",
      "Jageshwar Dham & Chitai Golu Devta",
      "Adikailash Ji Darshan",
      "Omparvat View Point",
      "Patal Bhuvneshwar Cave"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kathgodam to Pithoragarh",
        highlights: [
          "Enjoy the Lush Green Valley of Uttarakhand",
          "Kainchi Dham Darshan, Baba Neeb Karoli Ashram",
          "Jageshwar Dham, Chitai Golu Devta",
          "Scenic Beauty of Kumaon Region",
          "Overnight Stay at Pithoragarh"
        ]
      },
      {
        day: 2,
        title: "Pithoragarh to Nabi Village",
        highlights: [
          "Scenic Bird eye view of India and Nepal",
          "Explore the unexplored Valley",
          "Drive parallel to River Kali",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 3,
        title: "Nabi Village to Jonglingkong to Nabi",
        highlights: [
          "Morning Drive to Jonglingkong (Base Point of Adikailash Ji)",
          "Elephant Peak, Mata Kunti Fort, Bharma Parvat, Ganesh Parvat",
          "Adikailash Ji, Parvat Mukut, Pandav Parvat, Parvati Sarovar",
          "Shiv Parvati Dham, Bhim ki Kheti, Gauri Kund",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 4,
        title: "Nabi to Nabhidang to Dharchula",
        highlights: [
          "Morning Drive to Nabhidang (Omparvat View Point)",
          "Kalimata Temple, Origin of River Kali / Sharda",
          "Ved Vyas Rishi Cave, Sheshnag Parvat, Nabhi Parvat (Naval Peak)",
          "Omparvat, Trishul Parvat",
          "Drive to Old Lipulekh Pass for Kailash Darshan",
          "Overnight Stay at Dharchula"
        ]
      },
      {
        day: 5,
        title: "Dharchula to Patal Bhuvneshwar",
        highlights: [
          "Morning Drive to Patal Bhuvneshwar Cave",
          "Enroute - Didhat, Thal, Chaukori",
          "Overnight Stay at Chaukori / Patal Bhuvneshwar"
        ]
      },
      {
        day: 6,
        title: "Patal Bhuvneshwar to Kathgodam",
        highlights: [
          "Morning Darshan of Patal Bhuvneshwar Cave",
          "Drive back to Kathgodam",
          "Farewell to Beautiful Yatra"
        ]
      }
    ]
  },
  {
    id: "ex-kathgodam-darma-8d7n",
    name: "Adikailash Yatra with Kumaon & Darma Valley",
    duration: "8 Days",
    daysNights: "8 Days / 7 Nights",
    pickupDropoff: "Ex Kathgodam (Kumaon Darshan + Darma Valley)",
    price: 27500,
    priceNote: "Mix Group of 4 Pax",
    description: "The ultimate Himalayan adventure combining Adikailash, Kumaon Darshan, and the magnificent Darma Valley with Panchachuli Base Camp trek.",
    highlights: [
      "Kainchi Dham & Jageshwar Dham",
      "Adikailash Ji & Omparvat Darshan",
      "Darma Valley Exploration",
      "Panchachuli Base Camp Hike",
      "Patal Bhuvneshwar Cave"
    ],
    itinerary: [
      {
        day: 1,
        title: "Kathgodam to Pithoragarh",
        highlights: [
          "Enjoy the Lush Green Valley of Uttarakhand",
          "Kainchi Dham Darshan, Baba Neeb Karoli Ashram",
          "Jageshwar Dham, Chitai Golu Devta",
          "Overnight Stay at Pithoragarh"
        ]
      },
      {
        day: 2,
        title: "Pithoragarh to Nabi Village",
        highlights: [
          "Scenic Bird eye view of India and Nepal",
          "Explore the unexplored Valley",
          "Drive parallel to River Kali",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 3,
        title: "Nabi Village to Jonglingkong to Nabi",
        highlights: [
          "Morning Drive to Jonglingkong (Base Point of Adikailash Ji)",
          "Elephant Peak, Mata Kunti Fort, Bharma Parvat, Ganesh Parvat",
          "Adikailash Ji, Parvat Mukut, Pandav Parvat, Parvati Sarovar",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 4,
        title: "Nabi to Nabhidang to Dantu",
        highlights: [
          "Morning Drive to Nabhidang (Omparvat View Point)",
          "Kalimata Temple, Origin of River Kali / Sharda",
          "Ved Vyas Rishi Cave, Sheshnag Parvat",
          "Drive to Old Lipulekh Pass for Kailash Darshan",
          "Overnight Stay at Dantu Village (Darma Valley)"
        ]
      },
      {
        day: 5,
        title: "Hike to Panchachuli Basecamp",
        highlights: [
          "Hike to Panchachuli Zero Point",
          "Stunning views of Panchachuli peaks",
          "Overnight Stay at Dantu Village"
        ]
      },
      {
        day: 6,
        title: "Dantu to Dharchula",
        highlights: [
          "Morning departure from Darma Valley",
          "Scenic drive through mountain terrain",
          "Overnight Stay at Dharchula"
        ]
      },
      {
        day: 7,
        title: "Dharchula to Patal Bhuvneshwar",
        highlights: [
          "Morning Drive to Patal Bhuvneshwar Cave",
          "Enroute - Didhat, Thal, Chaukori",
          "Overnight Stay at Chaukori / Patal Bhuvneshwar"
        ]
      },
      {
        day: 8,
        title: "Patal Bhuvneshwar to Kathgodam",
        highlights: [
          "Morning Darshan of Patal Bhuvneshwar Cave",
          "Drive back to Kathgodam",
          "Farewell to Beautiful Yatra"
        ]
      }
    ]
  },
  {
    id: "ex-delhi-direct-5d4n",
    name: "Adikailash & Omparvat Yatra (Direct)",
    duration: "5 Days",
    daysNights: "5 Days / 4 Nights",
    pickupDropoff: "Ex Delhi (Direct)",
    price: 20800,
    priceNote: "Mix Group of 4 Pax",
    description: "Start your divine journey directly from Delhi for a comfortable 5-day pilgrimage to Adikailash and Omparvat.",
    highlights: [
      "Convenient Delhi Pickup",
      "Kumaon Region Beauty",
      "Adikailash Ji Darshan",
      "Omparvat View Point",
      "Kailash Darshan"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Pithoragarh",
        highlights: [
          "Enjoy the Lush Green Valley of Uttarakhand",
          "Scenic Beauty of Kumaon Region",
          "Overnight Stay at Dharchula"
        ]
      },
      {
        day: 2,
        title: "Pithoragarh to Nabi Village",
        highlights: [
          "Scenic Bird eye view of India and Nepal",
          "Explore the unexplored Valley",
          "Drive parallel to River Kali",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 3,
        title: "Nabi Village to Jonglingkong to Nabi",
        highlights: [
          "Morning Drive to Jonglingkong (Base Point of Adikailash Ji)",
          "Elephant Peak, Mata Kunti Fort, Bharma Parvat, Ganesh Parvat",
          "Adikailash Ji, Parvat Mukut, Pandav Parvat, Parvati Sarovar",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 4,
        title: "Nabi to Nabhidang to Pithoragarh",
        highlights: [
          "Morning Drive to Nabhidang (Omparvat View Point)",
          "Kalimata Temple, Origin of River Kali / Sharda",
          "Ved Vyas Rishi Cave, Sheshnag Parvat",
          "Drive to Old Lipulekh Pass for Kailash Darshan",
          "Overnight Stay Pithoragarh"
        ]
      },
      {
        day: 5,
        title: "Pithoragarh to Delhi",
        highlights: [
          "Drive back to Delhi",
          "Farewell to Beautiful Yatra",
          "Keep Memories Safe, Plan again & Get blessing from Lord Shiva"
        ]
      }
    ]
  },
  {
    id: "ex-delhi-kumaon-8d7n",
    name: "Adikailash Yatra with Kumaon Darshan",
    duration: "8 Days",
    daysNights: "8 Days / 7 Nights",
    pickupDropoff: "Ex Delhi (Kumaon Darshan)",
    price: 28500,
    priceNote: "Mix Group of 4 Pax",
    description: "The most comprehensive tour starting from Delhi covering Bhimtal, Kumaon temples, Adikailash, Omparvat, and Patal Bhuvneshwar.",
    highlights: [
      "Bhimtal Lake Stay",
      "Kainchi Dham & Jageshwar Dham",
      "Adikailash Ji & Omparvat Darshan",
      "Patal Bhuvneshwar Cave",
      "Complete Kumaon Experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Bhimtal",
        highlights: [
          "Enjoy the Lush Green Valley of Uttarakhand",
          "Scenic Beauty of Kumaon Region",
          "Overnight Stay at Bhimtal"
        ]
      },
      {
        day: 2,
        title: "Bhimtal to Dharchula",
        highlights: [
          "Kainchi Dham Darshan, Baba Neeb Karoli Ashram",
          "Jageshwar Dham, Chitai Golu Devta",
          "Scenic Beauty of Kumaon Region",
          "Overnight Stay at Dharchula"
        ]
      },
      {
        day: 3,
        title: "Dharchula to Nabi Village",
        highlights: [
          "Scenic Bird eye view of India and Nepal",
          "Explore the unexplored Valley",
          "Drive parallel to River Kali",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 4,
        title: "Nabi Village to Jonglingkong to Nabi",
        highlights: [
          "Morning Drive to Jonglingkong (Base Point of Adikailash Ji)",
          "Elephant Peak, Mata Kunti Fort, Bharma Parvat, Ganesh Parvat",
          "Adikailash Ji, Parvat Mukut, Pandav Parvat, Parvati Sarovar",
          "Overnight Stay at Nabi"
        ]
      },
      {
        day: 5,
        title: "Nabi to Nabhidang to Dharchula",
        highlights: [
          "Morning Drive to Nabhidang (Omparvat View Point)",
          "Kalimata Temple, Origin of River Kali / Sharda",
          "Ved Vyas Rishi Cave, Sheshnag Parvat",
          "Drive to Old Lipulekh Pass for Kailash Darshan",
          "Overnight Stay at Dharchula"
        ]
      },
      {
        day: 6,
        title: "Dharchula to Patal Bhuvneshwar",
        highlights: [
          "Morning Drive to Patal Bhuvneshwar Cave",
          "Enroute - Didhat, Thal, Chaukori",
          "Overnight Stay at Chaukori / Patal Bhuvneshwar"
        ]
      },
      {
        day: 7,
        title: "Patal Bhuvneshwar to Haldwani",
        highlights: [
          "Morning Darshan of Patal Bhuvneshwar Cave",
          "Drive back to Haldwani",
          "Overnight Stay at Haldwani"
        ]
      },
      {
        day: 8,
        title: "Haldwani to Delhi",
        highlights: [
          "Morning departure",
          "Drive to Delhi",
          "Farewell to Beautiful Yatra"
        ]
      }
    ]
  }
];

export const inclusions = [
  "Transportation",
  "Auspicious Accommodation",
  "Breakfast & Dinner (Veg Only)",
  "Medical and Permit",
  "Emergency Oxygen Can"
];

export const exclusions = [
  "Anything which is not Mentioned in Inclusion",
  "Porter or Driver Tips",
  "Horse Ride Booking",
  "Taxi fare for Nabhidang to Old Lipulekh Rs. 2,000 per person"
];

export const packingList = {
  essentials: [
    "Valid Government ID (Aadhaar / Passport / Voter ID)",
    "Warm jackets (heavy woolen / down jacket)",
    "Thermal innerwear (top & bottom)",
    "Full sleeve t-shirts / shirts",
    "Fleece / sweaters",
    "Trek pants / comfortable lowers",
    "Woolen cap / muffler",
    "Gloves (woolen + waterproof)",
    "Comfortable nightwear",
    "Extra pairs of socks (woolen + cotton)",
    "Trekking shoes",
    "Sunglasses (UV protected)"
  ],
  medicines: [
    "Personal prescribed medicines",
    "Basic first aid kit",
    "Medicines for cold, fever, headache, vomiting",
    "Diamox (for altitude sickness - only after doctor consultation)",
    "ORS / energy drinks"
  ]
};

export const cancellationPolicy = [
  { period: "30 days or more before departure", deduction: "20%" },
  { period: "15-30 days before departure", deduction: "40%" },
  { period: "7-15 days before departure", deduction: "60%" },
  { period: "Less than 7 days / No show", deduction: "No refund" }
];
