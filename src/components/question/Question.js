import React, { Component } from "react";
import { Radio, Card, Button, Modal } from "antd";
import Option from "../option/Option";
import { connect } from "dva";

const RadioGroup = Radio.Group;
@connect(state => state.qaa)
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {
        // qkey: null,
        // qkey2: null
      },
      num: this.props.Q.length,
      modal1Visible: false,
      grade: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(optionKey) {
    console.log(optionKey);
    let answer = { ...this.state.checked };
    answer[optionKey[0]] = optionKey[1];
    this.setState({ checked: answer });
  }

  handleSubmit() {
    console.log(this.state);
    let count = 0;
    let length = this.state.num;
    console.log(length);
    for (let index = 0; index < length; index++) {
      console.log("state里的东西", this.state.checked[index]);
      console.log("Q里面的东西：", this.props.Q[index].answer);
      if (this.state.checked[index] == this.props.Q[index].answer) {
        count++;
      }
    }
    console.log(count);
    let grade = 100 / this.props.Q.length * count;
    this.setState({ grade: grade });
    this.setModal1Visible(true);
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  render() {
    return (
      <div>
        {this.props.Q.map(({ describe, option }, qKey) => {
          return (
            <Card
              title={describe}
              key={qKey}
              style={{ width: 800, marginTop: 30 }}
            >
              {option.map((item, optionKey) => {
                return (
                  <Option
                    key={optionKey}
                    optionKey={[qKey, optionKey]}
                    option={item}
                    checked={this.state.checked[qKey] == optionKey}
                    handleClick={this.handleClick}
                  />
                );
              })}
            </Card>
          );
        })}
        <Button type="primary" onClick={this.handleSubmit} block>
          提交
        </Button>
        <Modal
          title="分数"
          style={{ top: 20 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <h1>
            你的分数是:{this.state.grade}
          </h1>
        </Modal>
      </div>
    );
  }
}
