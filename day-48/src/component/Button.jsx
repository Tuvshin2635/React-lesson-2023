import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Button() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      console.log("playing");
    } else {
      console.log("no playing");
    }
  }, []);
  function handleClick() {
    console.log("you Click me");
    setIsPlaying(!isPlaying);
  }

  return <button onClick={handleClick}>Click me</button>;
}
