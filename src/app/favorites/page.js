import React from "react";
import Search from "../../../components/modules/search";
import Timeline from "../../../components/modules/timeline";

export default function Favorites() {
  return (
    <div className="pb-[13rem]">
      <div className="w-[100%] flex flex-col gap-5 p-[3rem]">
        <Search />
        <div className="flex flex-col w-[100%] items-center gap-y-12">
          {/* <Timeline />
          <Timeline />
          <Timeline /> */}
        </div>
      </div>
    </div>
  );
}
