import React, { Component } from "react";
import "./App.css";
import GameDesk from "./GameDesk";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameDesk mytext={"Hello World!"} />
        <Footer />
      </div>
    );
  }
}

export default App;
