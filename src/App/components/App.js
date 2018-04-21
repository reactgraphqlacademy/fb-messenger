import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Login from '../../User/components/Login'
import Messenger from '../../Messenger/components'
import Profile from '../../User/components/Profile'
import colours from '../styles/export/colours.css'

import NotFound from './NotFound'
import Home from './Home'
import TopBar from './Layout/TopBar'
import Footer from './Layout/Footer'

const AppWrapper = styled.div`
  background-color: ${colours.white};
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

const App = ({ session }) => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route render={props =>
      session ? (
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
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    } />
  </Switch>
)

const masStateToProps = state => ({
  session: state.session
})

export default connect(masStateToProps)(App)
