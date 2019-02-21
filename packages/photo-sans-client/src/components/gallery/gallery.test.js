import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./gallery";

it("renders without crashing", () => {
  const main = document.createElement("main");
  ReactDOM.render(<Gallery />, main);
  ReactDOM.unmountComponentAtNode(main);
});
