import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect, Router  } from "react-router-dom";
import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();

import Architect from './views/Architect';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route component={Architect} exact path="/" />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    );
  }
}
// <Route component={UnderDevelopment} exact path="/under-development" />
// <Route component={NotFound} exact path="/not-found" />
// <Redirect exact from="/" to='/sign-in' />

export default App;
