import React, { Component } from "react";
import Option from "../components/option/Option";
import Question from "../components/question/Question";
import { connect } from "dva";

// 从state中拿到qaa
@connect(({ qaa }) => ({
  qaa
}))
export default class Aqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      A: []
    };
  }
  render() {
    return (
      <div>
        <h1> 答题界面</h1>
        <Question />
      </div>
    );
  }
}
