import { quizData } from './components/quizData';
let inspect = require('inspect.js');


describe('quizData', function() {
  it('checks if file is a JSON object', () =>{
      inspect(quizData).isJSON();
  })
});
