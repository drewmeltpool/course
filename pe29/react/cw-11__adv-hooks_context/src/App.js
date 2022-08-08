import React, {useCallback, useEffect, useMemo, useReducer, useState} from "react";
import "./App.scss";
import UncontrolledForm from "./components/AuthForm/UncontrolledForm";
import ControlledForm from "./components/AuthForm/ControlledForm";
import FormikForm from "./components/AuthForm/FormikForm";
import Body from "./components/Body";
import emailsReducer from "./reducers/emailsReducer";
import ThemeContext, {themes} from "./context/themeContext";

function App() {
  const [counter, setCounter] = useState(0);
  const [emails, dispatch] = useReducer(emailsReducer, []);

  console.log('emails tolko values - ', Object.values(emails));
  console.log('emails flatten - ', Object.values(emails).flat(1));

  const emailsItems = Object.values(emails).flat(1).map((email, ind) => <h2 key={ind}>{email.subject}</h2>);

  useEffect(() => {
    fetch('/emails.json')
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: 'SET_EMAILS',
          payload: data
        })
      })
  }, []);

  // const fetchEmails = () => {
  //   console.log('Fetching emails...');
  //   setTimeout(() => console.log('email fetched'))
  // }
  const fetchEmails = useCallback(() => {
    console.log('Fetching emails...');
    setTimeout(() => console.log('email fetched'))
  }, []);

  // const items = ['Item 1', 'Item 2'];
  // const items = useMemo(() => ['Item 1', 'Item 2'], []);

  // const incrementCounter = () => {
  //   setCounter(c => c + 1);
  // };

  /**
   * TODO: create custom hook useToggle
   * it should toggle the initial value and return an array with:
   * 1 - current value
   * 2 - function that makes toggle
   * 3 - function that forces current value changing
   */
  /**
   * TODO: create custom hook useWinSize
   * it should return sizes of a current screen
   * and change the depending of window resize event
   * if you would add event listener inside it - consider to remove it after component unmounts
   */
  const itemsToTransfer = useMemo(() => Object.values(emails).flat(1), [emails]);
  return (
    <>
      {/*{emailsItems}*/}
      {/*<FormikForm/>*/}
      <h1>count is - {counter}</h1>

      <ThemeContext.Provider value={themes.dark}>
        <Body title='Hello world' items={itemsToTransfer} fetchEmails={fetchEmails}/>
        <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
      </ThemeContext.Provider>

      <ThemeContext.Provider value={themes.light}>
        <Body title='Hello world' items={itemsToTransfer} fetchEmails={fetchEmails}/>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
