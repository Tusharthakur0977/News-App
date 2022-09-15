import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./themebtn.css";
const Themebutton = () => {
  const { mode, togglemode } = useContext(ThemeContext);
  return (
    <>
      <div id="mySidenav" className="sidenav ">
        <div>
          <input
            type="checkbox"
            checked={mode}
            onChange={togglemode}
            className="checkbox"
            id="checkbox"
          />
          <label for="checkbox" className="label">
           
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
            <div className="ball" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Themebutton;
