"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function MessageBox({ toId }) {
  const router = useRouter();
  const [text, setText] = useState("");

  const sendMessageHandler = async () => {
    if (text.trim()) {
      await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: toId,
          content: text,
        }),
      });
      setText("");
      router.refresh();
    }
  };

  return (
    <div className="w-[90%] mx-auto fixed bottom-[13rem] h-[5rem] border border-1 border-solid border-slate-800 rounded-full pr-5 flex items-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="type message ..."
        className="w-full h-full rounded-full px-6 font-medium text-[1.6rem] bg-slate-50/0 focus:outline-none"
      />
      <Image
        onClick={sendMessageHandler}
        src="/images/send.svg"
        alt="send"
        className="w-[3.5rem] h-[3.5rem] active:scale-95"
      />
    </div>
  );
}
