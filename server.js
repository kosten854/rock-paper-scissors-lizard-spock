"use strict;";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { origins: "*:*" });
const uid = require("uid");
const elements = require("./elements");
const { Game } = require("./game");

const Rooms = {};

app.use(express.static(__dirname + "/build"));

app.get("/", function(req, res, next) {
  res.sendFile(__dirname + "/build/index.html");
});
app.get("/:id", function(req, res, next) {
  res.sendFile(__dirname + "/build/index.html");
});

io.on("connection", async socket => {
  console.log("Client Successfully Connected\n");

  // Send socket id
  socket.emit("getId", socket.id);

  let room = null;

  // Create new room
  socket.on("newRoom", () => {
    room = uid();
    // Join a group
    socket.join(room);

    // Create room
    socket.emit("getRoom", room);
    Rooms[room] = new Game();
  });

  //connect room
  socket.on("connectRoom", room => {
    // If room overflow
    if (
      !!socket.adapter.rooms[room] &&
      socket.adapter.rooms[room].length === 2
    ) {
      room = uid();
    }

    //connect room
    socket.join(room);

    // Send room to client
    socket.emit("getRoom", room);
    console.log(socket.adapter.rooms[room].sockets);
    for (let key in socket.adapter.rooms[room].sockets) {
      // console.log(key);
      io.to(room).emit("getOpponent", key);
    }

    // Create room
    Rooms[room] = new Game();
  });

  // Send message
  socket.on("sendMessage", async (text, id, room) => {
    // Send message to room
    socket.broadcast.to(room).emit("getMessage", text, id);
  });

  // Set element
  socket.on("setElement", async (element, room) => {
    // set element to room
    Rooms[room].SetElement(socket.id, element);

    // Get winner if not null
    let winner = Rooms[room].GetWinner();
    if (winner !== null) {
      // Send winner to client
      io.to(room).emit("getWinner", winner, Rooms[room].players);
      Rooms[room].NewGame();
    }
  });

  // Start new game in tha room
  socket.on("startNewGame", room => {
    socket.broadcast.to(room).emit("setGame", true);
  });

  // notyfy about disconnect
  socket.on("disconnect", () => {
    console.log(socket.id, " was disc");
    io.emit("disconnection", socket.id);
  });
});

server.listen(4200);
