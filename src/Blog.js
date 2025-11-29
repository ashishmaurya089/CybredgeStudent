import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Blog() {
  return (
    <div className="w-screen">
      <div className="max-w-6xl mx-auto mt-10 p-0">

        {/* Title */}
        <div className="p-5 mb-[70px]">
          <a 
            href="#" 
            className="text-red-500 no-underline"
          >
            Home
          </a>
        </div>

        {/* Left & Right Sections */}
        <div className="flex flex-wrap gap-6">

          {/* Left Section - 65% width on large screens */}
          <div className="w-full lg:w-[65%]">
            <Section1 />
          </div>

          {/* Right Section - 30% width on large screens */}
          <div className="w-full lg:w-[30%]">
            <Section2 />
          </div>

        </div>
      </div>
    </div>
  );
}
