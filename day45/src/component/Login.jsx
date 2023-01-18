import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    loginName: "tuvshee@gmail.com",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      console.log("user is permit");
      toast("user is permit");
      navigate("/register", {
        replace: true,
        state: { bookName: "fake title" },
      });
    } else {
      //   console.log("not permit");
      toast("not permit");
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <label htmlFor="username"> Login Name </label>
        <input name="username" type="email" /> <br />
        <label htmlFor="password"> Password</label>
        <input name="password" type="password" />
        <br />
        <button> Sign In </button>
        <ToastContainer />
      </form>
      <Link to="/"> BACK </Link>
    </div>
  );
}
