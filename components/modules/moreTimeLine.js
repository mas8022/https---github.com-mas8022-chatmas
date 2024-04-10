"use client";
import React from "react";
import swal from "sweetalert";
import Like from "./like";

export default function MoreTimeLine({ post }) {
  const commentHandler = () => {
    swal({
      title: "Comment",
      text: "type your comment",
      content: "input",
      buttons: true,
    }).then((res) => {
      if (res) {
        fetch("/api/post/comment/uploadComment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(res),
        });
      }
    });
  };

  return (
    <div className="w-[7rem] h-[5rem] flex items-center justify-between z-[1000]">
      <img
        onClick={commentHandler}
        className="w-[3rem] h-[3rem] active:scale-95 transition-all duration-75"
        src="/images/comments.svg"
        alt="comment button"
      />
      <Like post={post} />
    </div>
  );
}
