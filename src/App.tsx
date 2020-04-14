import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import Router from "route";

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  html,
  body,
  #root {
    height: 100vh;
    font-size:1rem;
}`;

export default App;
