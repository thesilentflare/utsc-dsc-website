import React, { Component } from "react";
import styles from "./EventBox.module.css";

class EventBox extends Component {
  render() {
    return (
      <div className={styles.EventBox}>
        <h5>{this.props.title}</h5>
        <img src={this.props.img} alt=""></img>
        <h5>{this.props.date}</h5>
      </div>
    );
  }
}

export default EventBox;
