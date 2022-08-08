import types from "./types";

const initialAuth = null;
export default (store = initialAuth, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {name: action.payload};
    default:
      return store
  }
}