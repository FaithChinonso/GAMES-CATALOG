import React from "react";
import "./style.css";

const SearchDropDown = (props) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.group}</div>
    </div>
  );
};
export default SearchDropDown;
