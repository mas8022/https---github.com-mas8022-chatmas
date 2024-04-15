import React from "react";
import ProfileTopBottoms from "../../../components/modules/profileTopBottoms";
import Post from "../../../components/modules/post";
import Link from "next/link";
import { redirect } from "next/navigation";
import Me from "../../../utils/me";
import postModel from "../../../models/post";
import NoExist from "@/components/modules/noExist";
import followModel from "@/models/follow";
import connectToDb from "@/configs/db";
import { useRouter } from "next/navigation";
export default async function Profile() {
  connectToDb();
  const me = await Me();
  if (!me) {
    contextProfile.setPageMode(false);
    redirect("/");
  }
  const posts = (await postModel.find({ user: me._id })).reverse();

  const followings = await followModel.find({ user: me._id });

  const followers = await followModel.find({ following: me._id });

  return (
    <div className="w-full p-[3rem] flex flex-col gap-y-5 pb-[10rem]">
      <ProfileTopBottoms />

      <div className="h-[10.5rem] w-[100%] flex items-center gap-6">
        <Link href={`/profiler/${me._id}`}>
          <img
            src={me?.profileImage ? me.profileImage : "/images/images.jpg"}
            className="w-[8.8rem] h-[8.8rem] rounded-[100%] bg-black relative !bg-cover !bg-no-repeat !bg-center"
          />
        </Link>

        <div className="h-[100%] flex flex-col justify-center gap-[3px]">
          <p className="text-[1.8rem] font-semibold text-[#000]">
            {me?.userName}
          </p>
          <p className="text-[14px] text-[#606a81] font-medium">Tehran, Iran</p>
        </div>
      </div>

      <div className="w-[100%] h-[8rem] flex items-center justify-evenly">
        <Link href={`/posts/${me._id}`}>
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

        <Link href={`/followers/${me._id}`}>
          <div className="h-[100%] flex justify-center flex-col gap-3">
            <span className="text-[18px] font-bold">
              {followers && followers.length ? followers.length : 0}
            </span>
            <span className="text-[14px] font-extrabold text-[#606a81]">
              Followers
            </span>
          </div>
        </Link>

        <div className="w-[2px] h-[40%] bg-[#e8e8ea]"></div>

        <Link href={`/following/${me._id}`}>
          <div className="h-[100%] flex justify-center flex-col gap-3">
            <span className="text-[18px] font-bold">
              {followings && followings.length ? followings.length : 0}
            </span>
            <span className="text-[14px] font-extrabold text-[#606a81]">
              Following
            </span>
          </div>
        </Link>
      </div>

      {posts.length ? (
        <div className="w-full grid grid-cols-3 gap-2 gap-y-5">
          {posts.slice(0, 10)?.map((post) => (
            <Post
              key={post._id}
              hold={true}
              data={JSON.parse(JSON.stringify(post))}
            />
          ))}
        </div>
      ) : (
        <NoExist upload={true} />
      )}
    </div>
  );
}
