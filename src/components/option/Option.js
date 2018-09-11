import React, { Component } from "react";
import styles from "./option.css";

const styleN = {
  verticalAlign: "center",
  border: "1px black solid",
  width: 600,
  height: 40,
  margin: "0 auto",
  borderRadius: 15,
  marginTop: 8
};

const styleS = {
  verticalAlign: "center",
  border: "1px black solid",
  width: 600,
  height: 40,
  margin: "0 auto",
  borderRadius: 15,
  marginTop: 8,
  backgroundColor: "green"
};
export default class Option extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick(key) {
  //   console.log(this.props.option);
  //   this.setState({ selected: !this.state.selected });
  // }
  render() {
    return (
      <div
        onClick={this.handleClick}
        style={this.props.checked ? styleS : styleN}
        onClick={() => this.props.handleClick(this.props.optionKey)}
      >
        <p style={{ textAlign: "center", marginTop: 8 }}>
          {this.props.option}
        </p>
      </div>
    );
  }
}
