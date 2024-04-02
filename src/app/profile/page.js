import React from "react";
import ProfileTopBottoms from "../../../components/modules/profileTopBottoms";
import Post from "../../../components/modules/post";
import { data } from "../../../data";
import Link from "next/link";
import { cookies } from "next/headers";
import { verifyToken } from "../../../utils/auth/sign";
import usermodel from "../../../models/users";
import connectToDb from "../../../configs/db";

export default async function Profile() {
  const token = cookies().get("token")?.value;

  const tokenPayLoad = verifyToken(token);
  connectToDb();
  const user = await usermodel.findOne({ email: tokenPayLoad.email });

  return (
    <div className="w-full p-[3rem] flex flex-col gap-y-5 pb-[10rem]">
      <ProfileTopBottoms />

      <div className="h-[10.5rem] w-[100%] flex items-center gap-6">
        <Link href={`/profiler/${user._id}`}>
          <img
            src={user?.profileImage ? user.profileImage : "/images/images.jpg"}
            className="w-[8.8rem] h-[8.8rem] rounded-[100%] bg-black relative !bg-cover !bg-no-repeat !bg-center"
          />
        </Link>

        <div className="h-[100%] flex flex-col justify-center gap-[3px]">
          <p className="text-[1.8rem] font-semibold text-[#000]">
            {user?.userName}
          </p>
          <p className="text-[14px] text-[#606a81] font-medium">Tehran, Iran</p>
        </div>
      </div>

      <div className="w-[100%] h-[8rem] flex items-center justify-evenly">
        <Link href={"/posts"}>
          <div className="h-[100%] flex justify-center flex-col gap-1">
            <span className="text-[18px] font-bold">1051</span>
            <span className="text-[14px] font-extrabold text-[#606a81]">
              Posts
            </span>
          </div>
        </Link>

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
