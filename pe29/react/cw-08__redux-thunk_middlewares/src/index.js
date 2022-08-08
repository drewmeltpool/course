import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import counterReducer from './store/counter/index.js'
import authReducer from './store/auth/index.js'

const myMiddleware = ({dispatch, getState}) => (next) => (action) => {
  console.log(action);
  if (action.type.toLowerCase().includes('login') && !localStorage.getItem('token')) {
    throw new Error('You are not permitted to do this!')
  }

  return next(action)
};

const store = createStore(
  combineReducers({
    counter: counterReducer,
    auth: authReducer
  }),
  composeWithDevTools(
    applyMiddleware(myMiddleware)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
