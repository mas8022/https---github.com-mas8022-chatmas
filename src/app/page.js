import React from "react";
import style from "../app/styles/home.module.css";
import Navbar from "../../components/templates/navbar";
import Search from "../../components/modules/search";
import Welcome from "../../components/templates/welcome";
import Me from "../../utils/me";
import ShowRecentPost from "@/components/templates/showRecentPost";

export default async function Home() {
  let Active = false;
  const user = await Me();
  if (user) {
    Active = true;
  }

  if (user) {
    Active = true;
  }

  return (
    <>
      <Welcome Active={JSON.parse(JSON.stringify(Active))} />
      <div className={style.home}>
        <Navbar userId={JSON.parse(JSON.stringify(user))?._id} />
        <Search />
        {/* <StoreList /> */}
        <ShowRecentPost />
      </div>
    </>
  );
}
