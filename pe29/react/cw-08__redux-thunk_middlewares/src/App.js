import React from "react";
import "./App.scss";
import {useDispatch, useSelector} from "react-redux";
import {actions as counterActions} from "./store/counter/index";
import {actions as authActions, types} from "./store/auth/index";
import {selectors as authSelectors} from "./store/auth/index";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const user = useSelector(authSelectors.selectUser);

  const handleLogin = () => {
    const userName = prompt('enter your name');
    dispatch(authActions.loginUserAction(userName))
  };

  return (
    <>
      {!user && <button onClick={handleLogin}>login</button>}
      {user && <> <h1>Tries to understand Redux: {counter}</h1>
        <button onClick={() => dispatch(counterActions.counterIncrAction())}>+</button>
        <button onClick={() => dispatch(counterActions.counterDecrAction())}>-</button>
      </>}
    </>
  );
}

export default App;
