"use client";
import React, { useEffect, useState } from "react";
import style from "../../src/app/styles/timeline.module.css";
import Bg from "./bg";
import swal from "sweetalert";

export default function Timeline() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const closeSideBarHandler = (e) => {
      if (e.target.contains(document.querySelector(".bgActive"))) {
        setActive(false);
      }
    };
    window.addEventListener("click", (e) => {
      closeSideBarHandler(e);
    });
    return () => window.removeEventListener("click", closeSideBarHandler);
  });

  const commentHandler = () => {
    swal({
      title: "Comment",
      text: "type your comment",
      content: "input",
      buttons: true
    })
  };

  return (
    <div className={style.timeline}>
      <div className={style.timeline__top}>
        <div className={style.timeline__top__right}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvcxSjwABvomYZsgSIsYinTKxioBwSJKi5ojOY-aRyQ&s"
            alt="store"
            className={style.timeline__top__right__right}
          />
          <div className={style.timeline__top__right__left}>
            <p className={style.fgfd}>Sara Mathew</p>
            <p className={style.ertyre}>Sukabumi, Indonesia</p>
          </div>
        </div>

        <img
          onClick={() => setActive(true)}
          src="/images/more.svg"
          alt="more"
          className={style.timeline__top__left}
        />
        <Bg active={active} />

        {active? <><div className="w-[15rem] h-[5rem] flex items-center justify-between p-6 bg-white z-[1000] absolute right-10 top-24 shadow-md rounded-3xl">
          <img
            onClick={commentHandler}
            className="w-[2.5rem] h-[2.5rem] active:scale-95 transition-all duration-75"
            src="/images/comments.svg"
            alt="comment button"
          />
          <img
            className="w-[2.5rem] h-[2.5rem] active:scale-95 transition-all duration-75"
            src="/images/like.svg"
            alt="like button"
          />
          <img
            className="w-[2.5rem] h-[2.5rem] active:scale-95 transition-all duration-75"
            src="/images/dislike.svg"
            alt="dislike button"
          />
        </div></>:null}

        



      </div>

      <div className={style.timeline__bottom}></div>
    </div>
  );
}
