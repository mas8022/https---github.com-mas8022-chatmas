import React from "react";

export default function Post({ data }) {
  return (
    <img className=" h-[10rem] bg-cover" src={data} alt="nature" />
  );
}
