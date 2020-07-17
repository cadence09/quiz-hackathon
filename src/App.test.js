import QuizApp from "./components/QuizApp";
import { questionsAndAnswers } from "./components/questionsAndAnswers";
let inspect = require("inspect.js");


describe("questionsAndAnswers", function () {
  it("checks if file is a JSON object", () => {
    inspect(questionsAndAnswers).isJSON();
  });
});


describe('MyClass', function() {
  it('first unit test', ()=>{

    inspect(MainQuiz).isClass();
})
  })
