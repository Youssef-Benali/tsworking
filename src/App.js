import React, { Component } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Services from "./components/services";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <Services />
      </>
    );
  }
}

export default App;
