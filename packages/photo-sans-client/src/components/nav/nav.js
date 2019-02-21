import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink
          exact
          to="/"
          className="nav__link"
          activeClassName="nav__link--hidden"
        >
          gallery
        </NavLink>
        <NavLink
          exact
          to="/about"
          className="nav__link"
          activeClassName="nav__link--hidden"
        >
          about
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
