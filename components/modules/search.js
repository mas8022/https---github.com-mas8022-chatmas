"use client";
import React, { useEffect, useState } from "react";
import style from "../../src/app/styles/search.module.css";
import Link from "next/link";

export default function Search() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [search]);

  useEffect(() => {
    const usersShow = users.filter((user) =>
      user.userName.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
    setUsersList(usersShow);
  }, [users]);


  return (
    <>
      <div className={style.search}>
        <img
          className={style.searchIcon}
          src="/images/search.svg"
          alt="search button"
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={style.searchInput}
          type="text"
          placeholder="Search here..."
        />
      </div>

      <div className="w-full mb-16 rounded-b-2xl shadow-2xl flex flex-col gap-5">
        {search.trim() && usersList.length
          ? usersList.map((user) => (
              <Link href={`contact/${user._id}`} key={user._id} className="w-full h-24  shadow-xl px-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <img
                    className="w-14 h-14 rounded-full"
                    src={user.profileImage?user.profileImage:"/images/blank-profile-picture-973460_640.png"}
                    alt="user image"
                  />
                  <span className="font-bold text-[1.3rem]">{user.userName}</span>
                </div>
                <span className="text-[1.2rem]">online</span>
              </Link>
            ))
          : null}
      </div>
    </>
  );
}
