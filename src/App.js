import React, { Component } from "react"
import "./App.css"
import TopBar from "./TopBar"
import Threads from './Threads'
import Conversation from './Conversation'

import users from "./mocks/users.js"
import messages from "./mocks/messages.js"

const filterMessageByUsername = ({ username } = {}) => message => (
  message.from === username ||
  message.to === username
)

class App extends Component {
  constructor() {
    super()
    const selectedUser = users[0]
    this.state = {
      selectedUser: selectedUser,
      conversation: messages.filter(filterMessageByUsername(selectedUser))
    }
  }

  selectUser = (user = {}) => {
    this.setState({
      selectedUser: user,
      conversation: messages.filter(filterMessageByUsername(user))
    })
  }

  newMessage = () => {
    this.selectUser()
  }

  showSettings = () => {
    console.log("settings clicked")
  }

  render() {
    const loggedUser = { name: 'Alex' }
    
    return (
      <div className="app">
        <TopBar user={loggedUser} userPosition="right" />
        <div className="messenger">
          <Threads
            showSettings={this.showSettings}
            newMessage={this.newMessage}
            selectUser={this.selectUser}
          />
          <Conversation
              selectedUser={this.state.selectedUser}
              conversation={this.state.conversation}
          />
        </div>
      </div>
    )
  }
}

export default App
