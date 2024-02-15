import React from "react";

class ResultComponent extends React.Component {
  render() {
    return (
      <div className="result">
        <h2>Result </h2>
        <div className="result-box">
          <h3 id="result-quote">You need more Patience!</h3>
          <h1 id="score">Your score is 20%</h1>

          <div className="sub-result">
            <h6 id="calc">Total Number of Questions</h6>
            <h6>15</h6>
          </div>

          <div className="sub-result">
            <h6 id="calc">Number of attempted questions</h6>
            <h6>9</h6>
          </div>

          <div className="sub-result">
            <h6 id="calc">Number of correct answers</h6>
            <h6>3</h6>
          </div>

          <div className="sub-result">
            <h6 id="calc">Number of wrong answers</h6>
            <h6>6</h6>
          </div>
        </div>

        <div className="navigators">
          <button id="play-again"> Play Again</button>
          <button id="home">Back to Home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;