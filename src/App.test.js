// import React from "react";
import QuizApp from "./components/QuizApp";
import { questionsAndAnswers } from "./components/questionsAndAnswers";
let inspect = require("inspect.js");

describe("MyClass", function () {
  it("first unit test", () => {
    inspect(QuizApp).isClass();
  });
});

describe("questionsAndAnswers", function () {
  it("checks if file is a JSON object", () => {
    inspect(questionsAndAnswers).isJSON();
  });
});


