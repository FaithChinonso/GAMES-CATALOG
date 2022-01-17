import React, { useState, useEffect } from "react";
import SearchItem from "../SearchItem";
import "./style.css";
import Card from "../Card";
import axios from "axios";

const SearchDisplay = (props) => {
  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  //   fetch("/https://swapi.dev/api/films/")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log(response);
  //       // items = response.data;
  //       // setItems(items);
  //       // setIsLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <Card className="search">
      <SearchItem
        title={props.items[0].title}
        description={props.items[0].description}
        img={props.items[0].src}
      />
      <SearchItem
        title={props.items[1].title}
        description={props.items[1].description}
        img={props.items[1].src}
      />
      <SearchItem
        title={props.items[2].title}
        description={props.items[2].description}
        img={props.items[2].src}
      />
      <SearchItem
        title={props.items[3].title}
        description={props.items[3].description}
        img={props.items[3].src}
      />
      ;
    </Card>
  );
};
export default SearchDisplay;
