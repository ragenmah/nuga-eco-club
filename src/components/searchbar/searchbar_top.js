import React, { useState } from "react";
import nugaLogo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { RoutesCustom } from "../../routes";

const SearchbarTop = ({ handleHideSearchTop }) => {
  const [name, setName] = useState("");
  const [searchComplete, setSearchComplete] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchComplete(true);
    navigate(RoutesCustom.searchResult.path, {
      state: { name: name },
    });
  };

  if (searchComplete) {
    window.location.reload();
    setSearchComplete(false);
  }
  return (
    <div className="main-search">
      <div className="search-field">
        <div className="innerinput">
          <div className="site-logo">
            <a href="/">
              <img src={nugaLogo} height={90} width={90}></img>
            </a>
          </div>
          <div className="search_field_bar">
            <form
              action={RoutesCustom.searchResult.path}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="search_field_input"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
                aria-label="search"
                placeholder="What are you looking for?"
              />
              <button aria-label="search" className="btn-search">
                Search
              </button>
            </form>
            <div className="close-btn" onClick={handleHideSearchTop}>
              <i class="fas fa-times text-dark"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchbarTop;
