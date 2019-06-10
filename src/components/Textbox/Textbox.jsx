import React, { Component } from "react";
import "./Textbox.css";

class Textbox extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="text noselect">
          {this.props.text.split("/n").map((item, key) => {
            return (
              <span id={key} key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Textbox;
