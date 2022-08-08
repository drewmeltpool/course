import types from "./types";

const reducer = (state = 10, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return ++state;
    case types.COUNTER_DECREMENT:
      return --state;
    default:
      return state
  }
};


export default reducer