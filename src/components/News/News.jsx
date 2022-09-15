import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NewsItem from "../NewsItem/NewsItem";
import { Spinner } from "../Spinner/Spinner";
import { Context } from "../context/Context";
import { Pagination } from "../pagination/Pagination";
import { ThemeContext } from "../context/ThemeContext";

const News = () => {
  const { mode } = useContext(ThemeContext);
  const { category, page, totalPages, setTotalPages, country } =
    useContext(Context);
  const [article, setArticle] = useState([]);
  const [loader, setLoader] = useState(false);

  var url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=07534ccd4be6455cb402600d7b995901&pagesize=15&page=${page}`;

  useEffect(() => {
    getnews();
  }, [page, category, country]);

  const getnews = () => {
    setLoader(true);
    axios
      .get(url)
      .then((response) => {
        const alldata = response?.data?.articles;
        const totalresult = response?.data?.totalResults;
        setArticle(alldata);
        setTotalPages(totalresult);
        setLoader(false);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card"
      style={{
        background: mode
          ? "#121212"
          : "linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
        paddingTop: "55px",
      }}
    >
      <div className="mx-5 my-4 p-0">
        <h2
          className="card-title text-center"
          style={{
            background: "none",
            color: mode ? "#fff" : "#111",
            fontFamily: "Helvetica Neue, sansSerif",
            fontSize: "4em",
            fontWeight: "bold",
            letterSpacing: "5px",
          }}
        >
          TOP Headlines
        </h2>
      </div>

      {loader ? (
        <Spinner />
      ) : (
        <div className="card-body d-flex flex-wrap justify-content-around mx-lg-1 my-lg-2 p-0 ">
          {article.map((item) => (
            <div className="my-3" key={item.url}>
              <NewsItem
                key={item.id}
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
      <Pagination />
    </div>
  );
};

export default News;
