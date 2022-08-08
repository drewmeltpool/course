import types from './types'

const loginUserAction = (name) => ({
  type: types.LOGIN_USER,
  payload: name
});

export default {
  loginUserAction
}