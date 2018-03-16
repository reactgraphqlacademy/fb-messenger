import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import TopBar from './Layout/TopBar'
import Messenger from './Messenger'
import Footer from './Layout/Footer'

const App = () => (
  <div className="app">
    <TopBar
      user={{ name: 'Alex' }}
      userPosition="right"
    />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/messages" component={Messenger} />
      <Route render={() => (
        <div className="page-center"><h1>Page not found</h1></div>
      )}/>
    </Switch>
    <Footer />
  </div>
)

export default App
