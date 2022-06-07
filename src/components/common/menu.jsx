import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineRollback } from "react-icons/ai";

const Menu = ({onMenuClick}) => {
  return (
    <>
      <div className="menu">
        <AiOutlineRollback onClick={onMenuClick} className="navbar__icon--exit" />
        <div className="menu__container">
          <Link className="menu__link" to="/">
            Home
          </Link>
          <Link className="menu__link" to="/">
            About
          </Link>
          <Link className="menu__link" to="/">
            Services
          </Link>
          <Link className="menu__link" to="/">
            Contact
          </Link>
          <div className="menu__about">
            <p>0 471 52 04 86</p>
            <p> tk.services.bruxelles@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
