import React from "react";
import style from "../app/styles/home.module.css";
import Navbar from "../../components/templates/navbar";
import Search from "../../components/modules/search";
import StoreList from "../../components/templates/storeList";
import Timeline from "../../components/modules/timeline";
import Welcome from "../../components/templates/welcome";
import Me from "../../utils/me";
import { getAllPosts } from "@/utils/postTools";

export default async function Home() {
  let Active = false;
  const user = await Me();
  if (user) {
    Active = true;
  }
  const posts = await getAllPosts();


  return (
    <>
      <Welcome Active={Active} />
      <div className={style.home}>
        <Navbar userId={user._id}/>
        <Search />
        {/* <StoreList /> */}
        <div className="w-full flex flex-col gap-8 pb-[12rem]">
          {posts && posts.length
            ? posts.slice(0,3).map((post) => <Timeline post={post} />)
            : null}
        </div>
      </div>
    </>
  );
}
