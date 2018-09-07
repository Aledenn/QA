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
  state: [
    {
      describe: "你喜欢打球吗",
      option: ["yes", "no"],
      answer: "yes"
    },

    {
      describe: "你有别的爱好吗",
      option: ["有", "无"],
      answer: "有"
    }
  ],

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
