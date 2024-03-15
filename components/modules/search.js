"use client";
import React, { useState } from "react";
import style from "../../src/app/styles/search.module.css";
export default function Search() {
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    console.log('click');
  }

  return (
    <div className={style.search}>
      <img
      onClick={searchHandler}
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
  );
}
