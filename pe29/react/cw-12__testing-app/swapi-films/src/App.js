import './App.css';
import React from 'react';
import Header from './containers/Header'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Films from './pages/Films'
import FilmDescription from './pages/FilmDescription'


function App() {
  
  return (
    <>
      <Header />
        <Switch>

          <Route exact path="/films">
            <Films />
          </Route>
          
          <Route exact path="/films/:filmId">
            <FilmDescription />
          </Route>

          <Redirect exact from='/' to='/films'/>
    
        </Switch>  
        </>

  );
}

export default App;
