import React from "react";
import Comment from "../../../../components/modules/comment";

export default function ShowPost() {
  return (
    <div className="w-full flex flex-col gap-10 p-12 pb-[12rem]">
      <img
        className="w-full h-[30rem] shadow-md"
        src="/images/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg"
        alt="post image"
      />
      <div className="w-full pb-5 flex justify-between border border-white/0 border-b-slate-700">
        <p className="text-[1.4rem] w-[87%] font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          tempora?
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-[3.4rem] h-[3.4rem]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div className="w-full flex flex-col gap-6"s>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </div>
  );
}
