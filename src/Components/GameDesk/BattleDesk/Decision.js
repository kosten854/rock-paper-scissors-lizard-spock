import React, { Component } from "react";
import "./BattleDesk.css";

class Decision extends Component {
  render() {
    const type = this.props.type;
    const name = this.props.name;
    return <img className={`Decision ${type}`} alt="" src={`images/${name}`} />;
  }
}

export default Decision;
