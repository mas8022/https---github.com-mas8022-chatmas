import React from "react";
import style from "../../src/app/styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingBag,
  faHeart,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import AddPost from "./addPost";
export default function Footer() {
  return (
    <div className={style.footer}>
      <Link href={"/"}>
        <FontAwesomeIcon className={style.footer__icons} icon={faHome} />
      </Link>
      <Link href={"/explorer"}>
        <FontAwesomeIcon className={style.footer__icons} icon={faShoppingBag} />
      </Link>
      <AddPost />

      <Link href={"/favorites"}>
        <FontAwesomeIcon className={style.footer__icons} icon={faHeart} />
      </Link>
      <Link href={"/profile"}>
        <FontAwesomeIcon className={style.footer__icons} icon={faUser} />
      </Link>
    </div>
  );
}
