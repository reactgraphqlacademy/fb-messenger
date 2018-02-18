import React, { Component } from 'react'
import { fetchUsers } from '../../api/users'
import { fetchMessagesForUser } from '../../api/messages'
import Messenger from './Messenger'

class MessengerContainer extends Component {
  constructor() {
    super()
    this.state = {
      selectedUser: {},
      conversation: []
    }
  }

  componentDidMount() {
    fetchUsers()
    .then( ({users}) =>
      this.selectUser(users[0])
    )
  }

  selectUser = (user = {}) => {
    fetchMessagesForUser(user)
      .then(data => {
        this.setState({
          selectedUser: user,
          conversation: data
        })
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
