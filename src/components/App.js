import React from "react"
import { Redirect, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import TopBar from "./Layout/TopBar"
import Messenger from "./Messenger"
import Footer from "./Layout/Footer"

const App = () => (
  <div className="app">
    <TopBar
      user={{ name: 'Alex' }}
      userPosition="right"
    />
    <Switch>
      <Route exact path="/" component={() => <Link to="/messages">See messages</Link> } />
      <Route path="/messages" component={Messenger} />
    </Switch>
    <Footer />
  </div>
)

export default App
