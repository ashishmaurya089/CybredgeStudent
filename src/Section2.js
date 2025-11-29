import React from "react";
import RecentPost from "./RecentPost";
import icon from "./assets/search_logo.png";
import TagsBtn from "./TagsBtn";

export default function Section2() {
  return (
    <div className="w-full shadow-lg p-4">

      {/* SEARCH */}
      <h4 className="p-4 text-xl font-semibold">Search</h4>

      <form action="#" className="flex items-center formBox mb-6">
        {/* Input */}
        <input
          type="text"
          className="
            w-[75%] h-[40px] ml-[25px] p-1 
            border border-gray-400 
            text-gray-200 
            bg-transparent
            rounded-l-md
            focus:outline-none focus:border-red-500
          "
        />

        {/* Search Button */}
        <button
          type="submit"
          className="
            w-[45px] h-[40px] 
            bg-red-600 flex items-center justify-center 
            rounded-r-md
            hover:bg-red-700 transition
          "
        >
          <img src={icon} alt="error" className="w-full" />
        </button>
      </form>

      {/* CATEGORIES */}
      <div className="mt-[25px] ml-[25px]">
        <h4 className="my-4 font-semibold text-lg">Categories</h4>

        <div className="my-2 text-gray-500 hover:text-red-500 cursor-pointer">
          General <span>(25)</span>
        </div>
        <div className="my-2 text-gray-500 hover:text-red-500 cursor-pointer">
          Lifestyle (12)
        </div>
        <div className="my-2 text-gray-500 hover:text-red-500 cursor-pointer">
          Travel (5)
        </div>
        <div className="my-2 text-gray-500 hover:text-red-500 cursor-pointer">
          Design (22)
        </div>
        <div className="my-2 text-gray-500 hover:text-red-500 cursor-pointer">
          Creative (8)
        </div>
        <div className="my-2 text-gray-500 hover:text-red-500 cursor-pointer">
          Education (14)
        </div>
      </div>

      {/* RECENT POSTS */}
      <div className="mt-[25px] ml-[25px]">
        <RecentPost />
      </div>

      {/* TAGS */}
      <div className="mt-[25px] ml-[25px]">
        <h4 className="font-semibold text-lg mb-2">Tags</h4>

        <div className="flex flex-wrap gap-2">
          <TagsBtn text="App" />
          <TagsBtn text="IT" />
          <TagsBtn text="Business" />
          <TagsBtn text="Mac" />
          <TagsBtn text="Design" />
          <TagsBtn text="Office" />
          <TagsBtn text="Creative" />
          <TagsBtn text="Studio" />
          <TagsBtn text="Smart" />
          <TagsBtn text="Tips" />
          <TagsBtn text="Marketing" />
        </div>
      </div>
    </div>
  );
}
