import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "../Spinner/Spinner";
import NewsItem from "../NewsItem/NewsItem";
import "./search.css";
import { ThemeContext } from "../context/ThemeContext";

const Search = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [noData, setNoData] = useState(false);
  const [searchedWord, setSearchedWord] = useState("");
  const [loader, setLoader] = useState(false);
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      getsearchednews();
    }, 2500);
    return () => clearTimeout(timer);
  }, [searchedWord]);

  var url = `https://newsapi.org/v2/everything?q=${searchedWord}&apiKey=f72aa9cf643b4433a74690902942a700`;
  const getsearchednews = () => {
    setLoader(true);
    axios
      .get(url)
      .then((response) => {
        const allSearcheddata = response.data.articles;
        setSearchedData(allSearcheddata);
        setLoader(false);
        setNoData(false);
        if (response.data.totalResults < 1) {
          setSearchedData();
          setLoader(false);
          setNoData(true);
        }
        console.log(response.data.totalResults);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container d-flex flex-column my-5 ">
        <div
          className="form-group mb-3 mx-auto col-7"
          style={{ border: "none" }}
        >
          <input
          autoComplete="false"
            style={{
              boxShadow:
                " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              borderRadius: "10px",
              border: "none",
              color: "white",
              backgroundColor: mode ? "whitesmoke" : "black",
            }}
            type="text"
            value={searchedWord}
            onChange={(e) => setSearchedWord(e.target.value)}
            className="form-control form-control-lg srchbox"
            id="searchinout"
            placeholder="Enter keyword to search"
          />
        </div>
      </div>

      {searchedWord.length <= 0 ? (
        <div className="container my-4 text-center">
          <h3>Please Enter A Word To Search</h3>
        </div>
      ) : !noData ? (
        <div className="card" style={{ background: "transparent" }}>
          <div className="mx-5 my-4 p-0">
            <h3
              className="text-center"
              style={{ color: mode ? "white" : "black", background: "none" }}
            >
              News Related To "{searchedWord.toUpperCase()}"
            </h3>
          </div>

          {loader ? (
            <Spinner />
          ) : (
            <div className="card-body d-flex flex-wrap justify-content-around mx-lg-0 my-lg-2 p-0 ">
              {searchedData?.map((item) => (
                <div className="mx-5 my-3" key={item.url}>
                  <NewsItem
                    title={item.title}
                    author={item.author}
                    publishedAt={item.publishedAt}
                    urlToimage={item.urlToImage}
                    content={item.description}
                    newsUrl={item.url}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
        className="container my-4 p-3"
        style={{
          color: mode ? "white" : "black",
          borderRadius: "10px",
        }}
      >
        <h3 className="mb-5">
          Sorry, there are no results for "{searchedWord}"
        </h3>
        <strong className="m-2"> Suggestions</strong>
        <ul>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords</li>
        </ul>
      </div>
      )}
 
    </>
  );
};

export default Search;
