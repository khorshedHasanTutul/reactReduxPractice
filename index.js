const { createStore } = require("redux");

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

const initialCounter = {
  count: 0,
};
const incrementHandler = () => {
  return {
    type: INCREMENT,
  };
};
const decrementHandler = () => {
  return {
    type: DECREMENT,
  };
};
const resetHandler = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementHandler());
store.dispatch(decrementHandler());
store.dispatch(resetHandler());
