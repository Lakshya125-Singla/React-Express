import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="btn btn-secondary mb-3" onClick={toggleTheme}>
      {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
