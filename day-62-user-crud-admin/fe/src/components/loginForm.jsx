import React from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const URL = "http://localhost:8081/login";
  const navigate = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    if (FETCHED_JSON.status === "success") {
      toast(" You are LOGIN ");
      navigate("/users");
    } else {
      toast(FETCHED_JSON.status);
    }
  }

  return (
    <div>
      <h2> Login </h2>
      <form onSubmit={handleLoginSubmit}>
        <label> Username</label>
        <input name="email" type="email" /> <p />
        <label> Password</label>
        <input name="password" type="password" />
        <Button type="submit"> Login </Button>
      </form>
    </div>
  );
}
