import React, { useContext } from "react";
import { Context } from "../context/Context";

export const Pagination = () => {
  const { page, setPage, totalPages } = useContext(Context);
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page + 1 > Math.ceil(totalPages / 15)) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <div className="container my-3 pager d-flex justify-content-between">
      <button
        disabled={page < 2}
        className="btn btn-danger prevoius"
        onClick={handlePrevious}
      >
        &larr; Previous
      </button>
      <button
        disabled={page + 1 > Math.ceil(totalPages / 15)}
        className="btn btn-danger next"
        onClick={handleNext}
      >
        Next &rarr;
      </button>
    </div>
  );
};
