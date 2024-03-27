import Link from "next/link";
import React from "react";

export default function Post({ data }) {
  return (
    <Link href={`/show-post/${"retr"}`}>
      <img className=" h-[10rem] bg-cover" src={data} alt="post image" />
    </Link> 
  );
}
