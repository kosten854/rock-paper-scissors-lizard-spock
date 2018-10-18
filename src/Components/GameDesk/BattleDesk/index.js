import React, { Component } from "react";
import Decision from "./Decision";
import "./BattleDesk.css";

class BattleDesk extends Component {
  render() {
    return (
      <div className="battle-desk">
        <Decision type="Player" name={this.props.playerChoosenElement} />
        <Decision type="Opposition" name={this.props.result} />
        <Decision type="Opponent" name={this.props.opponentChoosenElement} />
      </div>
    );
  }
}

export default BattleDesk;
