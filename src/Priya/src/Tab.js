import { useState } from "react";
import image1 from "./img1.jpg";
import image2 from "./working-2.jpg";
import image3 from "./working-3.jpg";
import image4 from "./working-4.jpg";

import {
  Binoculars,
  Box,
  Sun,
  Command,
  CheckCheck,
} from "lucide-react";

function Tab() {
  const [showCard, setShowCard] = useState(1);

  return (
    <section id="tabs" className="py-20 bg-white text-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ---------- NAV TABS ---------- */}
        <ul
          className="grid grid-cols-4 gap-4 text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <TabButton
            active={showCard === 1}
            onClick={() => setShowCard(1)}
            icon={<Binoculars className="w-9 h-9" />}
            label="Modi sit est dela pireda nest"
          />

          <TabButton
            active={showCard === 2}
            onClick={() => setShowCard(2)}
            icon={<Box className="w-9 h-9" />}
            label="Unde praesenti mara setra le"
          />

          <TabButton
            active={showCard === 3}
            onClick={() => setShowCard(3)}
            icon={<Sun className="w-9 h-9" />}
            label="Pariatur explica nitro dela"
          />

          <TabButton
            active={showCard === 4}
            onClick={() => setShowCard(4)}
            icon={<Command className="w-9 h-9" />}
            label="Nostrum qui dile node"
          />
        </ul>

        {/* ---------- TAB CONTENT ---------- */}
        <div
          className="mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* CARD 1 */}
          {showCard === 1 && (
            <TabContent
              image={image1}
              title="Voluptatem dignissimos provident quasi corporis voluptates sit assumenda."
              italic="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              points={[
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
              ]}
              desc="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          )}

          {/* CARD 2 */}
          {showCard === 2 && (
            <TabContent
              image={image2}
              title="Neque exercitationem debitis soluta quos debitis quo mollitia officia est"
              italic="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              points={[
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                "Provident mollitia neque rerum asperiores dolores quos qui a.",
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
              ]}
              desc="Ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          )}

          {/* CARD 3 */}
          {showCard === 3 && (
            <TabContent
              image={image3}
              title="Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda"
              italic="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              points={[
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                "Provident mollitia neque rerum asperiores dolores quos qui a.",
              ]}
              desc="Ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          )}

          {/* CARD 4 */}
          {showCard === 4 && (
            <TabContent
              image={image4}
              title="Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum"
              italic="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              points={[
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit.",
                "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
              ]}
              desc="Ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          )}

        </div>
      </div>
    </section>
  );
}

export default Tab;

/* ---------------- TAB BUTTON ---------------- */
function TabButton({ active, onClick, icon, label }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex flex-col gap-2 items-center justify-center p-4 border text-sm font-semibold transition 
          ${
            active
              ? "bg-[#e03a3c] text-white border-[#e03a3c]"
              : "bg-white text-gray-700 border-gray-700 hover:text-[#e03a3c] hover:border-[#e03a3c]"
          }`}
      >
        {icon}
        <h4 className="hidden lg:block">{label}</h4>
      </button>
    </li>
  );
}

/* ---------------- TAB CONTENT ---------------- */
function TabContent({ image, title, italic, points, desc }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="order-2 lg:order-1 space-y-5">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="italic text-gray-700">{italic}</p>

        <ul className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex gap-3">
              <CheckCheck className="text-red-600 w-6 h-6 mt-1" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700">{desc}</p>
      </div>

      <div className="order-1 lg:order-2 flex justify-center">
        <img
          src={image}
          alt="tab visual"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
    </div>
  );
}
