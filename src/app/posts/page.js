import React from "react";
import Timeline from "../../../components/modules/timeline";
import Me from "../../../utils/me";
import { getUserPosts } from "@/utils/postTools";
import NoExist from "@/components/modules/noExist";
import postModel from "@/models/post";

export default async function Post() {
  const user = await Me();
  const posts = await postModel
    .find({ user: user._id })
    .populate("user", "profileImage userName");

  return (
    <div className="w-full p-12 pb-[14rem] flex flex-col gap-8 items-center">
      {posts && posts.length ? (
        posts.map((post) => <Timeline key={post._id} post={post} />)
      ) : (
        <NoExist upload={false} />
      )}
    </div>
  );
}
