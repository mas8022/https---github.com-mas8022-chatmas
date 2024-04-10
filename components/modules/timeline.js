import React from "react";
import style from "../../src/app/styles/timeline.module.css";
import Link from "next/link";
import MoreTimeLine from "./moreTimeLine";

export default function Timeline({ user, post }) {
  return (
    <div className={style.timeline}>
      <div className={style.timeline__top}>
        <div className={style.timeline__top__right}>
          <img
            src={
              user && user.profileImage
                ? user.profileImage
                : "/images/images.jpg"
            }
            alt="store"
            className={style.timeline__top__right__right}
          />
          <div className={style.timeline__top__right__left}>
            <p className={style.fgfd}>{user ? user.userName : null}</p>
            <p className={style.ertyre}>Mazandaran, Iran</p>
          </div>
        </div>
      <MoreTimeLine post={post} />
      </div>
      


      <Link href={`/show-post/${post._id}`}>
        <img
          src={post.postImage}
          className={style.timeline__bottom}
          alt="post image"
        />
      </Link>
    </div>
  );
}
