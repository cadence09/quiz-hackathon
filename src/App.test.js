import React from "react";
import QuizApp from "./components/QuizApp";
let inspect = require("inspect.js");

describe("MyClass", function () {
  it("first unit test", () => {
    inspect(QuizApp).isClass();
  });
});
