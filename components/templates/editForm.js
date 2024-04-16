"use client";
import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function EditForm({ user }) {
  let router = useRouter()

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

  const editProfile = useFormik({
    initialValues: {
      userName,
      email,
      profileImage,
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
      swal({
        icon: "warning",
        text: "Are you sure of changing",
      }).then((result) => {
        if (result) {
          fetch(`/api/editProfile/${user._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }).then(res => {
            if (res.ok) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "edit profile successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }else{
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "check your internet connection",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          
          router.refresh()
          router.refresh()
          router.refresh()
          
        }
      });

      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },
  });

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFieldValue("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
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
          name="profileImage"
          accept="image/*"
          onChange={(event) =>
            handleImageChange(event, editProfile.setFieldValue)
          }
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
