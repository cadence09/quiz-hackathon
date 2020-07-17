<<<<<<< HEAD
import { quizData } from './components/quizData';
let inspect = require('inspect.js');
=======
// import React from "react";
import QuizApp from "./components/QuizApp";
import { questionsAndAnswers } from "./components/questionsAndAnswers";
let inspect = require("inspect.js");

describe("MyClass", function () {
  it("first unit test", () => {
    inspect(QuizApp).isClass();
  });
});
>>>>>>> 12e0129ccb90138f748c8bbcf8ee5e5027db205d

describe("questionsAndAnswers", function () {
  it("checks if file is a JSON object", () => {
    inspect(questionsAndAnswers).isJSON();
  });
});


<<<<<<< HEAD
describe('MyClass', function() {
  it('first unit test', ()=>{

    inspect(MainQuiz).isClass();
})
  })
=======
>>>>>>> 12e0129ccb90138f748c8bbcf8ee5e5027db205d
