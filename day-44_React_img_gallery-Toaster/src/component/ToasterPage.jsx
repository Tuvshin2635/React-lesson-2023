import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ToasterPage() {
  const notify = () => toast("succes");
  return (
    <div>
      <button onClick={notify}> Saved </button>
      <ToastContainer />
      <Link to={"/"}> BACK </Link>

    </div>
  );
}
