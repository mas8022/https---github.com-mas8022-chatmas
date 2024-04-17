"use client";
import React, { useEffect, useState } from "react";
import style from "../../src/app/styles/navbar.module.css";
import swal from "sweetalert";
import Link from "next/link";
import Bg from "../modules/bg";
import { useRouter } from "next/navigation";

export default function Navbar({ userId }) {
  const router = useRouter();
  const [flagSide, setFlagSide] = useState(false);

  useEffect(() => {
    const closeSideBarHandler = (e) => {
      if (e.target.contains(document.querySelector(".bgActive"))) {
        setFlagSide(false);
      }
    };
    window.addEventListener("click", (e) => {
      closeSideBarHandler(e);
    });
    return () => window.removeEventListener("click", closeSideBarHandler);
  });

  const logOutHandler = () => {
    swal({
      icon: "warning",
      title: "Logout",
      text: "Are you sure to log out the site ?",
      buttons: true,
    }).then(async (res) => {
      if (res) {
        await fetch("/api/logout", { method: "POST" });
        router.refresh();
      }
    });
  };

  return (
    <>
      <div className={style.navbar}>
        <img
          onClick={() => setFlagSide(true)}
          className={style.navSvg}
          src="/images/list.svg"
          alt="list button"
        />
        <div className={style.sfgf}>Maschat</div>
        <img
          onClick={() =>
            swal({
              icon: "info",
              text: "Welcome to MasChat: Your Ultimate Chat Experience Welcome to MasChat, the premier platform for seamless communication and collaboration. MasChat offers an intuitive interface, robust features, and unparalleled reliability, making it the ideal choice for individuals and businesses alike.",
            })
          }
          className={style.navSvg}
          src="/images/warning.svg"
          alt="warning"
        />
      </div>

      <div className={flagSide ? "sideActive" : "sideDeActive"}>
        <div className="w-full flex flex-col gap-5">
          <Link href={"/postUpload"}>
            <div className="sideItemDeActive active:sideItemActive ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                />
              </svg>

              <span className="font-medium text-[1.7rem]">Post</span>
            </div>
          </Link>
          <Link href={`/posts/${userId}`}>
            <div className="sideItemDeActive active:sideItemActive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <span className="font-medium text-[1.7rem]">My Posts</span>
            </div>
          </Link>
          <Link href={`/following/${userId}`}>
            <div className="sideItemDeActive active:sideItemActive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>

              <span className="font-medium text-[1.7rem]">Following</span>
            </div>
          </Link>
          <Link href={`/followers/${userId}`}>
            <div className="sideItemDeActive active:sideItemActive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span className="font-medium text-[1.7rem]">Followers</span>
            </div>
          </Link>
          <Link href={`/profiler/${userId}`}>
            <div className="sideItemDeActive active:sideItemActive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <span className="font-medium text-[1.7rem]">Profiler</span>
            </div>
          </Link>
          <Link href={"/favorites"}>
            <div className="sideItemDeActive active:sideItemActive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <span className="font-medium text-[1.7rem]">Favorites</span>
            </div>
          </Link>
          <div
            onClick={logOutHandler}
            className="sideItemDeActive active:sideItemActive"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>

            <span className="font-medium text-[1.7rem]">Log out</span>
          </div>
        </div>
        <div className="w-full h-[7rem] flex items-center justify-between pt-[1rem] border-t-2 pl-5">
          <h1 className="font-bold text-[1.5rem]">MasChat</h1>
          <img
            className="w-[4rem] h-[4rem]"
            src="/images/logo.png"
            alt="logo"
          />
        </div>
      </div>

      <Bg active={JSON.parse(JSON.stringify(flagSide))}></Bg>
    </>
  );
}
