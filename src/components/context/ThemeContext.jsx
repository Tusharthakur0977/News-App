import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  // change Theme on Click
  const [mode, setMode] = useState(false);
  const togglemode = () => {
    setMode(!mode);
  };

  // change navbar on scroll
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ mode, setMode, togglemode, navbar, changeBackground }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
