import React from "react";
import ReactDOM from "react-dom";
import About from "./about";

it("renders without crashing", () => {
  const main = document.createElement("main");
  ReactDOM.render(<About />, main);
  ReactDOM.unmountComponentAtNode(main);
});
