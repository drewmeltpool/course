const selectUser = state => state.auth;
const selectUserName = state => state.auth.name;

export default {
  selectUser,
  selectUserName
}