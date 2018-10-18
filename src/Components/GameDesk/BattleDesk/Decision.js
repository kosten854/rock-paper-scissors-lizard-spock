import React, { Component } from "react";
import "./BattleDesk.css";

class Decision extends Component {
  render() {
    const name = this.props.name;
    let type = this.props.type;
    if (name === "waiting.svg") type += " waiting-icon";
    return <img className={`decision ${type}`} alt="" src={`images/${name}`} />;
  }
}

export default Decision;
