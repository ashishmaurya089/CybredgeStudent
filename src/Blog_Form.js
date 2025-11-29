import { Link } from "react-router-dom";

export default function Blog_Form() {
  return (
    <div>
      <section id="comment-form" className="pt-3">

        <div className="shadow-lg bg-transparent rounded-lg mt-8">

          <form
            action=""
            className="bg-white/10 p-8 shadow-xl rounded-lg mt-8"
          >

            {/* HEADING */}
            <h4 className="font-bold text-[22px] text-white">Post Comment</h4>
            <p className="text-[14px] text-gray-300 mt-1">
              Your email address will not be published. Required fields are marked *
            </p>

            {/* NAME + EMAIL ROW */}
            <div className="flex flex-wrap gap-6 mt-6">

              {/* Name */}
              <div className="w-full md:w-[48%]">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name*"
                  className="
                    w-full bg-white/10 text-gray-200 border border-gray-500 
                    rounded-md px-4 py-3 text-[14px]
                    placeholder:text-gray-400
                    focus:outline-none focus:border-red-500
                  "
                />
              </div>

              {/* Email */}
              <div className="w-full md:w-[48%]">
                <input
                  name="email"
                  type="text"
                  placeholder="Your Email*"
                  className="
                    w-full bg-white/10 text-gray-200 border border-gray-500 
                    rounded-md px-4 py-3 text-[14px]
                    placeholder:text-gray-400
                    focus:outline-none focus:border-red-500
                  "
                />
              </div>

            </div>

            {/* WEBSITE FIELD */}
            <div className="mt-6">
              <input
                name="website"
                type="text"
                placeholder="Your Website"
                className="
                  w-full bg-white/10 text-gray-200 border border-gray-500 
                  rounded-md px-4 py-3 text-[14px]
                  placeholder:text-gray-400
                  focus:outline-none focus:border-red-500
                "
              />
            </div>

            {/* COMMENT FIELD */}
            <div className="mt-6">
              <textarea
                name="comment"
                placeholder="Your Comment*"
                className="
                  w-full bg-white/10 text-gray-200 border border-gray-500 
                  rounded-md px-4 py-3 text-[14px] h-[120px]
                  placeholder:text-gray-400
                  focus:outline-none focus:border-red-500
                "
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="
                  bg-red-500 text-white 
                  px-6 py-3 rounded-md 
                  font-medium text-[16px]
                  hover:bg-red-600 transition
                "
              >
                Post Comment
              </button>
            </div>

          </form>

        </div>
      </section>
    </div>
  );
}
