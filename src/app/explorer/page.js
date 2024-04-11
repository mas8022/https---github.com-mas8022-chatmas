import React from "react";
import Post from "../../../components/modules/post";
import { getAllPosts } from "@/utils/postTools";

export default async function Explorer() {
  const posts = await getAllPosts()

  return (
    <div className="w-full flex items-center">
      <div className="mx-auto pb-[8rem] grid grid-cols-3">
     {posts.slice(0, 10)?.map((post) => (
            <Post key={post._id} data={JSON.parse(JSON.stringify(post))} />
          ))}
    </div>
    </div>
  );
}
