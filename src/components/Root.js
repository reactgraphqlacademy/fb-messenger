import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

const Root = () => (
  <Router >
    <Route path="/" component={App} />
  </Router>
)

export default Root
