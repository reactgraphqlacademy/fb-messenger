import React from "react"
// import {  } from 'react-router'
import { Redirect, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'

import TopBar from "./Layout/TopBar"
import Messenger from "./Messenger"
import Footer from "./Layout/Footer"
import Modal from "./Modal"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const loggedUser = { name: 'Alex' }
    const { showModal } = this.state

    return (
      <div className="app">
        <Modal
          show={showModal}
          toggleModal={this.toggleModal}
        />
        <TopBar
          toggleModal={this.toggleModal}
          user={loggedUser}
          userPosition="right"
        />
        <Switch>
          <Route exact path="/" component={() => <Link to="/messages">See messages</Link> } />
          <Route
            path="/messages"
            render={() => <Messenger toggleModal={this.toggleModal} /> }
          />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
