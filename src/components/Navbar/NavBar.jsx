import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import { ThemeContext } from "../context/ThemeContext";
import Country from "../country/Country";
import "./navbar.css";
const NavBar = () => {
  const { mode, changeBackground, navbar } = useContext(ThemeContext);

  useEffect(() => {
    changeBackground();
    // console.log(window.scrollY);
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={`
      ${mode ? (navbar ? "navdarkactive" : "") : navbar ? "navlightactive" : ""}
      navbar navbar-expand-lg navbar-inverse fixed-top  `}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand"
          style={{
            color: mode
              ? navbar
                ? "black"
                : "#f1faee"
              : navbar
              ? "whitesmoke"
              : "black",
            fontWeight: "bold",
            fontSize: "1.4rem",
            fontFamily: "Helvetica",
            paddingRight: "15px",
            borderRight: `3px solid ${
              mode ? "crimson" : navbar ? "whitesmoke" : "crimson"
            }`,
          }}
        >
          News App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/home"
                className={`nav-link ${
                  mode
                    ? navbar
                      ? "itemdarkscroll"
                      : "itemdark-noscroll"
                    : navbar
                    ? "itemlightscroll"
                    : "itemlight-noscroll"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/searchpage"
                className={`nav-link ${
                  mode
                    ? navbar
                      ? "itemdarkscroll"
                      : "itemdark-noscroll"
                    : navbar
                    ? "itemlightscroll"
                    : "itemlight-noscroll"
                }`}
              >
                <i className="fa-solid fa-magnifying-glass"></i> Search News
              </Link>
            </li>
            <li></li>
          </ul>
          <div className="dropdowns d-flex align-items-center">
            <Category />
            <Country />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
