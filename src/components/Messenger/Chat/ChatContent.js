import React, { Component } from 'react'
import { Route } from 'react-router'
import PropTypes from 'prop-types'

import UserDetail from './UserDetail'
import Messages from './Messages'
import Modal from '../../Modal'

class ChatContent extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  render() {
    const { messages = [], username, match } = this.props
    const { showModal } = this.state

    if (!messages.length) {
      return <h2>Loading...</h2>
    }

    return (
      <div className="conversation-content">
        <Modal show={showModal} toggleModal={this.toggleModal} />
        <Messages
          messages={messages}
          username={username}
          toggleModal={this.toggleModal}
        />
        <Route
          path={`${match.url}/detail`}
          component={props => (
            <UserDetail username={username} toggleModal={this.toggleModal} />
          )}
        />
      </div>
    )
  }
}

ChatContent.propTypes = {
  messages: PropTypes.array,
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
}

export default ChatContent
