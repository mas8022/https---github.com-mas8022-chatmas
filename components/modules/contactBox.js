import Link from "next/link";
import React from "react";

export default function ContactBox({ image, userName, online }) {
  return (
    <Link href={`/contact/${"reww4e3"}`} className="w-full h-[5rem] rounded-md px-5 flex items-center shadow-md justify-between">
      <div className="flex gap-5 items-center">
        <img
          src={image}
          alt="user image"
          className="w-[3.7rem] h-[3.7rem] bg-center bg-cover rounded-full shrink-0 shadow-md "
        />
        <span>{userName}</span>
      </div>
      <span>{online ? "online" : "offline"}</span>
    </Link>
  );
}
