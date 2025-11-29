import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function CardComponent(props) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/Blog_detail", { myId: 55 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mb-[30px]">
      {/* CARD */}
      <div className="shadow-lg bg-white/10 rounded-lg overflow-hidden">

        {/* IMAGE */}
        <img
          src={props.image}
          alt=""
          className="w-full h-[450px] md:h-[450px] h-auto object-cover"
        />

        {/* BODY */}
        <div className="p-5">

          {/* TITLE */}
          <h3
            className="text-2xl font-semibold p-2 hover:text-red-500 cursor-pointer"
            onClick={goToDetails}
          >
            {props.text2}
          </h3>

          {/* META TOP */}
          <div className="mt-5 text-gray-500">
            <ul className="flex flex-wrap items-center list-none p-0 m-0 space-x-[20px]">

              <li className="flex items-center">
                <i className="bi bi-person text-[16px] mr-2 leading-none"></i>
                <a href="/blog-details" className="text-[14px] no-underline text-gray-500">
                  John Doe
                </a>
              </li>

              <li className="flex items-center">
                <i className="bi bi-clock text-[16px] mr-2 leading-none"></i>
                <a href="/blog-details" className="text-[14px] no-underline text-gray-500">
                  Jan 1, 2022
                </a>
              </li>

              <li className="flex items-center">
                <i className="bi bi-chat-dots text-[16px] mr-2 leading-none"></i>
                <a href="/blog-details" className="text-[14px] no-underline text-gray-500">
                  12 Comments
                </a>
              </li>

            </ul>
          </div>

          {/* DESCRIPTION */}
          <p className="p-2 my-1 text-gray-300">
            {props.text}
          </p>

          {/* BUTTON */}
          <div className="flex justify-end mt-3">
            <button
              className="
                bg-red-600 text-white px-5 py-2 rounded-md
                hover:bg-red-700 transition duration-200
              "
              onClick={goToDetails}
            >
              Read More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
