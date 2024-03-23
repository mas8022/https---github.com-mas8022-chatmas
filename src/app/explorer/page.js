import React from "react";
import data from "../../../data";
import Post from "../../../components/modules/post";
export default function Explorer() {
  return (
    <div className="w-full min-h-screen pb-[8rem] grid grid-cols-3">
      {data?.map((item) => (
        <Post data={item} />
      ))}
    </div>
  );
}
