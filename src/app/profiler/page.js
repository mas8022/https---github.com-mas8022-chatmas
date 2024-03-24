"use client";
import React from "react";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import style from "../styles/home.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function Profiler() {
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

  const editProfile = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      profileImage: "",
      phone: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.userName.trim()) {
        errors.email = "write username";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "email not valid";
      } else if (values.password.length > 15 || values.password.length <= 4) {
        errors.password = "password characters should be between 4 and 15";
      } else if (isNaN(values.phone)) {
        errors.password = "type correct phone number";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      fetch(`/api/sign/${userID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => console.log(res));

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
    <div className="w-full h-screen flex flex-col items-center gap-10 p-[3rem]">
      <div className="flex flex-col items-center gap-3 mb-10">
        <img
          src="/images/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg"
          alt="profile image"
          className="w-[20rem] h-[20rem] rounded-full bg-cover bg-center bg-no-repeat"
        />
        <span className="font-bold text-[1.8rem]">Masproo225232</span>
      </div>
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
          name="password"
          value={editProfile.values.password}
          onChange={editProfile.handleChange}
          type="text"
          className="w-full h-[4rem] rounded-md px-5 text-[1.35rem]  shadow-md focus:outline-0"
          placeholder="password"
        />
        {editProfile.touched.password &&
          editProfile.errors.password &&
          editProfile.errors.password}
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
          className="w-full h-4rem bg-white shadow-md text-[1.5rem] text-[black]"
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={(event) =>
              handleImageChange(event, editProfile.setFieldValue)
            }
          />
        </Button>
        <button className="w-full h-[5rem] bg-gradient-to-r shadow-md from-[#cffa7c] to-[#9ce89d] text-[1.7rem] text-[black]" type="submit">
          Edit profile
        </button>
      </form>
    </div>
  );
}
