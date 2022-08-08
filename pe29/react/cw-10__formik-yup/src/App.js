import React from "react";
import "./App.scss";
import {useDispatch, useSelector} from "react-redux";
import {actions as counterActions} from "./store/counter/index";
import {actions as authActions, types} from "./store/auth/index";
import {selectors as authSelectors} from "./store/auth/index";
import UncontrolledForm from "./components/AuthForm/UncontrolledForm";
import ControlledForm from "./components/AuthForm/ControlledForm";
import FormikForm from "./components/AuthForm/FormikForm";

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
      <FormikForm/>
      <UncontrolledForm/>
      <ControlledForm/>
    </>
  );
}

export default App;
