import "./App.css";
import React, { Fragment } from "react";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Product from "./components/Products";
import Contact from "./components/Contact";

function App() {
  return (
    <Fragment>
      <HomePage />
      <About />
      <Product />
      <Contact />
    </Fragment>
  );
}

export default App;
