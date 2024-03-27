"use client"
import React from "react";

export default function Scroller() {

  window.addEventListener("scroll", (e) => {
    
  })

  return (
    <div
    onClick={() => scrollTo(0, 0)}
    className="active:scale-95 bg-[#9ce89d] w-[4rem] h-[4rem] rounded-[50%] z-10 fixed bottom-[10rem] right-4 flex items-center justify-center"
  >
    <img
      className="w-[3rem] h-[3rem]"
      src="/images/arrow-up.svg"
      alt="arrow-up"
    />
  </div>
  );
}
