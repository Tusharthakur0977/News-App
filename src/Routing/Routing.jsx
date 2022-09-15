import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "../components/News/News";
import PageNotFound from "../components/notfound/PageNotFound";
import SearchPage from "../screens/SearchPage";
function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/home" element={<News />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default Routing;
