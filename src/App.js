import React from "react";
import SearchBar from "./Components/SearchBar";
import SearchDisplay from "./Components/SearchDisplay";
import styled from "styled-components";
import "./App.css";

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #646363;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const DUMMY_RESULTS = [
  {
    id: "el",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
  },
  {
    id: "el",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
  },
  {
    id: "el",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
  },
  {
    id: "el",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
  },
  {
    id: "el",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
  },
];

const App = () => {
  return (
    <BoxContainer>
      <SearchDisplay item={DUMMY_RESULTS} />
    </BoxContainer>
  );
};

export default App;
