import React from "react";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [hover, setHover] = useState(0);

  const addClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="container">
      <div className="counter1">
        <h1> counter #1 </h1>
        <p> {counter} </p>
        <button onClick={addClick}> Add one </button>
      </div>
    </div>
  );
}
