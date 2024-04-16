import React from "react";
import Comment from "../../../../components/modules/comment";
import Like from "../../../../components/modules/like";
import connectToDb from "@/configs/db";
import postModel from "@/models/post";
import commentModel from "@/models/comment";
import Image from "next/image";

export default async function ShowPost({ params }) {
  connectToDb();
  const post = await postModel.findOne({ _id: params.id });

  const comments = await commentModel
    .find({ post: params.id }, "-post -__v")
    .populate("commenter", "userName profileImage");

  return (
    <div className="w-full flex flex-col gap-10 p-12 pb-[12rem]">
      <img
        className="w-full h-[30rem] shadow-md"
        src={post.postImage ? post.postImage : "/images/noexist.svg"}
        alt="post image"
      />
      <div className="w-full pb-5 flex justify-between border border-white/0 border-b-slate-700">
        <p className="text-[1.4rem] w-[87%] font-bold">{post.content}</p>
        <Like postId={post._id} />
      </div>
      <div className="w-full flex flex-col gap-6">
        {comments && comments.length
          ? comments.map((comment) => (
              <Comment
                comment={JSON.parse(JSON.stringify(comment))}
                key={comment._id}
              />
            ))
          : null}
      </div>
    </div>
  );
}
