import React, { Component } from 'react'
import messages from "../../mocks/messages"
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
    .then( data =>
      this.selectUser(data[0])
    )
  }

  selectUser = (user = {}) => {
    this.setState({
      selectedUser: user,
      conversation: fetchMessagesForUser(user)
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
