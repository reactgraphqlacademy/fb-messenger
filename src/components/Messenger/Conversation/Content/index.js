import React, { Component } from 'react'

import UserDetail from './UserDetail'
import Messages from './Messages'
import Modal from "../../../Modal"

class ConversationContent extends Component {
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
    const { conversation = [], username } = this.props
    const { showModal } = this.state

    if (!conversation.length) {
      return <h2>Loading...</h2>
    }

    return (
      <div className="conversation-content">
        <Modal
          show={showModal}
          toggleModal={this.toggleModal}
        />
        <Messages
          conversation={conversation}
          username={username}
          toggleModal={this.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.toggleModal} />
      </div>
    )
  }
}

export default ConversationContent
