"use client";
import React from "react";
export default function ProfileTopBottoms() {
 

  return (
    <div className="w-[100%] h-[4rem] flex items-center justify-between">
      <img onClick={() => location.pathname = '/'} src="/images/arrow-left.svg" alt="back" />
      <img src="/images/more.svg" alt="more" />
    </div>
  );
}
