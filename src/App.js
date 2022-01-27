import React from "react";
import SearchDisplay from "./Components/SearchDisplay";
import styled from "styled-components";
import "./App.css";
import JSONDATA from "./DATA.json";

const BoxContainer = styled.div`
  width: 100%;
  min-width: 100vh;
  overflow: hidden;
  min-height: 100vh;
  background-color: #2e2d2d;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
  justify-content: center;
`;
const App = () => {
  console.log(JSONDATA);
  return (
    <BoxContainer>
      <SearchDisplay items={JSONDATA} />
    </BoxContainer>
  );
};

export default App;
