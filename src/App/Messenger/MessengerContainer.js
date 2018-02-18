import React, { Component } from 'react'
import messages from "../../mocks/messages"
import users from "../../mocks/users"
import Messenger from './Messenger'

const filterMessageByUsername = ({ username } = {}) => message => (
    message.from === username ||
    message.to === username
)

class MessengerContainer extends Component {
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

  }

  showSettings = () => {
    this.props.toggleModal()
  }

  render() {
    return (
      <Messenger
        showSettings={this.showSettings}
        newMessage={this.newMessage}
        selectUser={this.selectUser}
        selectedUser={this.state.selectedUser}
        conversation={this.state.conversation}
      />
    )
  }
}

export default MessengerContainer
