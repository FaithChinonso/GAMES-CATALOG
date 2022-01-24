import React, { useState, useEffect } from "react";
import SearchItem from "../SearchItem";
import SearchFilter from "../SearchFilter";
import "./style.css";
import Card from "../Card";
import SearchBar from "../SearchBar";

const SearchDisplay = (props) => {
  const [filteredGroup, setFilteredGroup] = useState([]);
  const [filteredLevel, setFilteredLevel] = useState([]);
  const [filteredSearchItems, setFilteredSearchItems] = useState([]);

  const groupFilterChangeHandler = (selected) => {
    setFilteredGroup(selected);
  };

  const levelFilterChangeHandler = (selected) => {
    setFilteredLevel(selected);
  };
  const SubmitSearchChange = (input) => {
    const filteredSearch = props.items.filter((item) => {
      if (item.GameTitle.toLowerCase().includes(input.toLowerCase())) {
        return item;
      }
    });

    setFilteredSearchItems(filteredSearch);
    console.log(filteredSearchItems);
  };

  const filteredItem = props.items.filter((item) => {
    if (filteredGroup.length > 0) {
      return item.Group === filteredGroup;
    } else if (filteredLevel.length > 0) {
      return item.Level === filteredLevel;
    }
  });
  let filteredArray = props.items;

  if (filteredSearchItems.length > 0) {
    filteredArray = filteredSearchItems;
  } else if (filteredItem.length > 0) {
    filteredArray = filteredItem;
  }

  return (
    <Card className="search">
      <SearchBar
        placeholder="Search by Game Title..."
        data={props.items}
        onSearch={SubmitSearchChange}
      />
      <SearchFilter
        selected={filteredGroup}
        levelSelected={filteredLevel}
        onGroupFilterChange={groupFilterChangeHandler}
        onLevelFilterChange={levelFilterChangeHandler}
      />
      <div className="search-contents">
        {filteredArray.map((item) => (
          <SearchItem
            key={item.id}
            title={item.GameTitle}
            description={item.GameDescription}
            img={item.GameImage}
          />
        ))}
      </div>
    </Card>
  );
};

export default SearchDisplay;
