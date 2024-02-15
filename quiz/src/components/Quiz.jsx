import React from "react";
import "./Home.css";

class QuizComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="quiz">
          <h3 id="quiz-heading">Question</h3>

          <p id="questionNumber">1 of 15 </p>
          <p id="question">Which is the only animal that can jump?</p>

          <div className="options">
            <div id="optionA">Dog</div>
            <div id="optionB">Elephant</div>
            <div id="optionC">Goat</div>
            <div id="optionD">Lion</div>
          </div>
          <div className="nagivation">
            <button id="back">Previous</button>
            <button id="reset">Reset</button>
            <button id="exit">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;