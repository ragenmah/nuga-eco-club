import React from "react";
import "./style.css";

const SearchBarNav = () => {
  return (
    <>
      <form action="" method="get" className="search-bar" traget="_blank">
        <input type="text" placeholder="search any thing ..." name="q" />
        <button type="submit" className="icon-search">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default SearchBarNav;
