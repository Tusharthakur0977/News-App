import Select from "react-select";
import React, { useState, useContext } from "react";
import categoryList from "./categoryList";
import { Context } from "../context/Context";
import { ThemeContext } from "../context/ThemeContext";

const Category = () => {
  const { category, setCategory, setPage } = useContext(Context);
  const { mode, navbar } = useContext(ThemeContext);

  const categoryStyles = {
    container: (provided) => ({
      ...provided,
      display: "inline-block",
      width: "100%",
      minHeight: "1px",
      textAlign: "left",
      border: "none",
      height: "30px",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      borderRadius: "0",
      boxShadow: "none",
      border: "none",
      borderRadius: "1px",
      minHeight: "1px",
      height: "30px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: mode ? navbar?"whitesmoke": "black": navbar ? "black" : "white",
      minHeight: "1px",
      paddingTop: "0",
      paddingBottom: "0",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      margin: "0",
      height: "0",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      margin: "auto",
      height: "25px",
      borderRadius: "5px",
      backgroundColor: mode ? navbar?"black":"whitesmoke" : navbar ? "white" : "black",
    }),
    clearIndicator: (provided) => ({
      ...provided,
      minHeight: "1px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      minHeight: "1px",
      height: "30px",
      margin: "0",
      paddingTop: "0",
      paddingBottom: "0",
    }),
    input: (provided) => ({
      ...provided,
      height: "1.4em",
      color: mode ? navbar?"black":"whitesmoke" : navbar ? "whitesmoke" : "black",
      margin: "0",
      minHeight: "1px",
      paddingBottom: "20px",
      fontSize: "12px",
    }),
    placeholder: (provided) => ({
      ...provided,
      height: "1.4em",
      color: mode ? navbar?"black":"whitesmoke"  : navbar ? "white" : "black",
      margin: "0",
      fontSize: "12px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: mode ? navbar?"black":"whitesmoke"  : navbar ? "white" : "black",
      minHeight: "1px",
      fontSize: "14px",
    }),
  };

  const handleDrop = (e) => {
    setCategory(e.value);
    setPage(1);
  };
  return (
    <div className="">
      <div
        className="container-fluid"
        style={{
          width: "171px",
        }}
      >
        <div className="d-flex justify-content-between" style={{}}>
          <Select
            placeholder="Category"
            styles={categoryStyles}
            isSearchable
            options={categoryList}
            onChange={handleDrop}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
