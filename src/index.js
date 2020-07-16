import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import QuizApp from "./components/QuizApp";

function App() {
  return (
    <div className="App">
      <QuizApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
