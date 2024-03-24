import { useFormik } from "formik";
import React from "react";

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
      fetch("/api/editProfile", {
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

  return (
    <div className="w-full h-screen flex flex-col items-center gap-10 p-[3rem]">
      <div className="flex flex-col items-center gap-3">
        <img
          src="/images/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg"
          alt="profile image"
          className="w-[20rem] h-[20rem] rounded-full bg-cover bg-center bg-no-repeat"
        />
        <span className="font-bold text-[1.8rem]">Masproo225232</span>
      </div>
      <form onSubmit={signUp.handleSubmit} className="w-full flex flex-col gap-5 items-center">
          <input
            name="userName"
            value={signUp.values.userName}
            onChange={signUp.handleChange}
            type="text"
            className="w-full h-[3rem] rounded-md"
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
            className="w-full h-[3rem] rounded-md"
            placeholder="email"
          />
          {signUp.touched.email && signUp.errors.email && signUp.errors.email}
          <input
            name="password"
            value={signUp.values.password}
            onChange={signUp.handleChange}
            type="text"
            className="w-full h-[3rem] rounded-md"
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
            className="w-full h-[3rem] rounded-md"
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
  );
}
