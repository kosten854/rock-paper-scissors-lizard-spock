import React, { Component } from "react";
import BattleDesk from "./BattleDesk";
import ChooseDesk from "./ChooseDesk";
import "./GameDesk.css";

class GemeDesk extends Component {
  state = {
    playerChoosenElement: null
  };
  render() {
    return (
      <div className="GameDesk">
        <BattleDesk playerChoosenElement={this.state.playerChoosenElement} />
        <ChooseDesk choosenElement={this.choosenElement} />
      </div>
    );
  }
  choosenElement = playerChoosenElement => {
    console.log("-------", playerChoosenElement);
    this.setState({ playerChoosenElement });
  };
}

export default GemeDesk;
