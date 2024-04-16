"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Scroller() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition > 1000 ? (
    <>
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
    </>
  ) : null;
}
