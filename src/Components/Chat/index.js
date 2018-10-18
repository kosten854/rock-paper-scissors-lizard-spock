import React, { Component } from "react";
import "./Chat.css";
import Input from "./Input";
import MessageList from "./MessageList";
import { getMessage } from "../Api";

class Chat extends Component {
  state = {
    // All message in the room
    messageList: [],

    // Getting a new message
    message: getMessage(text => {
      this.sendMessage({ senderName: "opponent", text: text });
    })
  };
  render() {
    return (
      <div className="chat">
        <MessageList messages={this.state.messageList} />
        <Input
          sendMessage={this.sendMessage}
          socketId={this.state.id}
          room={this.props.room}
        />
      </div>
    );
  }
  // Add message in the message list
  sendMessage = message => {
    let messageList = this.state.messageList.slice();
    messageList.push(message);

    this.setState({ messageList });
  };
}

export default Chat;
