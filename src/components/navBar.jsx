import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import "../style/navBar.css";
import Menu from "./common/menu";

class NavBar extends React.Component {
  state = {
    menuVisibility: false,
  };

  handleMenuVisibility = () => {
    this.setState({ menuVisibility: !this.state.menuVisibility });
  };

  render() {
    const { menuVisibility } = this.state;
    return (
      <div className="navbar">
        {!menuVisibility && (
          <AiOutlineMenu
            onClick={this.handleMenuVisibility}
            className="navbar__icon"
          />
        )}
        {menuVisibility && <Menu onMenuClick={this.handleMenuVisibility}/>}
      </div>
    );
  }
}

export default NavBar;
