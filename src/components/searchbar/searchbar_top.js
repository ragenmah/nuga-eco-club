import React from "react";

const SearchbarTop = ({ handleHideSearchTop }) => {
  return (
    <div className="main-search">
      <div className="search-field">
        <div className="innerinput">
          <div className="site-logo">
            <a href="#">
              <img
                src="https://ragenmah.github.io/nuga-eco-club/static/images/logo.png"
                height={90}
                width={90}
              ></img>
            </a>
          </div>
          <div className="search_field_bar">
            <form action="/search-result">
              <input
                type="text"
                className="search_field_input"
                name="term"
                autoComplete="off"
                aria-label="search"
                placeholder="What are you looking for?"
              />
              <button aria-label="search" className="btn-search">
                Search
              </button>
            </form>
            <div className="close-btn" onClick={handleHideSearchTop}>
              <i class="fas fa-times "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchbarTop;
