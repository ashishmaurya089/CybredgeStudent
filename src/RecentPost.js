import React from "react";
import img from "./assets/our-office-11.jpg";
import img2 from "./assets/our-office-12.jpg";
import img3 from "./assets/our-office-4.jpg";
import img4 from "./assets/our-office-5.jpg";
import img5 from "./assets/gallery-7.jpg";

export default function RecentPost() {
  return (
    <div className="recent-posts-widget widget-item">

      {/* Title */}
      <h3 className="widget-title text-xl font-semibold mb-4">Recent Posts</h3>

      {/* Post 1 */}
      <div className="flex mb-4 last:mb-0">
        <img src={img} alt="" className="w-[80px] mr-4 rounded-md flex-shrink-0" />
        <div>
          <h4 className="text-[15px] font-bold mb-1">
            <a href="/blog-details" className="text-gray-700 hover:text-red-500 transition">
              Nihil blanditiis at in nihil autem
            </a>
          </h4>
          <p className="text-[14px] italic text-gray-500">Jan 1, 2020</p>
        </div>
      </div>

      {/* Post 2 */}
      <div className="flex mb-4 last:mb-0">
        <img src={img2} alt="" className="w-[80px] mr-4 rounded-md flex-shrink-0" />
        <div>
          <h4 className="text-[15px] font-bold mb-1">
            <a href="/blog-details" className="text-gray-700 hover:text-red-500 transition">
              Quidem autem et impedit
            </a>
          </h4>
          <p className="text-[14px] italic text-gray-500">Jan 1, 2020</p>
        </div>
      </div>

      {/* Post 3 */}
      <div className="flex mb-4 last:mb-0">
        <img src={img3} alt="" className="w-[80px] mr-4 rounded-md flex-shrink-0" />
        <div>
          <h4 className="text-[15px] font-bold mb-1">
            <a href="/blog-details" className="text-gray-700 hover:text-red-500 transition">
              Id quia et et ut maxime similique occaecati ut
            </a>
          </h4>
          <p className="text-[14px] italic text-gray-500">Jan 1, 2020</p>
        </div>
      </div>

      {/* Post 4 */}
      <div className="flex mb-4 last:mb-0">
        <img src={img4} alt="" className="w-[80px] mr-4 rounded-md flex-shrink-0" />
        <div>
          <h4 className="text-[15px] font-bold mb-1">
            <a href="/blog-details" className="text-gray-700 hover:text-red-500 transition">
              Laborum corporis quo dara net para
            </a>
          </h4>
          <p className="text-[14px] italic text-gray-500">Jan 1, 2020</p>
        </div>
      </div>

      {/* Post 5 */}
      <div className="flex mb-0">
        <img src={img5} alt="" className="w-[80px] mr-4 rounded-md flex-shrink-0" />
        <div>
          <h4 className="text-[15px] font-bold mb-1">
            <a href="/blog-details" className="text-gray-700 hover:text-red-500 transition">
              Et dolores corrupti quae illo quod dolor
            </a>
          </h4>
          <p className="text-[14px] italic text-gray-500">Jan 1, 2020</p>
        </div>
      </div>

    </div>
  );
}
