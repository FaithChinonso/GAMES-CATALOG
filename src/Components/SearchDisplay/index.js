import React, { useState, useEffect } from "react";
import SearchItem from "../SearchItem";
import SearchFilter from "../SearchFilter";
import "./style.css";
import Card from "../UI/Card";
import SearchBar from "../SearchBar";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const SearchDisplay = (props) => {
  const [filteredGroup, setFilteredGroup] = useState([]);
  const [filteredLevel, setFilteredLevel] = useState([]);
  const [filteredSearchItems, setFilteredSearchItems] = useState([]);
  const [error, setError] = useState();
  const [noOfElement, setNoOfElement] = useState(4);

  let filteredArray = props.items;

  const groupFilterChangeHandler = (selected) => {
    setFilteredGroup(selected);
  };

  const levelFilterChangeHandler = (selected) => {
    setFilteredLevel(selected);
  };
  const SubmitSearchChange = (input) => {
    const filteredSearch = props.items.filter((item) => {
      const searchItem = Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(input.toString().toLowerCase())
      );
      return searchItem;

      // if (searchItem) {
      //   setError([]);
      //   return searchItem;
      // }
      // if (!item.GameTitle.toLowerCase().includes(input.toLowerCase())) {
      //   setError({
      //     title: "Invalid Input",
      //     message: "Kindly enter a valid game",
      //   });
      //   return;
      // }
      // if (item.GameTitle.toLowerCase().includes(input.toLowerCase())) {
      //   return item;
      // }
    });
    if (filteredSearch.length === 0) {
      setError({
        title: "Invalid Input",
        message: "Kindly enter a valid game",
      });
      return;
    }
    setFilteredSearchItems(filteredSearch);
  };

  const filteredItem = props.items.filter((item) => {
    if (filteredGroup.length > 0) {
      return item.Group === filteredGroup;
    }
    if (filteredLevel.length > 0) {
      return item.Level === filteredLevel;
    }
  });

  // props.items.filter((item) => {
  //   if (filteredGroup.length > 0) {
  //     setFilteredArray(item.Group);
  //   }
  //   if (filteredLevel.length > 0) {
  //     setFilteredArray(item.Group);
  //   }
  //   return item;
  // });

  if (filteredSearchItems.length > 0) {
    filteredArray = filteredSearchItems;
  } else if (filteredItem.length > 0) {
    filteredArray = filteredItem;
  }

  const errorHandler = () => {
    setError(null);
  };
  const slice = filteredArray.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          {slice.map((item) => (
            <SearchItem
              key={item.id}
              title={item.GameTitle}
              description={item.GameDescription}
              img={item.GameImage}
            />
          ))}
        </div>

        {filteredArray.length > noOfElement && (
          <Button className="load-button" onClick={() => loadMore()}>
            Load More
          </Button>
        )}
      </Card>
      )
    </div>
  );
};

export default SearchDisplay;
