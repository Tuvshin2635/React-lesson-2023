import React from "react";
import { useState } from "react";

export default function Panel({ title, children, onShow, isActive }) {
  // const [isActive, setIsActive] = useState(false);
  let render = <button onClick={onShow}>Show </button>;
  if (isActive) {
    render = <p> {children}</p>;
  }
  return (
    <div>
      <h3> {title} </h3>
      {isActive ? <p> {children} </p> : <button onClick={onShow}>Show </button>}
    </div>
  );
}
