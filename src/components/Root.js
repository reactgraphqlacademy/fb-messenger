import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { Provider } from '../react-redux/Provider'
import App from './App'
import Login from './Login'
import { getSession } from '../auth'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router >
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route render={props =>
          getSession() ? (
            <App />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }
        />
      </Switch>
    </Router>
  </Provider>
)

export default Root
