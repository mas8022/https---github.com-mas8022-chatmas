"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Navbar from "../../../components/templates/navbar";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function PostUpload() {
  const route = useRouter();
  const [cover, setCover] = useState("");
  const [postImage, setPostImage] = useState("");

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      const formData = new FormData();
      formData.append("postImage", postImage);
      formData.append("content", values.content);

      console.log(postImage);

      if (postImage) {
        await fetch("/api/post/upload", {
          method: "POST",
          body: formData,
        }).then(async (res) => {
          if (res.ok) {
            await Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Upload post successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setCover("");
            values.content = "";
            route.refresh();
          }
        });
      }

      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },
  });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleImageChange = (event) => {
    const { files } = event.target;
    if (files[0]) {
      setPostImage(files[0]);
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full h-screen flex flex-col gap-7 p-[3rem] pb-[12rem] items-center justify-between"
    >
      <Navbar />
      <div className="w-full flex flex-col items-center gap-10">
        <Button
          className="w-full !bg-cover !rounded-2xl !bg-center h-[30rem] flex items-center justify-center font-light text-zinc-100 text-[2rem]"
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={
            cover ? { background: `url('${cover}')` } : { background: "black" }
          }
        >
          Upload file
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={(event) => handleImageChange(event)}
          />
        </Button>

        <input
          name="content"
          onChange={formik.handleChange}
          value={formik.values.content}
          type="text"
          className="w-full h-20 rounded-full bg-white/50 border border-black/20 focus:outline-none px-[2rem] text-[1.6rem] font-light"
          placeholder="Type your post content ....."
        />
      </div>

      <button
        className="w-full h-[6rem] rounded-full bg-gradient-to-r from-[#cffa7c] to-[#9ce89d] flex items-center justify-center text-[1.7rem] font-bold"
        type="submit"
      >
        Send post
      </button>
    </form>
  );
}
