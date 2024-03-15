import React from "react";
import style from "../../src/app/styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <img className={style.navSvg} src="/images/list.svg" alt="list button" />
      <div className={style.sfgf}>Bangalore</div>
      <img
        className={style.navSvg}
        src="/images/message.svg"
        alt="list button"
      />
    </div>
  );
}
