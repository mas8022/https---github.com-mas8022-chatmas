import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import style from "@/src/app/styles/footer.module.css";

export default function AddPost() {
  return (
    <Link href={"/postUpload"}>
      <div className={style.storeListItem}>
        <FontAwesomeIcon style={{ fontSize: "21px" }} icon={faPlus} />
      </div>
    </Link>
  );
}
