import React from "react";
import Text from "../../../components/modules/text";

export default function Message() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[10rem] flex items-center gap-5 px-11">
        <img
          className="rounded-[50%] w-[7rem] h-[7rem]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvcxSjwABvomYZsgSIsYinTKxioBwSJKi5ojOY-aRyQ&s"
          alt="profile image"
        />
        <div className="w-full h-full flex flex-col gap-3 justify-center">
          <span className="text-slate-700 font-extrabold text-[1.7rem]">
            Sara Mathew
          </span>
          <span className="text-[1.4rem] font-medium">online</span>
        </div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-[#e5ffe3] to-slate-50 mb-12"></div>
      <div className="w-full flex flex-col gap-10 px-12">
        <Text text={"hello hossein khobi"} />
        <Text text={"hello hossein khobi"} />
        <Text text={"hello hossein khobi"} />
      </div>
    </div>
  );
}
