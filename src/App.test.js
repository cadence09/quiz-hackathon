<<<<<<< HEAD
import React from "react";
import QuizApp from "./components/QuizApp";
let inspect = require("inspect.js");

describe("MyClass", function () {
  it("first unit test", () => {
    inspect(QuizApp).isClass();
  });
});
=======
import { quizData } from './components/quizData';
let inspect = require('inspect.js');


describe('quizData', function() {
  it('checks if file is a JSON object', () =>{
      inspect(quizData).isJSON();
  })
});


describe('MyClass', function() {
  it('first unit test', ()=>{

    inspect(MainQuiz).isClass();
})
  })
>>>>>>> 9b423b1f448a7246486b50ec079e12d72d213f91
