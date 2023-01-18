import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "./Header";

export default function Register() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }

  //   const navigate = useNavigate;

  const handleSubmit = function (event) {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      <Header />
      <h1> Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email"> Email:</label>
        <input name="email" type="email"></input>
        <button> Registereee </button>
        <Link to="/"> BACK </Link>
      </form>
    </div>
  );
}
