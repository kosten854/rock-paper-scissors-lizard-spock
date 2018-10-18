import React, { Component } from "react";
import "./GameDesk.css";
import { connect } from "tls";

class Waiting extends Component {
  state = {};
  render() {
    // Url for opponent connection
    let url = `${document.location.origin}/${this.props.room}`;
    return (
      <div className="waiting">
        <img className="waiting-icon" src="images/waiting.svg" alt="" />
        <p>Ожидание соперника...</p>
        <p>Отправьте другу эту ссылку:</p>
        <a className="link" href={url}>
          {url}
        </a>
      </div>
    );
  }
}

export default Waiting;
