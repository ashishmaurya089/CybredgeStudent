import React from "react";
import img1 from "./assets/comments-1.jpg";
import img2 from "./assets/comments-2.jpg";
import img3 from "./assets/comments-3.jpg";
import img4 from "./assets/comments-4.jpg";
import img5 from "./assets/comments-5.jpg";
import img6 from "./assets/comments-6.jpg";

export default function Comment() {
  return (
    <div>
      <section id="blog-comments" className="py-3">

        <div className="w-full">

          {/* COMMENTS COUNT */}
          <h4 className="font-bold text-xl">8 Comments</h4>

          {/* COMMENT 1 */}
          <div className="mt-8">
            <div className="flex">
              <div className="mr-4">
                <img src={img1} alt="" className="w-[60px] rounded-full" />
              </div>

              <div>
                <h5 className="text-[16px] mb-1">
                  <a href="#" className="font-bold text-gray-700 hover:text-red-500">
                    Georgia Reader
                  </a>
                  <a href="#" className="pl-2 text-gray-500">
                    <i className="bi bi-reply-fill text-[20px]"></i> Reply
                  </a>
                </h5>

                <p className="text-[14px] text-gray-500 mb-1">01 Jan, 2022</p>

                <p className="text-[14px] text-gray-500">
                  Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et...
                </p>
              </div>
            </div>
          </div>

          {/* COMMENT 2 */}
          <div className="mt-8">
            <div className="flex">
              <div className="mr-4">
                <img src={img2} alt="" className="w-[60px] rounded-full" />
              </div>

              <div>
                <h5 className="text-[16px] mb-1">
                  <a href="#" className="font-bold text-gray-700 hover:text-red-500">
                    Aron Alvarado
                  </a>
                  <a href="#" className="pl-2 text-gray-500">
                    <i className="bi bi-reply-fill text-[20px]"></i> Reply
                  </a>
                </h5>

                <p className="text-[14px] text-gray-500 mb-1">01 Jan, 2022</p>

                <p className="text-[14px] text-gray-500">
                  Ipsam tempora sequi voluptatem quis sapiente non...
                </p>
              </div>
            </div>

            {/* REPLY 1 */}
            <div className="pl-10 mt-8">
              <div className="flex">
                <div className="mr-4">
                  <img src={img3} alt="" className="w-[60px] rounded-full" />
                </div>

                <div>
                  <h5 className="text-[16px] mb-1">
                    <a href="#" className="font-bold text-gray-700 hover:text-red-500">
                      Lynda Small
                    </a>
                    <a href="#" className="pl-2 text-gray-500">
                      <i className="bi bi-reply-fill text-[20px]"></i> Reply
                    </a>
                  </h5>

                  <p className="text-[14px] text-gray-500 mb-1">01 Jan, 2022</p>

                  <p className="text-[14px] text-gray-500">
                    Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta...
                  </p>
                </div>
              </div>

              {/* NESTED REPLY */}
              <div className="pl-10 mt-8">
                <div className="flex">
                  <div className="mr-4">
                    <img src={img4} alt="" className="w-[60px] rounded-full" />
                  </div>

                  <div>
                    <h5 className="text-[16px] mb-1">
                      <a href="#" className="font-bold text-gray-700 hover:text-red-500">
                        Sianna Ramsay
                      </a>
                      <a href="#" className="pl-2 text-gray-500">
                        <i className="bi bi-reply-fill text-[20px]"></i> Reply
                      </a>
                    </h5>

                    <p className="text-[14px] text-gray-500 mb-1">01 Jan, 2022</p>

                    <p className="text-[14px] text-gray-500">
                      Et dignissimos impedit nulla et quo distinctio ex nemo...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COMMENT 3 */}
          <div className="mt-8">
            <div className="flex">
              <div className="mr-4">
                <img src={img5} alt="" className="w-[60px] rounded-full" />
              </div>

              <div>
                <h5 className="text-[16px] mb-1">
                  <a href="#" className="font-bold text-gray-700 hover:text-red-500">
                    Nolan Davidson
                  </a>
                  <a href="#" className="pl-2 text-gray-500">
                    <i className="bi bi-reply-fill text-[20px]"></i> Reply
                  </a>
                </h5>

                <p className="text-[14px] text-gray-500 mb-1">01 Jan, 2022</p>

                <p className="text-[14px] text-gray-500">
                  Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius...
                </p>
              </div>
            </div>
          </div>

          {/* COMMENT 4 */}
          <div className="mt-8">
            <div className="flex">
              <div className="mr-4">
                <img src={img6} alt="" className="w-[60px] rounded-full" />
              </div>

              <div>
                <h5 className="text-[16px] mb-1">
                  <a href="#" className="font-bold text-gray-700 hover:text-red-500">
                    Kay Duggan
                  </a>
                  <a href="#" className="pl-2 text-gray-500">
                    <i className="bi bi-reply-fill text-[20px]"></i> Reply
                  </a>
                </h5>

                <p className="text-[14px] text-gray-500 mb-1">01 Jan,2022</p>

                <p className="text-[14px] text-gray-500">
                  Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis...
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
