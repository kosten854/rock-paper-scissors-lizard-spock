import React, { Component } from "react";
import "./App.css";

class Footer extends Component {
  render() {
    return <footer className="app-footer">Комната "{this.props.text}"</footer>;
  }
}

export default Footer;
