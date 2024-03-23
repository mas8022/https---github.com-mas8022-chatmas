"use client";
import React, { useEffect, useState } from "react";
import { following } from "../../../data";
export default function Following() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([...following]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const filterUser = following.filter((user) =>
      user.userName
        .trim()
        .toLocaleLowerCase()
        .includes(search.trim().toLocaleLowerCase())
    );
    setUsers(filterUser);
  };

  const selectHandler = (ID) => {
    console.log(ID);
  }
 
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
        {users?.map((user, index) => (
          <div
          onClick={() => selectHandler(index)}
            key={index}
            className="w-full h-[5rem] rounded-md px-5 flex items-center shadow-md justify-between"
          >
            <div className="flex gap-5 items-center">
              <img
                src={user.image}
                alt="user image"
                className="w-[3.7rem] h-[3.7rem] bg-center bg-cover rounded-full shrink-0 shadow-md "
              />
              <span>{user.userName}</span>
            </div>
            <span>{user.online? 'online': "offline"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
