import React, { useState } from "react";
import "./style.css";

const SearchFilter = (props) => {
  const [groupInput, setGroupInput] = useState("");
  const [levelInput, setLevelInput] = useState("");
  const groupDropDownHandler = (e) => {
    setLevelInput("");
    setGroupInput(e.target.value);
    props.onGroupFilterChange(groupInput);
    props.onLevelFilterChange(levelInput);
  };

  const levelDropDownHandler = (e) => {
    setGroupInput("");
    setLevelInput(e.target.value);
    props.onLevelFilterChange(levelInput);
    props.onGroupFilterChange(groupInput);
  };

  return (
    <div className="search-filter">
      <div className="search-filter__control">
        <label className="search-filter__label">Filter By Group</label>
        <select value={props.selected} onChange={groupDropDownHandler}>
          <option value="Academic" className="search-filter__option">
            Academic
          </option>
          <option value="Financial Literacy" className="search-filter__option">
            Financial Literacy
          </option>
        </select>
      </div>
      <div className="search-filter__control">
        <label className="search-filter__label">Filter By Level</label>
        <select value={props.levelSelected} onChange={levelDropDownHandler}>
          <option value="Key Stage 1" className="search-filter__option">
            Key Stage 1
          </option>
          <option value="Key Stage 2" className="search-filter__option">
            Key Stage 2
          </option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
