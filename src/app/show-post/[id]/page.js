import React from "react";
import Comment from "../../../../components/modules/comment";
import { getPost } from "../../../../utils/postTools";
import Like from "../../../../components/modules/like";

export default async function ShowPost({ params }) {
  const post = await getPost(params.id);

  return (
    <div className="w-full flex flex-col gap-10 p-12 pb-[12rem]">
      <img
        className="w-full h-[30rem] shadow-md"
        src={post.postImage ? post.postImage : "/images/noexist.svg"}
        alt="post image"
      />
      <div className="w-full pb-5 flex justify-between border border-white/0 border-b-slate-700">
        <p className="text-[1.4rem] w-[87%] font-bold">{post.content}</p>
        <Like post={post} />
      </div>
      <div className="w-full flex flex-col gap-6" s>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
