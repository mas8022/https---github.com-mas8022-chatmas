"use client";
import React, { useEffect, useState } from "react";
// import Timeline from "../../../../components/modules/timeline";
import ProfileTopBottoms from "../../../../components/modules/profileTopBottoms";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import NoExist from "@/components/modules/noExist";
import Post from "@/components/modules/post";
import Image from "next/image";
export default function Profile({ params }) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [flag, setFlag] = useState(false);
  const [posts, setPosts] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch(`/api/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch(`/api/isFollow/${params.id}`)
      .then((res) => res.json())
      .then((data) => setFlag(data));

    fetch(`/api/post/getUserPost/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));

    fetch(`/api/userFollowings/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setFollowings(data);
      });

    fetch(`/api/userFollowers/${params.id}`)
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  }, []);

  const followHandler = async () => {
    await fetch(`/api/followers/${params.id}`, { method: "POST" }).then(
      (res) => {
        if (res.ok) {
          setFlag(true);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "follow successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    );
    router.refresh();
  };

  const unFollowHandler = async () => {
    await fetch(`/api/unFollow/${params.id}`, { method: "POST" }).then(
      (res) => {
        if (res.ok) {
          setFlag(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "UnFollow successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    );
    router.refresh();
  };

  return (
    <div className="w-full p-[3rem] flex flex-col gap-y-5 pb-[10rem]">
      <ProfileTopBottoms />

      <div className="h-[10.5rem] w-[100%] flex items-center gap-6">
        <img
          src={user.profileImage ? user.profileImage : "/images/images.jpg"}
          alt="user image"
          className="w-[8.8rem] h-[8.8rem] rounded-[100%] relative"
        />

        <div className="h-[100%] flex flex-col justify-center gap-[3px]">
          <p className="text-[1.8rem] font-semibold text-[#000]">
            {user.userName}
          </p>
          <p className="text-[14px] text-[#606a81] font-medium">Tehran, Iran</p>
        </div>
      </div>

      <div className="w-[100%] h-[8rem] flex items-center justify-evenly">
        <Link href={`/posts/${params.id}`}>
          <div className="h-[100%] flex justify-center flex-col gap-1">
            <span className="text-[18px] font-bold">
              {posts && posts.length ? posts.length : 0}
            </span>
            <span className="text-[14px] font-extrabold text-[#606a81]">
              Posts
            </span>
          </div>
        </Link>
        <div className="w-[2px] h-[40%] bg-[#e8e8ea]"></div>
        <Link href={`/followers/${params.id}`}>
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
        <Link href={`/following/${params.id}`}>
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

      <div className="flex items-center justify-between w-[100%] h-[5rem] gap-[2rem] mb-12">
        <Link
          href={`/message/${params.id}`}
          style={{
            background:
              "linear-gradient(to right, #cffa7c 0%, #9ce89d 100%), linear-gradient(to bottom, #e5e6ed, #e5e6ed)",
          }}
          className="rounded-[30px] flex items-center justify-center w-[18rem] h-[100%] font-medium text-[16px] text-[#191919]"
        >
          Message
        </Link>
        {flag ? (
          <div
            onClick={unFollowHandler}
            className="bg-gradient-to-r from-[#cffa7c] to-[#9ce89d] rounded-[30px] flex items-center justify-center w-[11.2rem] h-[100%]  font-bold text-[16px]"
          >
            UnFollow
          </div>
        ) : (
          <div
            onClick={followHandler}
            className="rounded-[30px] flex items-center justify-center w-[11.2rem] h-[100%] bg-[#fff] font-bold text-[16px] text-[#606a81]"
          >
            + Follow
          </div>
        )}
      </div>
      {posts && posts.length ? (
        <div className="w-full grid grid-cols-3 gap-2 gap-y-5">
          {posts.reverse().map((post) => (
            <Post
              key={post._id}
              hold={true}
              data={JSON.parse(JSON.stringify(post))}
            />
          ))}
        </div>
      ) : (
        <NoExist upload={false} />
      )}
    </div>
  );
}
