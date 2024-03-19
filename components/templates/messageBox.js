"use client";
import React, { useState } from "react";

export default function MessageBox() {
  const [text, setText] = useState("");
  const [receiveID, setReceiveID] = useState("pdsdifsdpfnsdpifndsifsa");

  const sendMessageHandler = async () => {
    if (text.trim()) {
      await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          receiveID,
        }),
      }).then((res) => console.log(res));
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
      <img
        onClick={sendMessageHandler}
        src="/images/send.svg"
        alt="send"
        className="w-[3.5rem] h-[3.5rem] active:scale-95"
      />
    </div>
  );
}
