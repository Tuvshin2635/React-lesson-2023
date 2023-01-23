import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Anime() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("my anime compo");
    setCount(count + 1);
  }, []);

  function handleClick(e) {
    console.log("You clicked me");
  }

  return (
    <div>
      Use EFFECT with Anime
      <button
        onClick={(e) => {
          handleClick(e);
          console.log(setCount(count + 1));
        }}
      >
        {" "}
        CLICKEE{" "}
      </button>
    </div>
  );
}
