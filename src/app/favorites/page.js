import React from "react";
import Search from "../../../components/modules/search";
import Me from "@/utils/me";
import Timeline from "../../../components/modules/timeline";
import favoriteModel from "@/models/favorite";
import NoExist from "@/components/modules/noExist";

export default async function Favorites() {
  const user = await Me();

  const posts = await favoriteModel
    .find({ user: user._id })
    .populate("post")
    .populate("user")
    .lean();


  return (
    <div className="pb-[13rem]">
      <div className="w-[100%] flex flex-col gap-5 p-[3rem]">
        <Search />
        <div className="flex flex-col w-[100%] items-center gap-y-12">
          {!posts && posts.length
            ? posts.map((item) => (
                <Timeline
                  user={JSON.parse(JSON.stringify(item.user))}
                  post={JSON.parse(JSON.stringify(item.post))}
                />
              ))
            : <NoExist upload={false}/>}
        </div>
      </div>
    </div>
  );
}
