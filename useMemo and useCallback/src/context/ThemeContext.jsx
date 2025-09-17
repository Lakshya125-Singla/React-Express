import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ✅ load saved theme from localStorage OR default to false (light mode)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleTheme = () => setDark((prev) => !prev);

  // ✅ save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
