import React, { useState, useEffect } from "react";
import SearchItem from "../SearchItem";
import SearchFilter from "../SearchFilter";
import "./style.css";
import Card from "../Card";
import axios from "axios";

const SearchDisplay = (props) => {
  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [filteredGroup, setFilteredGroup] = useState("");

  const groupFilterChangeHandler = (selectedGroup) => {
    setFilteredGroup(selectedGroup);
  };
  // const levelFilterChangeHandler = (selected) => {
  //   setFilteredLevel(selected);
  // };
  const filteredItems = props.items.filter((item) => {
    return item.group === filteredGroup;
  });
  console.log(filteredItems);

  // useEffect(() => {
  //   fetch(
  //     "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
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
  const items = props.items;

  return (
    <Card className="search">
      <SearchFilter
        selected={filteredGroup}
        onFilterChange={groupFilterChangeHandler}
      />
      {filteredItems.map((item) => (
        <SearchItem
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.src}
        />
      ))}
      {/* <SearchItem
        title={items[0].title}
        description={items[0].description}
        img={items[0].src}
      />
      <SearchItem
        title={items[1].title}
        description={items[1].description}
        img={items[1].src}
      />
      <SearchItem
        title={items[2].title}
        description={items[2].description}
        img={items[2].src}
      />
      <SearchItem
        title={items[3].title}
        description={items[3].description}
        img={items[3].src}
      /> */}
    </Card>
  );
};

export default SearchDisplay;
