"use client"
import React, { useEffect } from "react";
import Timeline from "../../../../components/modules/timeline";
import ProfileTopBottoms from "../../../../components/templates/profileTopBottoms";
import Link from "next/link";

export default function Profile({params}) {

    // useEffect(() => {
    //     console.log(params.id);

    // },[])

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
        <div className="h-[100%] flex justify-center flex-col gap-3">
          <span className="text-[18px] font-bold">412</span>
          <span className="text-[14px] font-extrabold text-[#606a81]">
            Followers
          </span>
        </div>
        <div className="w-[2px] h-[40%] bg-[#e8e8ea]"></div>
        <div className="h-[100%] flex justify-center flex-col gap-3">
          <span className="text-[18px] font-bold">310</span>
          <span className="text-[14px] font-extrabold text-[#606a81]">
            Following
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between w-[100%] h-[5rem] gap-[2rem] mb-12">
        <Link
          style={{
            background:
              "linear-gradient(to right, #cffa7c 0%, #9ce89d 100%), linear-gradient(to bottom, #e5e6ed, #e5e6ed)",
          }}
          className="rounded-[30px] flex items-center justify-center w-[18rem] h-[100%] font-medium text-[16px] text-[#191919]"
          href={"/message"}
        >
          Message
        </Link>
        <div className="rounded-[30px] flex items-center justify-center w-[11.2rem] h-[100%] bg-[#fff] font-bold text-[16px] text-[#606a81]">
          + Follow
        </div>
      </div>
      <Timeline />
    </div>
  );
}
