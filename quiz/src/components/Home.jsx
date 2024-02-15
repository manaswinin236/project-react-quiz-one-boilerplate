import React from "react";
import "./Home.css";

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="home">
        <h3 id="home-heading">Quiz App</h3>
        <button id="play">Play</button>
      </div>
    );
  }
}

export default HomeComponent;