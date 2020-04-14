import React from "react";
import RoboPage from "pages";
import "./App.css";
import { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <>
      <RoboPage />
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
}`;

export default App;
