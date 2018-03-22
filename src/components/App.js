import React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'

import NotFound from './NotFound'
import Home from './Home'
import TopBar from './Layout/TopBar'
import Messenger from './Messenger'
import Footer from './Layout/Footer'
import Profile from './Profile'

const AppWrapper = styled.div`
  overflow: hidden;
  flex: 1;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  order: 0;
  flex-flow: column nowrap;
  align-items: stretch;
  flex-direction: column;
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
`

const App = () => (
  <AppWrapper>
    <TopBar userPosition="right" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/messages" component={Messenger} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound}/>
    </Switch>
    <Footer />
  </AppWrapper>
)

export default App
