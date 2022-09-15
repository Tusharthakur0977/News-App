import React, { useContext } from "react";
import "./newsitem.css";
import ReadMore from "../Readmore/Readmorebtn";
import { ThemeContext } from "../context/ThemeContext";
const NewsItem = (props) => {
  const date = new Date(props.publishedAt).toLocaleString();
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <div
        className="card newsitemCard my-3"
        style={{
          boxShadow: mode
            ? "0px 10px 20px 2px rgba(0, 0, 0, 1)"
            : "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
          backgroundColor: mode ? "transparent" : "white",
          color: mode ? "whitesmoke" : "black",
        }}
      >
        <div className="card-image cardImage">
          <img
            src={props.urlToimage ? `${props.urlToimage}` : ""}
            className="card-img-top"
            alt="Image Load Failed"
            height="200px"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title my-2">
            {props.title
              ? props.title.length > 50
                ? `${props.title.slice(0, 48)}...`
                : props.title
              : ""}
          </h5>
          <ReadMore className="card-text" content={props.content}>
            {props.content
              ? `${props.content}...`
              : `Click on "Read Full Article" to get full information`}
          </ReadMore>
          <a
            href={props.newsUrl}
            className={`btn ${mode ? "btn-light" : "btn-dark"}`}
          >
            <strong>Read Full Article</strong>
          </a>
        </div>
        <div className="card-footer">
          <small className="text-muted text-sm">
            Last updated:{" "}
            <strong>{props?.publishedAt ? date : "Unknown"}</strong> <br />
            Author:{" "}
            <strong>
              {props.author ? props.author.slice(0, 30) : "Unknown"}
            </strong>{" "}
          </small>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
