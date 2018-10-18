import React, { Component } from "react";
import BattleDesk from "./BattleDesk";
import ChooseDesk from "./ChooseDesk";
import "./GameDesk.css";
import elements from "./elements";
import Waiting from "./Waiting";
import {
  setElement,
  getWinner,
  waitOpponent,
  setGame,
  startNewGame,
  disconnect
} from "../Api";

class GemeDesk extends Component {
  state = {
    // Getting the winner
    winner: getWinner((result, players) => {
      this.versus(result, players);
    }),

    // Waiting the opponent
    waitOpponent: waitOpponent(opponentId => {
      if (opponentId !== this.props.socketId)
        this.setState({ waiting: false, opponentId: opponentId });
    }),

    // Start new game
    startNewGame: setGame(game => {
      if (game) this.newGame();
    }),

    // Opponent was disconnected
    socketDisconnect: disconnect(id => {
      console.log("disconnect ", id);
      if (id === this.state.opponentId) {
        this.setState({
          playerChoosenElement: "waiting.svg",
          opponentChoosenElement: "waiting.svg",
          result: "vs.svg",
          waiting: true,
          opponentId: null,
          playing: true
        });
      }
    }),

    playerChoosenElement: "waiting.svg",
    opponentChoosenElement: "waiting.svg",
    result: "vs.svg",
    waiting: true,
    opponentId: null,
    playing: true
  };
  render() {
    // When we expect to connect an opponent
    let waiting = this.state.waiting && <Waiting room={this.props.room} />;

    // When the opponent connected
    let battleDesk = !this.state.waiting && (
      <BattleDesk
        playerChoosenElement={this.state.playerChoosenElement}
        opponentChoosenElement={this.state.opponentChoosenElement}
        result={this.state.result}
      />
    );
    let chooseDesk = !this.state.waiting &&
      this.state.playing && <ChooseDesk choosenElement={this.choosenElement} />;

    // When the game is over
    let newGame = !this.state.waiting &&
      !this.state.playing && (
        <button
          className="new-game__button"
          onClick={() => {
            this.newGame();
            startNewGame(this.props.room);
          }}
        >
          <h1>New Game!</h1>
        </button>
      );
    return (
      <div className="game-desk">
        {waiting}
        {battleDesk}
        {chooseDesk}
        {newGame}
      </div>
    );
  }
  // choosen Element
  choosenElement = playerChoosenElement => {
    let element =
      elements[
        playerChoosenElement
          .substring(0, playerChoosenElement.length - 4)
          .toUpperCase()
      ];
    setElement(element, this.props.room);
    this.setState({ playerChoosenElement });
  };
  // Determination of the winner
  versus = (result, players) => {
    let state = {};
    if (result === "ничья") state.result = "scale.svg";
    else if (result === this.props.socketId) state.result = "win.svg";
    else state.result = "lose.svg";
    let ids = Object.keys(players);

    // Opponent element.
    let element;
    ids.forEach(id => {
      if (id !== this.props.socketId) element = players[id];
    });
    for (let key in elements) {
      if (element === elements[key])
        state.opponentChoosenElement = key.toLowerCase() + ".svg";
    }

    // Game is over
    state.playing = false;
    this.setState(state);
  };
  newGame = () => {
    //set default state
    let state = {
      playerChoosenElement: "waiting.svg",
      opponentChoosenElement: "waiting.svg",
      result: "vs.svg",
      playing: true
    };
    this.setState(state);
  };
}

export default GemeDesk;
