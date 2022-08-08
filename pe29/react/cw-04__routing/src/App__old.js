import React, {useEffect, useState} from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import EmailsList from "./components/EmailsList/EmailsList";
import Title from "./components/Title/Title";
import ChangeNameBtn from "./components/ChangeNameBtn/ChangeNameBtn";
import './App.scss';
import Icons from "./utils/Icons/Icons";

function App(props) {
  const [users, setUsers] = useState([]);
  const [activeFolder, setActiveFolder] = useState("inbox");
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
        console.log('JSON DATA BL!',data);
      })

    fetch('/api/users', {
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(r => r.json())
      .then(data => {
        setUsers(data);
      })
  }, []);

  if (allEmails.length === 0) {
    return <p>loading</p>
  }

  const handleRegister = () => {
    const login = prompt('enter login');
    const pass = prompt('enter password');

    fetch('/api/users', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({login, password: pass})
    }).then(r => r.json())
      .then(data => {
        const newUsers = [...users];
        newUsers.push(data);
        setUsers(newUsers);
      })
  };
  const folders = Object.keys(allEmails);
  const usersList = users.map(({id, login}) => <li key={id}>{login}</li>);

  return (
    <div className="email-client container">
      <ul>
        <button onClick={handleRegister}>register</button>
        {usersList}
      </ul>
      <Sidebar itemsList={folders} activeFolder={activeFolder}
               setActiveFolder={newActive => setActiveFolder(newActive)}/>
      <EmailsList list={allEmails[activeFolder]}/>
      {/*<Title name={name}/>*/}
      {/*<ChangeNameBtn changeNameState={name => this.setState({name})}/>*/}
    </div>
  );
}

export default App;
