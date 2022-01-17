import React from "react";
import SearchFilter from "./Components/SearchFilter";
import SearchDisplay from "./Components/SearchDisplay";
import styled from "styled-components";
import "./App.css";

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d7d7d7;
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
      <SearchFilter />
      <SearchDisplay items={DUMMY_RESULTS} />
    </BoxContainer>
  );
};

export default App;
