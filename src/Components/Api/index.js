import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:4200/");

const connect = cb => {
  socket.on("getId", id => {
    // console.log("id: ", id);

    let room = document.location.pathname.substr(1);

    // Create new room
    if (room.length === 0) {
      socket.emit("newRoom");
    } else {
      socket.emit("connectRoom", room);
    }
    socket.on("getRoom", room => {
      // console.log("room: ", room);
      cb(id, room);
    });
  });
};

// Get message
const getMessage = cb => {
  socket.on("getMessage", text => {
    // console.log(text);
    cb(text);
  });
};

// Send message to the room
const sendMessage = (message, id, room) => {
  socket.emit("sendMessage", message, id, room);
};

// Set selection element to the room
const setElement = (element, room) => {
  socket.emit("setElement", element, room);
};

// Get a winner
const getWinner = cb => {
  socket.on("getWinner", (result, players) => {
    console.log("winner: ", result);
    cb(result, players);
  });
};

// Waiting opponent
const waitOpponent = cb => {
  socket.on("getOpponent", id => {
    cb(id);
  });
};

// Start playing
const setGame = cb => {
  socket.on("setGame", game => {
    cb(game);
  });
};

// Create new game
const startNewGame = room => {
  socket.emit("startNewGame", room);
};

// When opponent was disconnection
const disconnect = cb => {
  socket.on("disconnection", id => {
    console.log("____________", id);
    cb(id);
  });
};

export {
  connect,
  getMessage,
  sendMessage,
  setElement,
  getWinner,
  waitOpponent,
  setGame,
  startNewGame,
  disconnect
};
