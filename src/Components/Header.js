import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return <header className="app-header">Комната "{this.props.text}"</header>;
  }
}

export default Header;
