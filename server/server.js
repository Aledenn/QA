let express = require("express");
let app = express();
let forkData = require("./fork");
const Q = [
  {
    describe: "你喜欢打人吗",
    option: ["yes", "no", "中立"],
    answer: 1
  },
  {
    describe: "你有别的爱好吗",
    option: ["无", "有"],
    answer: 1
  }
];

app.get("/", (req, res) => {
  res.send({ code: 0 });
});

// app.get("/:Qid", (req, res) => {});

app.get("/rQ", (req, res) => {
  console.log("收到请求");
  // res.send(JSON.stringify(Q));
  res.send(forkData(10));
});

app.listen(3000, (req, res) => {
  console.log("应用实例，返回地址为http://localhost:3000");
});
