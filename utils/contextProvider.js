"use client";
import React from "react";
import context from "./context";

const MyContextProvider = ({ children }) => {
  const value = {};

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default MyContextProvider;
