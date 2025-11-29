import React from "react";
import {
  Briefcase,
  ClipboardList,
  BarChart3,
  Binoculars,
  Sun,
  CalendarDays,
} from "lucide-react";

function Service() {
  return (
    <section
      id="services"
      className="relative py-24 bg-[#1b1b1b] text-white overflow-hidden"
    >
      {/* Tilt Background Layer */}
      <div className="absolute inset-0 top-16 bottom-16 bg-[#1b1b1b] -skew-y-3"></div>

      {/* Section Title */}
      <div
        className="relative max-w-3xl mx-auto text-center mb-16"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold uppercase tracking-wider mb-6 relative inline-block">
          Services
          <span className="absolute left-0 right-0 -bottom-2 mx-auto w-12 h-[3px] bg-[#e03a3c]"></span>
        </h2>
        <p className="text-gray-300">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Service 1 */}
          <ServiceCard
            delay="100"
            icon={<Briefcase className="w-10 h-10 text-[#e03a3c]" />}
            title="Lorem Ipsum"
            desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
          />

          {/* Service 2 */}
          <ServiceCard
            delay="200"
            icon={<ClipboardList className="w-10 h-10 text-[#e03a3c]" />}
            title="Dolor Sitema"
            desc="Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
          />

          {/* Service 3 */}
          <ServiceCard
            delay="300"
            icon={<BarChart3 className="w-10 h-10 text-[#e03a3c]" />}
            title="Sed ut perspiciatis"
            desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          />

          {/* Service 4 */}
          <ServiceCard
            delay="400"
            icon={<Binoculars className="w-10 h-10 text-[#e03a3c]" />}
            title="Magni Dolores"
            desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          />

          {/* Service 5 */}
          <ServiceCard
            delay="500"
            icon={<Sun className="w-10 h-10 text-[#e03a3c]" />}
            title="Nemo Enim"
            desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
          />

          {/* Service 6 */}
          <ServiceCard
            delay="600"
            icon={<CalendarDays className="w-10 h-10 text-[#e03a3c]" />}
            title="Eiusmod Tempor"
            desc="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
   REUSABLE SERVICE CARD  
---------------------------- */
function ServiceCard({ delay, icon, title, desc }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <div className="flex gap-6 p-8 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/20 transition h-full">
        {icon}
        <div>
          <h4 className="text-xl font-bold mb-3">
            <a
              href="/service-details"
              className="text-white hover:text-[#e03a3c] duration-300"
            >
              {title}
            </a>
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
