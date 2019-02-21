import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router, Route, NavLink } from "react-router-dom";
import Nav from "./nav";

it("renders without crashing", () => {
  const nav = document.createElement("nav");
  ReactDOM.render(
    <Router>
      <Nav />
    </Router>,
    nav
  );
  ReactDOM.unmountComponentAtNode(nav);
});
