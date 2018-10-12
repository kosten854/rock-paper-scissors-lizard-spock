import React, { Component } from "react";
import "./ChooseDesk.css";
import Element from "./Element";

class ChooseDesk extends Component {
  render() {
    const choosenElement = this.props.choosenElement;
    return (
      <div className="ChooseDesk">
        <Element name="stone.svg" choosenElement={choosenElement} />
        <Element name="sic.svg" choosenElement={choosenElement} />
        <Element name="paper.svg" choosenElement={choosenElement} />
        <Element name="lizard.svg" choosenElement={choosenElement} />
        <Element name="spock.svg" choosenElement={choosenElement} />
      </div>
    );
  }
}

export default ChooseDesk;
