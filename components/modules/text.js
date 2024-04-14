import React from "react";

export default function Text({ text, subject }) {
  return subject === "me" ? (
    <p className="self-end bg-gradient-to-r max-w-[17rem] rounded-xl text-[14px] p-4 from-[#cffa7c] to-[#9ce89d] ">
      {text}
    </p>
  ) : (
    <p className="bg-gradient-to-r max-w-[17rem] rounded-xl text-[14px] p-4 border-[2px] border-[#9ce89d]/70">
      {text}
    </p>
  );
}
