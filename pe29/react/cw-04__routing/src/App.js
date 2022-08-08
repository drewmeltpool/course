import React, {useEffect, useState} from 'react';
import './App.scss';
import {NavLink, Route, Switch} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App(props) {
  const [allEmails, setAllEmails] = useState([]);

  useEffect(() => {
    fetch('/api/emails', {
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(r => r.json())
      .then(data => {
        setAllEmails(data)
      })
  }, []);

  useEffect(() => {
    fetch('products.json', {
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(r => r.json())
      .then(data => {
        console.log('JSON DATA BL!', data);
      })
  }, []);

  if (allEmails.length === 0) {
    return <p>loading</p>
  }

  const folders = Object.keys(allEmails);
  return <>
    <div className="email-client container">
      <nav className={'navigation'}>
        <NavLink to={'/contacts'}>Contacts</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </nav>
      <Sidebar itemsList={folders}/>

      <AppRoutes items={allEmails}/>
    </div>
  </>
}

export default App;
