import React from "react";
import Timeline from "../../../components/modules/timeline";
import Me from "../../../utils/me";
import { getUserPosts } from "@/utils/postTools";

export default async function Post() {
  const user = await Me();
  const posts = await getUserPosts(user.id);

  return (
    <div className="w-full p-12 pb-[14rem] flex flex-col gap-8 items-center">
      {posts && posts.length ? (
        posts.map((post) => (
          <Timeline user={user} post={JSON.parse(JSON.stringify(post))} />
        ))
      ) : (
        <h2>mohammad</h2>
      )}
    </div>
  );
}
