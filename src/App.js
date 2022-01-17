import React from "react";
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
    id: "ab",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
    group: "Academic",
    level: "Key Stage 2",
  },
  {
    id: "cd",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
    group: "Academic",
    level: "Key Stage 1",
  },
  {
    id: "ef",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
    group: "Academic",
    level: "Key Stage 2",
  },
  {
    id: "gh",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
    group: "Financial Literacy",
    level: "Key Stage 1",
  },
  {
    id: "ij",
    title: "SODUKO",
    description: "A word game",
    src: "img/soduko,jpeg",
    group: "Financial Literacy",
    level: "Key Stage 2",
  },
];

const App = () => {
  return (
    <BoxContainer>
      <SearchDisplay items={DUMMY_RESULTS} />
    </BoxContainer>
  );
};

export default App;
