import query from "../services/example";

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
    ]
  },

  effects: {
    *Qdata({ payload: todo }, { call, put }) {
      const result = yield call(query);
      yield put({
        type: "save",
        payload: {
          data: result.data
        }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  reducers: {
    save(state, action) {
      console.log(action.payload);
      return { Q: [...action.payload.data] };
    }
  }
};
