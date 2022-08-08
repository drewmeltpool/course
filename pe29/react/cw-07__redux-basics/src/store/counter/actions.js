import types from "./types";

const counterIncrAction = () => ({
  type: types.COUNTER_INCREMENT
});
const counterDecrAction = () => ({
  type: types.COUNTER_DECREMENT
});

export default {
  counterIncrAction,
  counterDecrAction
}