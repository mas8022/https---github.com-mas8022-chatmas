import React from "react";

import postModel from "@/models/post";
import Timeline from "@/components/modules/timeline";
import NoExist from "@/components/modules/noExist";

export default async function Post({ params }) {
  const posts = (
    await postModel
      .find({ user: params.id })
      .populate("user", "profileImage userName")
  ).reverse();

  return (
    <div className="w-full p-12 pb-[14rem] flex flex-col gap-8 items-center">
      {posts && posts.length ? (
        posts.map((post) => <Timeline key={JSON.parse(JSON.stringify(post._id))} post={post} />)
      ) : (
        <NoExist upload={JSON.parse(JSON.stringify(false))} />
      )}
    </div>
  );
}
