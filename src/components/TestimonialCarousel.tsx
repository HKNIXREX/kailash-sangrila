"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "An absolutely divine experience! The team took care of everything perfectly. The views of Adikailash were breathtaking. I felt a deep spiritual connection throughout the journey.",
    image: "RK",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Highly recommend Kailash Sangrila for anyone seeking a spiritual journey. Professional, caring, and knowledgeable guides. The accommodation was comfortable even at high altitudes.",
    image: "PS",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "The 8-day Kumaon Darshan package was worth every rupee. From Jageshwar to Adikailash, every moment was memorable. The food was great too!",
    image: "AP",
  },
  {
    name: "Sunita Devi",
    location: "Jaipur",
    rating: 5,
    text: "At 58, I was worried about the journey, but the team made it so comfortable. They took care of my health throughout. Truly blessed to have this darshan.",
    image: "SD",
  },
  {
    name: "Vikram Singh",
    location: "Chandigarh",
    rating: 5,
    text: "Second time with Kailash Sangrila. First was Adikailash, now completed the Darma Valley trek. Both experiences were exceptional. Already planning the next one!",
    image: "VS",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="py-4">
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="!pb-14"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="!w-[350px] py-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 mx-2 border border-slate-700/50 hover:border-amber-500/30">
              {/* Quote icon */}
              <div className="text-amber-400 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {testimonial.image}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
