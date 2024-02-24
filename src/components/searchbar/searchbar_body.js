import React, { useState } from "react";
import "./style.css";
import Selectors from "../selectors/selectors";
import { useDispatch } from "react-redux";
import { searchHeritageWalks } from "../../redux/actions/actionCreaters/heritageActionCreater";
import { RoutesCustom } from "../../routes";
import { useNavigate } from "react-router-dom";
const SearchBarBody = () => {
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchHeritageWalks(name));
    navigate(RoutesCustom.searchHeritageWalkResult.path);
  };

  return (
    <>
      <form
        action=""
        method="get"
        className="search-bar-body mb-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="search your destiny ..."
          required
          autoComplete="off"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn-search">
          Search
        </button>
      </form>

      {showSearch ? <Selectors /> : <></>}
      <div
        className="show-more-filter mt-3"
        onClick={() => setShowSearch(!showSearch)}
      >
        <span>{showSearch ? "Hide" : "More"} Options</span>
        {!showSearch ? (
          <i className="fas fa-chevron-down m-1" />
        ) : (
          <i className="fas fa-chevron-up m-1" />
        )}
      </div>
    </>
  );
};

export default SearchBarBody;
