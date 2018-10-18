import React, { Component } from "react";
import "./Chat.css";
import { sendMessage } from "../Api";

class Input extends Component {
  state = {
    message: ""
  };
  render() {
    return (
      <div className="Input">
        <input
          className="Input-box"
          onChange={this._handleChange}
          onKeyPress={this._handleKeyPress}
          value={this.state.message}
        />
        <button className="Input-button" onClick={this._handleClick} />
      </div>
    );
  }

  // Send message if keypressed "enter"
  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.setState({
        message: ""
      });
      this.props.sendMessage({ senderName: "me", text: this.state.message });

      sendMessage(this.state.message, this.props.socketId, this.props.room);
    }
  };

  // Fill message
  _handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };
  // Send message when button click
  _handleClick = () => {
    this.setState({
      message: ""
    });
    this.props.sendMessage({ senderName: "me", text: this.state.message });

    sendMessage(this.state.message, this.props.socketId, this.props.room);
  };
}

export default Input;
