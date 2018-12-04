import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import App from "./App";
import Login from "./Login";
import { getSession } from "../auth";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route
        render={props => (getSession() ? <App /> : <Redirect to="/login" />)}
      />
    </Switch>
  </Router>
);

export default Root;
