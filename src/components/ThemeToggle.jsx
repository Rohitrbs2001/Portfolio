// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
        <span className="slider">
          <span className="icon">{theme === "dark" ? "🌙" : "🌞"}</span>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
