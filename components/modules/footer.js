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
export default function Footer() {
  return (
    <div className={style.footer}>
      <Link href={"/"}>
        <FontAwesomeIcon className={style.footer__icons} icon={faHome} />
      </Link>
      <FontAwesomeIcon className={style.footer__icons} icon={faShoppingBag} />
      <div className={style.storeListItem}>
        <FontAwesomeIcon style={{ fontSize: "21px" }} icon={faPlus} />
      </div>
      <FontAwesomeIcon className={style.footer__icons} icon={faHeart} />
      <Link href={"/profile"}>
        <FontAwesomeIcon className={style.footer__icons} icon={faUser} />
      </Link>
    </div>
  );
}
