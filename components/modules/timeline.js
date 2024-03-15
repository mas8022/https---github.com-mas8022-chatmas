import React from "react";
import style from "../../src/app/styles/timeline.module.css";

export default function Timeline() {
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
          src="/images/more.svg"
          alt="more"
          className={style.timeline__top__left}
        />
      </div>

      <div className={style.timeline__bottom}></div>
    </div>
  );
}
