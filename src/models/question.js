/*
请求的json格式
{
    num:{
    descript: String
    option:["yes","no"]
    answer: String
    }
}

*/

export default {
  namespace: "qaa",
  state: {
    Q: [
      {
        describe: "你喜欢打球吗",
        option: ["yes", "no", "中立"],
        answer: 0
      },
      {
        describe: "你有别的爱好吗",
        option: ["有", "无"],
        answer: 0
      }
    ],
    B: {
      hi: "不想出现B"
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
