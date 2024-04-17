"use client";
import React from "react";
import { useQuery } from "react-query";
import Timeline from "../modules/timeline";

export default function ShowRecentPost() {
  const { data } = useQuery("recentPost", () =>
    fetch("/api/post/recentPost").then((res) => res.json())
  );

  return (
    <div className="w-full flex flex-col gap-8 pb-[12rem]">
      {data?.map((post) => (
        <Timeline key={post._id} post={JSON.parse(JSON.stringify(post))} />
      ))}
    </div>
  );
}
