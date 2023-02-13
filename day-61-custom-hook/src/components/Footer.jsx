import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  function handleSelectChange(e) {
    e.preventDefault();
    setTheme(e.target.value);
  }
  const { theme, setTheme } = useTheme();
  return (
    <div className="foother-container ">
      <p>FOOTER </p>
      <select name="theme" onChange={handleSelectChange} defaultValue={theme}>
        <option value="light">LIGHT</option>
        <option value="dark">DARK</option>
        <option value="green">GREEN</option>
      </select>
    </div>
  );
}
