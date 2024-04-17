"use client";
import React from "react";
import Post from "../../../components/modules/post";
import { useQuery } from "react-query";

export default function Explorer() {
  const { data } = useQuery("posts", () => {
    fetch("/api/post/posts").then((res) => res.json());
  });

  return (
    <div className="w-full flex items-center">
      <div className="mx-auto pb-[8rem] grid grid-cols-3">
        {data?.map((post) => (
          <Post
            key={post._id}
            hold={false}
            data={JSON.parse(JSON.stringify(post))}
          />
        ))}
      </div>
    </div>
  );
}
