import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/hero";

import "./App.css";
import NavBar from "./components/navBar";


class App extends Component {
  render() {
    return (
      <>
       <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Hero />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
