import React, { Component } from "react";
import "./App.css";
import GameDesk from "./GameDesk";
import Header from "./Header";
// import Footer from "./Footer";
import Chat from "./Chat";
import { connect } from "./Api";

class App extends Component {
  state = {
    socketConnect: connect((id, room) => {
      console.log("id: ", id);
      console.log("room: ", room);
      this.setState({ id, room });
    }),
    // newId: newId(),
    id: null,
    room: null
  };

  render() {
    return (
      <div className="app">
        <Header text={this.state.room} />
        <GameDesk socketId={this.state.id} room={this.state.room} />
        <Chat socketId={this.state.id} room={this.state.room} />
        {/* <Footer text={this.state.room} /> */}
      </div>
    );
  }
  createRoom = () => {
    let room = window.location.pathname.substring(1);
    return room;
  };
}

export default App;
