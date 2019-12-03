import React from "react";
import ReactDOM from "react-dom";

const Sum = ({ a, b }) => a + b;

it("adds two numbers without crashing", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  ReactDOM.render(<Sum a={1} b={2} />, div);

  expect(document.body.textContent).toBe("3");
  // expect(Sum({ a: 1, b: 2 })).toBe(3);

  ReactDOM.unmountComponentAtNode(div);
});
