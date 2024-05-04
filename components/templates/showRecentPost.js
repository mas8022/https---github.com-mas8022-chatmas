"use client";
import React, { useEffect, useState } from "react";
import Timeline from "../modules/timeline";

export default function ShowRecentPost() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetch("/api/post/recentPost")
      .then((res) => res.json())
      .then((data) => setRecentPosts(data));
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 pb-[12rem]">
      {recentPosts?.map((post) => (
        <Timeline key={post._id} post={JSON.parse(JSON.stringify(post))} />
      ))}
    </div>
  );
}
