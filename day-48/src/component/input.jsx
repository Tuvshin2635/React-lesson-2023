import React from "react";
import { useState } from "react";

export default function Exercise() {
  const [inputBar, setInputBar] = useState("");

  const inputBars = (e) => {
    setInputBar(e.target.value);
  };

  return (
    <div className="container">
      <div className="input">
        <h1> Exercise </h1>

        <label> Typing </label>
        <input value={inputBar} onChange={inputBars} />

        {/* <p> {inputBar} </p> */}

        <label> Typing2 </label>
        <input value={inputBar} onChange={inputBars} />
      </div>
    </div>
  );
}
