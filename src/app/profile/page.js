import React from "react";
import ProfileTopBottoms from "../../../components/modules/profileTopBottoms";
import Post from "../../../components/modules/post";
import { data } from "../../../data";
import Link from "next/link";
import { redirect } from "next/navigation";
import Me from "../../../utils/me";
import postModel from "../../../models/post";

export default async function Profile() {
  const user = await Me();
  if (!user) {
    contextProfile.setPageMode(false);
    redirect("/");
  }

  const posts = await postModel.find({ user: user._id });

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
            <span className="text-[18px] font-bold">
              {posts.length ? posts.length : 0}
            </span>
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

      {posts.length ? (
        <div className="w-full grid grid-cols-3 gap-2 gap-y-5">
          {posts.slice(0, 10)?.map((post) => (
            <Post key={post._id} data={JSON.parse(JSON.stringify(post))} />
          ))}
        </div>
      ) : (
        <div className="h-[35rem] w-full flex flex-col items-center justify-between mt-20">
          <div className="w-full flex flex-col  items-center justify-center">
            <img
              className="w-[15rem] h-[15rem] !bg-center !bg-cover opacity-10"
              src="/images/noexist.svg"
              alt="no exist"
            />
            <p className="text-[2rem] font-bold opacity-25">No post here</p>
          </div>
          <div className="w-full h-[9rem] flex flex-col items-center">
            <p className="text-[1.5rem] font-bold opacity-20">
              Upload New Post
            </p>
            <img
              className="w-[6rem] h-[6rem] !bg-center !bg-cover opacity-40"
              src="/images/arrow-bottom.svg"
              alt="arrow bottom"
            />
          </div>
        </div>
      )}
    </div>
  );
}
