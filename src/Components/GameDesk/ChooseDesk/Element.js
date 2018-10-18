import React, { Component } from "react";

import "./ChooseDesk.css";

class Element extends Component {
  render() {
    const name = this.props.name;
    return (
      <img
        className="element__img"
        src={`images/${name}`}
        alt="click"
        onClick={this._handleClick}
      />
    );
  }
  // When element was selected
  _handleClick = () => {
    console.log(this.props.name);
    this.props.choosenElement(this.props.name);
  };
}

export default Element;
