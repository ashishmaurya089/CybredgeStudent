import React, { useEffect, useState } from "react";
import { Smile, BookOpen, Headphones, Users } from "lucide-react";

/* -------------------------------------
   Animated Counter Logic (Pure React)
-------------------------------------- */
function Counter({ end, duration }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(counter);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{value}</span>;
}

/* -------------------------------------
         MAIN COMPONENT (STATS)
-------------------------------------- */
function State() {
  return (
    <section id="stats" className="py-20 bg-white text-gray-800">
      <div
        className="container mx-auto px-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {/* 1. Happy Clients */}
          <StatsCard
            icon={<Smile className="w-10 h-10 text-[#e03a3c]" />}
            value={232}
            label="Happy Clients"
          />

          {/* 2. Projects */}
          <StatsCard
            icon={<BookOpen className="w-10 h-10 text-[#e03a3c]" />}
            value={521}
            label="Projects"
          />

          {/* 3. Hours Of Support */}
          <StatsCard
            icon={<Headphones className="w-10 h-10 text-[#e03a3c]" />}
            value={1463}
            label="Hours Of Support"
          />

          {/* 4. Hard Workers */}
          <StatsCard
            icon={<Users className="w-10 h-10 text-[#e03a3c]" />}
            value={15}
            label="Hard Workers"
          />

        </div>
      </div>
    </section>
  );
}

export default State;

/* -------------------------------------
      SINGLE STAT BOX COMPONENT
-------------------------------------- */
function StatsCard({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center space-y-4">

      {/* Icon Bubble */}
      <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full border-2 border-gray-200 shadow-[0_2px_25px_rgba(0,0,0,0.1)]">
        {icon}
      </div>

      {/* Number + Label */}
      <div className="w-full max-w-[180px] bg-white rounded-lg border border-gray-200 shadow-xl px-6 py-6">
        <p className="text-4xl font-bold text-gray-700">
          <Counter end={value} duration={1500} />
        </p>
        <p className="text-gray-700 mt-1 font-medium">{label}</p>
      </div>
    </div>
  );
}
