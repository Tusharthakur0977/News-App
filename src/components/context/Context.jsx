import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState(" ");
  const [country, setCountry] = useState("gb");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        page,
        setPage,
        totalPages,
        setTotalPages,
        country,
        setCountry,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
