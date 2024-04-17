"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function EditForm({ user }) {
  let router = useRouter();
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    // height: 1,
    // overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const { userName, email, profileImage, phone } = user;
  const [profileImagex, setProfileImagex] = useState(profileImage);
  const editProfile = useFormik({
    initialValues: {
      userName,
      email,
      phone,
    },
    validate: (values) => {
      const errors = {};
      if (!values.userName.trim()) {
        errors.email = "write username";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "email not valid";
      } else if (isNaN(values.phone)) {
        errors.password = "type correct phone number";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      const formData = new FormData();
      formData.append("userName", values.userName);
      formData.append("email", values.email);
      formData.append("profileImage", profileImagex);
      formData.append("phone", values.phone);

      swal({
        icon: "warning",
        text: "Are you sure of changing",
      }).then((result) => {
        if (result) {
          fetch(`/api/editProfile/${user._id}`, {
            method: "PUT",
            body: formData,
          }).then((res) => {
            if (res.ok) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "edit profile successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "check your internet connection",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

          router.refresh();
          router.refresh();
          router.refresh();
        }
      });

      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },
  });

  const handleImageChange = (event) => {
    const { files } = event.target;
    if (files[0]) {
      setProfileImagex(files[0]);
    }
  };

  return (
    <form
      onSubmit={editProfile.handleSubmit}
      className="w-[90%] flex flex-col gap-5 items-center"
    >
      <input
        name="userName"
        value={editProfile.values.userName}
        onChange={editProfile.handleChange}
        type="text"
        className="w-full h-[4rem] rounded-md px-5 text-[1.35rem]  shadow-md focus:outline-0"
        placeholder="user name"
      />
      {editProfile.touched.userName &&
        editProfile.errors.userName &&
        editProfile.errors.userName}

      <input
        name="email"
        value={editProfile.values.email}
        onChange={editProfile.handleChange}
        type="text"
        className="w-full h-[4rem] rounded-md px-5 text-[1.35rem]  shadow-md focus:outline-0"
        placeholder="email"
      />
      {editProfile.touched.email &&
        editProfile.errors.email &&
        editProfile.errors.email}
      <input
        name="phone"
        value={editProfile.values.phone}
        onChange={editProfile.handleChange}
        type="text"
        className="w-full h-[4rem] rounded-md px-5 text-[1.35rem]  shadow-md focus:outline-0"
        placeholder="phone"
      />
      {editProfile.touched.phone &&
        editProfile.errors.phone &&
        editProfile.errors.phone}

      <Button
        className="w-full h-[4rem] bg-white shadow-md text-[1.5rem] text-[black]"
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload Photo
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          onChange={(event) => handleImageChange(event)}
        />
      </Button>
      <button
        className="w-full h-[5rem] bg-gradient-to-r shadow-md from-[#cffa7c] to-[#9ce89d] text-[1.7rem] text-[black]"
        type="submit"
      >
        Edit profile
      </button>
    </form>
  );
}
