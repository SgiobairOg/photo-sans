import React from "react";
import ReactDOM from "react-dom";
import Photo from "./photo";

it("renders without crashing", () => {
  const main = document.createElement("main");
  ReactDOM.render(<Photo />, main);
  ReactDOM.unmountComponentAtNode(main);
});
