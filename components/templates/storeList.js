import React from "react";
import style from "../../src/app/styles/storeList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function StoreList() {
  return (
    <div className={style.storeList}>
      <Link href={'/storyUpload'}>
      <div className={style.storeListItem}>
        <FontAwesomeIcon style={{fontSize: "21px"}} icon={faPlus} />
      </div></Link>

      <div
        style={{
          background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5w7hYktD4byIBek2BULUelcM6ybvsS5JBA3PzmA8pA&s')`,
        }}
        className={style.storeListItem}
      ></div>
      <div
        style={{
          background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvcxSjwABvomYZsgSIsYinTKxioBwSJKi5ojOY-aRyQ&s')`,
        }}
        className={style.storeListItem}
      ></div>
    </div>
  );
}
