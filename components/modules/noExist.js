import React from "react";

export default function NoExist({ upload }) {
  return (
    <div className="h-[35rem] w-full flex flex-col items-center justify-between mt-20">
      <div className="w-full flex flex-col  items-center justify-center">
        <img
          className="w-[15rem] h-[15rem] !bg-center !bg-cover opacity-10"
          src="/images/noexist.svg"
          alt="no exist"
        />
        <p className="text-[2rem] font-bold opacity-25">No post here</p>
      </div>

      {upload ? (
        <div className="w-full h-[9rem] flex flex-col items-center">
          <p className="text-[1.5rem] font-bold opacity-20">Upload New Post</p>
          <img
            className="w-[6rem] h-[6rem] !bg-center !bg-cover opacity-40"
            src="/images/arrow-bottom.svg"
            alt="arrow bottom"
          />
        </div>
      ) : null}
    </div>
  );
}
