"use client";
import React, { useEffect, useState } from "react";
import context from "./context";

const MyContextProvider = ({ children }) => {
  const [pageMode, setPageMode] = useState(() => {
    const localPageMode = JSON.parse(localStorage.getItem("pageMode"));
    return localPageMode ? localPageMode : false;
  });

  useEffect(() => {
    localStorage.setItem("pageMode", JSON.stringify(pageMode));
  }, [pageMode]);

  const value = { pageMode, setPageMode };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default MyContextProvider;
