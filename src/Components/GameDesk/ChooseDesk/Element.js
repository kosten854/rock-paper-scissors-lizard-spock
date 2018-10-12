import React, { Component } from "react";
// import BattleDesk from "../BattleDesk";

import "./ChooseDesk.css";

class Element extends Component {
  state = {
    isOpen: true
  };
  render() {
    const name = this.props.name;
    return (
      <img
        className="Element"
        src={`images/${name}`}
        alt="click"
        onClick={this.handleClick}
      />
    );
  }
  handleClick = () => {
    console.log(this.props.name);
    this.props.choosenElement(this.props.name);

    // BattleDesk.choosen(this.props.name);
  };
}

export default Element;
