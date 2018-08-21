import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './Login'
import { getSession } from '../auth'
// You can use the getSession function above to determine if the user is logged in or not

const Root = () => (
  <Router >
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={App} />
    </Switch>
  </Router>
)

export default Root
