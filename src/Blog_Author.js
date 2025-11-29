import React from "react";
import author from "./assets/blog-author.jpg";

export default function Blog_Author() {
  return (
    <div>
      <section
        id="blog-author"
        className="py-10"
      >
        <div className="shadow-lg p-0">
          
          <div className="bg-[var(--surface-color)] p-5 shadow-md flex items-center">

            {/* Author Image */}
            <img
              src={author}
              alt=""
              className="rounded-full w-[120px] h-[120px] object-cover mr-5"
            />

            {/* Text Section */}
            <div>
              {/* Name */}
              <h4 className="font-semibold text-[20px] text-gray-500 mb-0 p-0">
                Jane Smith
              </h4>

              {/* Social Icons */}
              <div className="flex items-center mt-1 mb-2">

                <a href="https://x.com/#" className="mr-2 text-gray-500">
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a href="https://facebook.com/#" className="mr-2 text-gray-500">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="https://instagram.com/#" className="mr-2 text-gray-500">
                  <i className="bi bi-instagram"></i>
                </a>

              </div>

              {/* Description */}
              <p className="italic text-gray-500 mb-0">
                Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed
                possimus accusantium. Quas repellat voluptatem officia numquam
                sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
              </p>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
