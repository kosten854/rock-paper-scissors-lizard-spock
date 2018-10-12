import React, { Component } from "react";
import Decision from "./Decision";
import "./BattleDesk.css";

class BattleDesk extends Component {
  render() {
    console.log("-------", this.props);
    return (
      <div className="BattleDesk">
        <Decision type="Player" name={this.props.playerChoosenElement} />
        <Decision type="Opposition" name="vs.svg" />
        <Decision type="Opponent" name="lizard.svg" />
      </div>
    );
  }
  choosen = playerName => {
    console.log("done ", playerName);
    // this.props.playerName = playerName;
    // this.setState(this.state);
  };
}

export default BattleDesk;
