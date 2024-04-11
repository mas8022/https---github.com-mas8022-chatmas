import Link from "next/link";
import React from "react";

export default function Post({ data }) {
  return (
    <Link href={`/show-post/${data._id}`}>
      <img className=" h-[12rem] w-[12rem] !bg-cover !bg-center" src={data.postImage} alt="post image" />
    </Link> 
  );
}
