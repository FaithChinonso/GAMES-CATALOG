import React from "react";
import Card from "../Card";
import "./style.css";

const SearchItem = (props) => {
  return (
    <Card className="search-item">
      <div className="search-item__title">
        <h2>{props.title}</h2>
      </div>

      <div className="search-item__description">
        <h2>{props.description}</h2>
      </div>
      <div className="search-item__image">
        <img src={props.img} alt="search result" className="search-img" />
      </div>
    </Card>
  );
};

export default SearchItem;
