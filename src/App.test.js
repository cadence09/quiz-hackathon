import React from 'react';
import MainQuiz from "./components/MainQuiz"
let inspect=require('inspect.js')


describe('MyClass', function() {
  it('first unit test', ()=>{
    
    inspect(MainQuiz).isClass();
})
  })
  
