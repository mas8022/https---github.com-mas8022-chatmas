"use client";
import React, { useEffect, useState } from "react";
import ContactBox from "../../../components/modules/contactBox";
export default function Following() {
  const [search, setSearch] = useState("");
  const [followings, setFollowings] = useState([]);
  const [showFollowings, setShowFollowings] = useState(followings);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const filterUser = followings.filter((user) =>
      user.following.userName
        .trim()
        .toLocaleLowerCase()
        .includes(search.trim().toLocaleLowerCase())
    );
    setShowFollowings(filterUser);
  };

  useEffect(() => {
    fetch("/api/followers/fakeId")
      .then((res) => res.json())
      .then((data) => {
        setFollowings(data);
      });
  }, []);

  useEffect(() => {
    setShowFollowings(followings);
  }, [followings]);


  return (
    <div className="w-full p-[3rem] pb-[10rem]">
      <div className="w-full h-[4rem] rounded-full border border-1 border-black/20 flex pl-5 items-center gap-3 mb-20">
        <img
          className="w-[2.5rem] h-[2.5rem]"
          src="/images/search.svg"
          alt="search button"
        />
        <input
          value={search}
          onChange={(e) => searchHandler(e)}
          className="w-full h-full rounded-full focus:outline-0 font-medium !text-[1.2rem]"
          type="text"
          placeholder="Search your following..."
        />
      </div>

      <div className="w-full flex flex-col gap-5">
        {showFollowings
          ? showFollowings.map((following) => (
              <ContactBox {...following.following} key={following._id} />
            ))
          : null}
      </div>
    </div>
  );
}
