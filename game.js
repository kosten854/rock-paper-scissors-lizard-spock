"use strict;";
const map = require("./map");

module.exports.Game = class Game {
  constructor() {
    this.players = {};
  }

  SetElement(player, element) {
    this.players[player] = element;
  }

  NewGame() {
    this.players = {};
  }

  GetWinner() {
    let keys = Object.keys(this.players);
    if (keys.length == 2) {
      let result = map.MAP[this.players[keys[0]]][this.players[keys[1]]];
      if (result > 0) return keys[0];
      else if (result < 0) return keys[1];
      else return "ничья";
    } else return null;
  }
};
