import React, { Component } from "react";
import "./Chat.css";
import { animateScroll } from "react-scroll";
import uid from "uid";

class MessageList extends Component {
  render() {
    //start scroll animation
    this.scrollToBottom();
    return (
      <ul className="message-list" id="options-holder">
        {this.props.messages.map(message => {
          return (
            <li className="message__li" key={uid()}>
              <div className={`sender-name ${message.senderName}-name`}>
                {message.senderName}
              </div>
              <div className={`text-message ${message.senderName}-text`}>
                {message.text}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  // Scroll animation
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "options-holder"
    });
  }
}

export default MessageList;
