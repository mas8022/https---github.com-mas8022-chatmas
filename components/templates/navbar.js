"use client";
import React from "react";
import style from "../../src/app/styles/navbar.module.css";
import swal from "sweetalert";

export default function Navbar({setFlagSide}) {
  return (
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
            icon: "warning",
            text: "Welcome to MasChat: Your Ultimate Chat Experience Welcome to MasChat, the premier platform for seamless communication and collaboration. MasChat offers an intuitive interface, robust features, and unparalleled reliability, making it the ideal choice for individuals and businesses alike.",
          })
        }
        className={style.navSvg}
        src="/images/warning.svg"
        alt="warning"
      />
    </div>
  );
}
