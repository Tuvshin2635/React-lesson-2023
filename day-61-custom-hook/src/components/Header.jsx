import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useTheme();

  function handleSelectChange(e) {
    e.preventDefault();
    setTheme(e.target.value);
    console.log(theme);
  }

  return (
    <div className="header-container">
      <p> Header from COMPO</p>
      <select name="theme" onChange={handleSelectChange} defaultValue={theme}>
        <option value="light">LIGHT</option>
        <option value="dark">DARK</option>
        <option value="green">GREEN</option>
      </select>
    </div>
  );
}
