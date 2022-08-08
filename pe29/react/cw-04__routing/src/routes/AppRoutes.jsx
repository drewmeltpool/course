import React from 'react';
import {Route, Switch} from "react-router-dom";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Page404 from "../pages/Page404";
import EmailsList from "../components/EmailsList/EmailsList";
import {Redirect} from 'react-router-dom';

const AppRoutes = ({items}) => {
  // const emailsRoutes = Object.keys(items).map((folder, k) => <Route path={`/${folder.toLowerCase()}`}>
  //   <EmailsList list={items[folder]}/>
  // </Route>);
  return (
    <Switch>
      {/*{emailsRoutes}*/}
      <Route path={'/inbox'} >
        <EmailsList list={items.inbox}/>
      </Route>
      <Route path={'/sent'} >
        <EmailsList list={items.sent}/>
      </Route>
      <Route path={'/draft'} >
        <EmailsList list={items.draft}/>
      </Route>
      <Route path={'/spam'} render={(routeProps) => <EmailsList list={items.spam} {...routeProps}/>}/>
      <Route path={'/contacts'} component={Contacts}/>
      <Route path={'/about'} component={About}/>
      <Route path={'/'} render={() => <Redirect to={'/inbox'}/>} exact />
      <Route path={"*"} component={Page404}/>
    </Switch>
  );
};

export default AppRoutes;