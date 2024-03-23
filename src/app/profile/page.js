import React from "react";
import ProfileTopBottoms from "../../../components/templates/profileTopBottoms";
import Post from "../../../components/modules/post";
import { data } from "../../../data";
import Link from "next/link";
export default function Profile() {
  return (
    <div className="w-full p-[3rem] flex flex-col gap-y-5 pb-[10rem]">
      <ProfileTopBottoms />

      <div className="h-[10.5rem] w-[100%] flex items-center gap-6">
        <img
          style={{
            background:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvcxSjwABvomYZsgSIsYinTKxioBwSJKi5ojOY-aRyQ&s')",
          }}
          className="w-[8.8rem] h-[8.8rem] rounded-[100%] bg-black relative !bg-cover !bg-no-repeat !bg-center"
        />
        <div className="h-[100%] flex flex-col justify-center gap-[3px]">
          <p className="text-[1.8rem] font-semibold text-[#000]">Sara Mathew</p>
          <p className="text-[14px] text-[#606a81] font-medium">
            Bangalore, India
          </p>
        </div>
      </div>

      <div className="w-[100%] h-[8rem] flex items-center justify-evenly">
        <div className="h-[100%] flex justify-center flex-col gap-1">
          <span className="text-[18px] font-bold">1051</span>
          <span className="text-[14px] font-extrabold text-[#606a81]">
            Posts
          </span>
        </div>
        <div className="w-[2px] h-[40%] bg-[#e8e8ea]"></div>
        <Link href={"/followers"}>
          <div className="h-[100%] flex justify-center flex-col gap-3">
            <span className="text-[18px] font-bold">412</span>
            <span className="text-[14px] font-extrabold text-[#606a81]">
              Followers
            </span>
          </div>
        </Link>
        <div className="w-[2px] h-[40%] bg-[#e8e8ea]"></div>
        <Link href={"/following"}>
          <div className="h-[100%] flex justify-center flex-col gap-3">
            <span className="text-[18px] font-bold">310</span>
            <span className="text-[14px] font-extrabold text-[#606a81]">
              Following
            </span>
          </div>
        </Link>
      </div>

      <div className="w-full grid grid-cols-3 gap-2 gap-y-5">
        {data.slice(0, 10)?.map((item) => (
          <Post data={item} />
        ))}
      </div>
    </div>
  );
}
