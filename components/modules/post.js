import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Post({ data }) {
  return (
    <Link href={`/show-post/${data._id}`}>
      <img className=" h-[10rem] !bg-cover !bg-center" src={data.postImage} alt="post image" />
    </Link> 
  );
}
