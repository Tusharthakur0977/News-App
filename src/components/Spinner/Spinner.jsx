import React,{useContext  } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./spinner.css";

export const Spinner = () => {
const { mode } = useContext(ThemeContext);

  return (
    <div
      className="container"
      style={{
        height: "30rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="loader" style={{color:mode?"white":"black"}}>Loading...</div>
    </div>
  );
};
