import React, { useDebugValue, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    let value = e.target.value;
    setInput(value);
  };
  const submitSearchResults = () => {
    props.onSearch(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-field"
        placeholder={props.placeholder}
        onChange={handleSearch}
      />
      <div className="search-bar__btn">
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
          onClick={submitSearchResults}
        />
      </div>
    </div>
  );
};

export default SearchBar;
