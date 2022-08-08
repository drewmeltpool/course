import React from "react";
import "./App.scss";
import {connect} from "react-redux";
import {actions as counterActions} from "./store/counter/index";
import {actions as authActions} from "./store/auth/index";

function App({counterValue, user, setUser, incrementCounter, decrementCounter}) {
  const handleLogin = () => {
    const userName = prompt('enter your name');
    setUser(userName)
  };

  return (
    <>
      <button onClick={handleLogin}>login</button>
      {user && <> <h1>Tries to understand Redux: {counterValue}</h1>
        <button onClick={() => incrementCounter()}>+</button>
        <button onClick={() => decrementCounter()}>-</button>
      </>}
    </>
  );
}

const mapStateToProps = (state) => ({
  counterValue: state.counter,
  user: state.auth
});
const mapDispatchToProps = (dispatch) => ({
  setUser: (name) => dispatch(authActions.loginUserAction(name)),
  incrementCounter: () => dispatch(counterActions.counterIncrAction()),
  decrementCounter: () => dispatch(counterActions.counterDecrAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
