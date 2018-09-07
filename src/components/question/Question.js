import React, { Component } from "react";
import { Radio, Card } from "antd";
import Option from "../option/Option";
import { connect } from "dva";

const RadioGroup = Radio.Group;
@connect(qaa => qaa)
export default class Question extends Component {
  render() {
    console.log(this.props);
    console.log(typeof this.props.qaa);
    return (
      <div>
        {this.props.qaa.map(({ describe, option }, key) => {
          console.log(describe, option);
          return (
            <Card
              title={describe}
              //   extra={<a href="#">a</a>}
              key={key}
              style={{ width: 800, marginTop: 30 }}
            >
              {option.map((item, key) => {
                return (
                  <Option key={key} option={item} style={{ marginTop: 20 }} />
                );
              })}
            </Card>
          );
        })}
        {/* {this.props.qaa.map(({ describe, option }, key) => {
          <Card
            title="Card title"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            {console.log(key, describe)}
            <p>
              {describe[key]}
            </p>
            <Option key={key} option={option[key]} />
          </Card>;
        })} */}
        {/* <Card>
          <p>
            {this.props.question}
          </p>
          <RadioGroup>
            <Option option={"答题"} />
          </RadioGroup>
        </Card> */}
      </div>
    );
  }
}
