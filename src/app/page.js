"use client";
import { useEffect, useState } from "react";
import style from "../app/styles/home.module.css";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Navbar from "../../components/templates/navbar";
import Search from "../../components/modules/search";
import StoreList from "../../components/templates/storeList";
import Timeline from "../../components/modules/timeline";
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
export default function Home() {
  // const [pageMode, setPageMode] = useState(() => {
  //   const localPageMode = JSON.parse(localStorage.getItem("pageMode"));
  //   return localPageMode ? localPageMode : false;
  // });
  const [pageMode, setPageMode] = useState(false);
  const [flagLog, setFlagLog] = useState(false);
  const [flagModal, setFlagModal] = useState(false);

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
  });

  // useEffect(() => {
  //   localStorage.setItem("pageMode", JSON.stringify(pageMode));
  // }, [pageMode]);

  const changePageModeHandler = async () => {
    if (flagLog) {
      setPageMode(true);
      setFlagModal(false);
    } else {
      setFlagModal(true);
    }
  };

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

  const signUp = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      profileImage: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.userName.trim()) {
        errors.email = "write username";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "email not valid";
      } else if (values.password.length > 15 || values.password.length <= 4) {
        errors.password = "password characters should be between 4 and 15";
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
      }).then((res) => console.log(res));

      setFlagModal(false);
      setPageMode(true);

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

  return pageMode ? (
    <>
      <div className={style.home}>
        <Navbar />
        <Search />
        <StoreList />
        <Timeline />
      </div>
    </>
  ) : (
    <>
      {flagModal && (
        <div className={style.start__momModal}>
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

            <div className={style.ikenv}>
              <Button
                className={style.lkgnsd}
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
      )}

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
            <span className="text-style-1">Sign up</span>
          </span>
        </div>
      </div>
    </>
  );
}
