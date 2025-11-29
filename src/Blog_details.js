import Blog_Author from "./Blog_Author";
import Comment from "./Comment";
import Blog_Form from "./Blog_Form";
import img from "./assets/blog.jpg";
import img2 from "./assets/blog-inside-post.jpg";
import Section2 from "./Section2";

export default function CardComponent() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto mt-10">

        {/* HOME LINK */}
        <div className="p-5 mb-[70px]">
          <a href="#" className="text-red-500 no-underline">Home</a>
        </div>

        <div className="flex flex-wrap gap-6">

          {/* LEFT SECTION */}
          <div className="w-full lg:w-[65%]">

            {/* BLOG CARD */}
            <div className="shadow-lg mb-[30px] bg-white rounded-lg overflow-hidden">

              {/* TOP IMAGE */}
              <img
                src={img}
                className="w-full h-[550px] object-cover md:h-[550px] h-auto"
                alt=""
              />

              <div className="p-6">

                {/* TITLE */}
                <h2 className="text-3xl font-semibold p-2">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
                </h2>

                {/* META TOP */}
                <div className="mt-5 text-gray-400">
                  <ul className="flex flex-wrap items-center space-x-[20px] list-none p-0 m-0">

                    <li className="flex items-center">
                      <i className="bi bi-person text-[16px] mr-2 leading-none"></i>
                      <a className="text-[14px] no-underline" href="#">John Doe</a>
                    </li>

                    <li className="flex items-center">
                      <i className="bi bi-clock text-[16px] mr-2 leading-none"></i>
                      <a className="text-[14px] no-underline" href="#">Jan 1, 2022</a>
                    </li>

                    <li className="flex items-center">
                      <i className="bi bi-chat-dots text-[16px] mr-2 leading-none"></i>
                      <a className="text-[14px] no-underline" href="#">12 Comments</a>
                    </li>
                  </ul>
                </div>

                {/* PARAGRAPHS */}
                <p className="p-2 my-5">
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium...
                </p>

                <p className="p-2 my-1">
                  Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis...
                </p>

                {/* BLOCKQUOTE */}
                <blockquote className="relative overflow-hidden bg-black/20 p-[60px] text-center my-5 text-[20px] font-medium rounded-lg">
                  <div className="absolute left-0 top-[20px] bottom-[20px] w-[3px] bg-red-600"></div>
                  <p>
                    Et vero doloremque tempore voluptatem ratione vel aut...
                  </p>
                </blockquote>

                <p>
                  Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore...
                </p>

                <h3 className="mt-4 font-semibold text-xl">Et quae iure vel ut odit alias.</h3>

                <p>
                  Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore...
                </p>

                {/* INSIDE IMAGE */}
                <img
                  src={img2}
                  className="w-full h-[550px] md:h-[550px] h-auto object-cover rounded-lg my-5"
                  alt=""
                />

                <h3 className="mt-4 font-semibold text-xl">
                  Ut repellat blanditiis est dolore sunt dolorum quae.
                </h3>

                <p>
                  Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum...
                </p>

                <p>
                  Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas...
                </p>

                {/* META BOTTOM */}
                <div className="pt-3 border-t border-gray-700/10">

                  {/* CATEGORY */}
                  <i className="bi bi-folder text-gray-400"></i>
                  <ul className="inline text-[14px] pr-5 list-none">
                    <li className="inline-block">
                      <a className="text-gray-400 ml-2 no-underline hover:text-red-500 duration-300" href="#">
                        Business
                      </a>
                    </li>
                  </ul>

                  {/* TAGS */}
                  <i className="bi bi-tags text-gray-400"></i>

                  <ul className="inline text-[14px] list-none">

                    <li className="inline-block">
                      <a className="text-gray-400 ml-2 no-underline hover:text-red-500 duration-300" href="#">
                        Creative
                      </a>
                    </li>

                    <li className="inline-block relative before:content-[','] before:pr-2">
                      <a className="text-gray-400 ml-2 no-underline hover:text-red-500 duration-300" href="#">
                        Tips
                      </a>
                    </li>

                    <li className="inline-block relative before:content-[','] before:pr-2">
                      <a className="text-gray-400 ml-2 no-underline hover:text-red-500 duration-300" href="#">
                        Marketing
                      </a>
                    </li>
                  </ul>

                </div>

              </div>
            </div>

            {/* AUTHORS, COMMENTS, FORM */}
            <Blog_Author />
            <Blog_Author />
            <Comment />
            <Blog_Form />

          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-[30%]">
            <Section2 />
          </div>

        </div>
      </div>
    </div>
  );
}
