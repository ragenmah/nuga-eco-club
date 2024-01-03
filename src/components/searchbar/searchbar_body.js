import React from "react";
import "./style.css";
const SearchBarBody = () => {
  return (
    <>
      <form action="" method="get" className="search-bar-body " traget="_blank">
        <input
          type="text"
          placeholder="search your destiny ..."
          autoComplete="off"
          name="q"
        />
        <button type="submit" className="btn-search">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBarBody;
