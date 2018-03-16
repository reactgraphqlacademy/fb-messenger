import React, { Component } from 'react'
import Threads from './Threads'
import Conversation from './Conversation'
import messages from "../../mocks/messages"
import users from "../../mocks/users"

const filterMessageByUsername = ({ username } = {}) => message => (
    message.from === username ||
    message.to === username
)

class Messenger extends Component {
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

  showSettings = () => {
    this.props.toggleModal()
  }

  render() {
    return (
      <div className="messenger">
        <Threads
          showSettings={this.showSettings}
          selectUser={this.selectUser}
        />
        <Conversation
          selectedUser={this.state.selectedUser}
          conversation={this.state.conversation}
        />
      </div>
    )
  }
}

export default Messenger
