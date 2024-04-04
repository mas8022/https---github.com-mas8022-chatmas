"use client";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import style from "../../src/app/styles/home.module.css";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
import context from "../../utils/context";
import { useRouter } from "next/navigation";
export default function Welcome({ Active }) {
  const contextWelcome = useContext(context);
  const router = useRouter()
  const [flagLog, setFlagLog] = useState(false);
  const [flagModal, setFlagModal] = useState(false);

  // const user = Me();
  // console.log(user);

  useEffect(() => {
    const unHideModalSignUpHandler = (e) => {
      if (
        e.target.contains(
          document.querySelector(".home_start__momModal__Ft_y3")
        )
      ) {
        setFlagModal(false);
      }
    };

    window.addEventListener("click", (e) => unHideModalSignUpHandler(e));

    return () => window.removeEventListener("click", unHideModalSignUpHandler);
  }, []);

  const changePageModeHandler = async () => {
    if (flagLog) {
      contextWelcome.setPageMode(true);
      setFlagModal(false);
    } else {
      setFlagModal(true);
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const signUp = useFormik({
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
      } else if (isNaN(values.phone) || !values.phone.trim()) {
        errors.password = "type correct phone number";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.ok) {
          window.scrollTo(0, 0);
          router.refresh()
        }
      });

      setFlagModal(false);
      contextWelcome.setPageMode(true);

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
    <div className={contextWelcome.pageMode && Active ? "welcomeDeActive" : undefined}>
      <div className={flagModal ? style.start__momModal: undefined}>
        <form onSubmit={signUp.handleSubmit} className={style.start__modal}>
          <p className={style.efwe}>Sign up</p>
          <input
            name="userName"
            value={signUp.values.userName}
            onChange={signUp.handleChange}
            type="text"
            className={style.fsad}
            placeholder="user name"
          />
          {signUp.touched.userName &&
            signUp.errors.userName &&
            signUp.errors.userName}

          <input
            name="email"
            value={signUp.values.email}
            onChange={signUp.handleChange}
            type="text"
            className={style.fsad}
            placeholder="email"
          />
          {signUp.touched.email && signUp.errors.email && signUp.errors.email}
          <input
            name="password"
            value={signUp.values.password}
            onChange={signUp.handleChange}
            type="text"
            className={style.fsad}
            placeholder="password"
          />
          {signUp.touched.password &&
            signUp.errors.password &&
            signUp.errors.password}
          <input
            name="phone"
            value={signUp.values.phone}
            onChange={signUp.handleChange}
            type="text"
            className={style.fsad}
            placeholder="phone"
          />
          {signUp.touched.phone && signUp.errors.phone && signUp.errors.phone}

          <div className={style.ikenv}>
            <Button
              className={style.lkgnsd}
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
                  handleImageChange(event, signUp.setFieldValue)
                }
              />
            </Button>
            <button className={style.signUpBtn} type="submit">
              sign up
            </button>
          </div>
        </form>
      </div>

      <div className={style.start}>
        <div className={style.home_home_start__top__OWvhx__FFXGv}>
          <div
            onClick={changePageModeHandler}
            className={style.home_home_home_start__top__skipBtn__qxhuH__8x4DP}
          >
            skip
          </div>
          <div className={style.home_start__top__title}>
            Find Your Best Matches
          </div>
          <div className={style.sadfsdaf}>
            Enjoy together, happy to share and save your time with transactions
            at home.
          </div>
        </div>

        <div className={style.home_start__bottom__oCg04}>
          <div onClick={changePageModeHandler} className={style.Rectangle}>
            Get Started
          </div>

          <span className={style.sdifuhds}>
            Dont have an account?
            <span onClick={() => setFlagModal(true)} className="text-style-1">
              Sign up
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
