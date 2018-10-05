const chose = ["是", "否", "我也不知道怎么回事", "可能是这样吧"];
const randomQuestion = ["you", "me", "agg", "fafa"];

const forkData = num => {
  let Q = [];
  // {
  //   describe: "你喜欢打球吗",
  //   option: ["yes", "no", "中立"],
  //   answer: 0
  // },
  for (let i = 0; i < num; i++) {
    let option = [];
    let cNum = Math.floor(Math.random() * 4 + 1);
    for (let j = 0; j < cNum; j++) {
      option.push(chose[Math.floor(Math.random() * 4)]);
    }
    let obj = {
      describe: randomQuestion[Math.floor(Math.random() * 4)],
      option: option,
      answer: Math.floor(Math.random() * 4)
    };
    Q.push(JSON.parse(JSON.stringify(obj)));
  }
  console.log(Q);
  return JSON.stringify(Q);
};

module.exports = forkData;
