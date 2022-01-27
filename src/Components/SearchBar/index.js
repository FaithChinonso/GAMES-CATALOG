import React, { useDebugValue, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const handleSearch = (e) => {
    let value = e.target.value;
    if (value.trim().length > 0) {
      setIsValid(true);
    }

    setInput(value);
  };
  const submitSearchResults = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      setIsValid(false);

      return;
    }
    props.onSearch(input);
    setInput("");
  };

  return (
    <div className={`search-bar ${!isValid ? "invalid" : ""}`}>
      <input
        type="text"
        className="search-field"
        placeholder={props.placeholder}
        value={input}
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
