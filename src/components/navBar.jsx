import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import "../style/navBar.css";

class NavBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="navbar">
        <AiOutlineMenu className="navbar__icon" />
      </div>
    );
  }
}

export default NavBar;
