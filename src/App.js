import "./App.css";
import React, { Fragment } from "react";
import HomePage from "./components/HomePage";
import About from "./components/About";

function App() {
  return (
    <Fragment>
      <HomePage />
      <About />
    </Fragment>
  );
}

export default App;
