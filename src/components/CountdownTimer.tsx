"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const nextBatchDate = new Date();
    nextBatchDate.setDate(nextBatchDate.getDate() + 15);
    nextBatchDate.setHours(6, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextBatchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 rounded-2xl p-8 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Next Batch Starting Soon!</h3>
        <p className="text-white/80">Limited slots available - Book now to secure your spot</p>
      </div>

      <div className="flex justify-center gap-4 md:gap-8">
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[90px]">
              <motion.span
                key={block.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl md:text-5xl font-bold block"
              >
                {String(block.value).padStart(2, "0")}
              </motion.span>
            </div>
            <span className="text-sm md:text-base mt-2 block text-white/80">
              {block.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/booking"
          className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Book Your Slot Now
        </a>
      </div>
    </div>
  );
}
