"use client";
import ContactBox from "@/components/modules/contactBox";
import React, { useEffect, useState } from "react";

export default function Followers({params}) {
  const [search, setSearch] = useState("");
  const [followers, setFollowers] = useState([]);
  const [showFollowers, setShowFollowers] = useState(followers);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const filterUser = followers.filter((user) =>
      user.following.userName
        .trim()
        .toLocaleLowerCase()
        .includes(search.trim().toLocaleLowerCase())
    );
    setShowFollowers(filterUser);
  };

  useEffect(() => {
    fetch(`/api/userFollowers/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setFollowers(data);
      });
  }, []);

  useEffect(() => {
    setShowFollowers(followers);
  }, [followers]);

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
        {showFollowers
          ? showFollowers.map((follower) => (
              <ContactBox {...follower.user} key={follower._id} />
            ))
          : null}
      </div>
    </div>
  );
}
