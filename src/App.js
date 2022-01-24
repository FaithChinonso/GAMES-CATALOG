import React from "react";
import SearchDisplay from "./Components/SearchDisplay";
import styled from "styled-components";
import "./App.css";
import JSONDATA from "./DATA.json";

const BoxContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #2e2d2d;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;
const DUMMY_RESULTS = [
  {
    id: "ae",
    GameTitle: "Before and After",
    GameDescription: "Before and After Yr 2 (prefix and suffix)",
    Topic: "Word Works and Spelling",
    Group: "Academic",
    Level: "Key Stage 1",
    Subject: "English",
    GameImage:
      "https://partners.9ijakids.com/index.php/thumbnail?game=Before and After",
  },
  {
    id: "bf",
    GameTitle: "Communication",
    GameDescription: "Communication Yr 2 (different ways we can communicate)",
    Topic: "Social Studies",
    Group: "Academic",
    Level: "Key Stage 1",
    Subject: "Social Studies",
    GameImage:
      "https://partners.9ijakids.com/index.php/thumbnail?game=Communication",
  },
  {
    id: "cg",
    GameTitle: "Kiddiepreneur 101",
    GameDescription: "Kiddiepreneur 101 (Intro to Earning and Spending)",
    Topic: "Financial Literacy",
    Group: "Financial Literacy",
    Level: "Key Stage 2",
    Subject: "Financial Literacy",
    GameImage:
      "https://partners.9ijakids.com/index.php/thumbnail?game=Kiddiepreneur 101",
  },
  {
    id: "dh",
    GameTitle: "Money Matters",
    GameDescription: "Money Matters (Intro to Key Financial Terms)",
    Topic: "Financial Literacy",
    Group: "Financial Literacy",
    Level: "Key Stage 1",
    Subject: "Financial Literacy",
    GameImage:
      "https://partners.9ijakids.com/index.php/thumbnail?game=Money Matters",
  },
  {
    id: "ei",
    GameTitle: "Maths Pop",
    GameDescription:
      "Maths Pop (writing numbers in word, sequencing & ordinal numbers)",
    Topic: "Number Sense",
    Group: "Academic",
    Level: "Key Stage 1",
    Subject: "Mathematics",
    GameImage:
      "https://partners.9ijakids.com/index.php/thumbnail?game=Maths Pop",
  },
  {
    id: "fj",
    GameTitle: "Exploring Life",
    GameDescription: "Exploring Life KS",
    Topic: "Living Things & Non-Living Things",
    Group: "Academic",
    Level: "Key Stage 2",
    Subject: "Science",
    GameImage:
      "https://partners.9ijakids.com/index.php/thumbnail?game=Exploring Life",
  },
  {
    id: "gl",
    GameTitle: "Mathsmania City - Decimals",
    GameDescription: "Mathsmania City - Decimal",
    Topic: "Decimals, Fractions & Percentage",
    Group: "Academic",
    Level: "Key Stage 2",
    Subject: "Mathematics",
    GameImage:
      "https://partners.9ijakids.com/index.php/thumbnail?game=Mathsmania City - Decimals",
  },
];

const App = () => {
  console.log(JSONDATA);
  return (
    <BoxContainer>
      <SearchDisplay items={JSONDATA} />
    </BoxContainer>
  );
};

export default App;
