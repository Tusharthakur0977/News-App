import React, { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";
import Search from "../components/Search/Search";

const SearchPage = () => {
  const { mode, navbar } = useContext(ThemeContext);

  return (
    <div
      className="card"
      style={{
        height: "auto",
        minHeight: "100vh",
        background: mode
          ? "#121212"
          : "linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
        paddingTop: "55px",
      }}
    >
      <div className="card-body">
        <h1
          className="card-title py-2 mt-3 mb-5 text-center"
          style={{
            letterSpacing: "4px",
            outline:"none",
            color: mode ? "whitesmoke" : "black",
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>Search News By Keyword
        </h1>
        <div className="card-text ">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
