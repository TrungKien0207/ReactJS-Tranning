const { createSlice } = require("@reduxjs/toolkit");

const counterSlide = createSlice({
  name: 'counter',
  initialState: 0, //gia tri ban dau
  reducers: {
    increase(state) {
      return state + 1;
    },

    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlide;
export const { increase, decrease } = actions; //name export
export default reducer; //default export