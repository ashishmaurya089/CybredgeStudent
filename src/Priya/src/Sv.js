import React from "react";
import {
  Briefcase,
  Gem,
  Radio,
  Presentation,
  ChevronRight,
} from "lucide-react";

function Sv() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#1b1b1b] text-white overflow-hidden"
    >
      {/* Background Tilt */}
      <div className="absolute inset-0 top-16 bottom-16 bg-[#1b1b1b] -skew-y-3"></div>

      <div className="relative container mx-auto px-6">
        <div className="grid xl:grid-cols-[5fr_7fr] gap-10 items-start">

          {/* LEFT CONTENT */}
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-5">
            <h3 className="text-3xl font-semibold leading-snug">
              Voluptatem dignissimos provident quasi
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Duis aute irure dolor in reprehenderit.
            </p>

            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold 
              border-2 rounded-full border-[#e03a3c] hover:bg-[#e03a3c] transition"
            >
              About Us
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* RIGHT ICON BOXES */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-6">

              <IconBox
                icon={<Briefcase className="w-10 h-10 text-[#e03a3c]" />}
                title="Corporis voluptates sit"
                desc="Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip."
              />

              <IconBox
                icon={<Gem className="w-10 h-10 text-[#e03a3c]" />}
                title="Ullamco laboris nisi"
                desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
              />

              <IconBox
                icon={<Radio className="w-10 h-10 text-[#e03a3c]" />}
                title="Labore consequatur"
                desc="Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere."
              />

              <IconBox
                icon={<Presentation className="w-10 h-10 text-[#e03a3c]" />}
                title="Beatae veritatis"
                desc="Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta."
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sv;

/* ICON BOX COMPONENT */
function IconBox({ icon, title, desc }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 
      hover:bg-white/20 transition relative">
      <div className="mb-4">{icon}</div>

      <h4 className="text-xl font-semibold mb-2">
        <a href="#" className="hover:text-[#e03a3c] transition">
          {title}
        </a>
      </h4>

      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
