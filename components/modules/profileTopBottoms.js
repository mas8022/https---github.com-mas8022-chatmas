"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
export default function ProfileTopBottoms() {
 let router = useRouter()

  return (
    <div className="w-[100%] h-[4rem] flex items-center justify-between">
      <img onClick={() => router.back()} src="/images/arrow-left.svg" alt="back" />
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
    </div>
  );
}
