import React, { useState, useEffect } from "react";
import SearchItem from "../SearchItem";
import "./style.css";
import Card from "../Card";
import axios from "axios";

const SearchDisplay = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((response) => {
        items = response.data;
        setItems(items);
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card className="search">
      {items.map((item) => {
        <SearchItem
          title={item.GameTitle}
          description={item.GameDescription}
          img={item.GameImage}
        />;
      })}
    </Card>
  );
};
export default SearchDisplay;
