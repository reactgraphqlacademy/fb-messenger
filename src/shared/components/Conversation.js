import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as api from '../api/message'

class Conversation extends Component {
  state = {
    conversation: []
  }

  componentDidMount() {
    api.fetchConversation(this.props.match.params.username)
    .then(messages => {
      this.setState({ conversation: messages })
    })
  }

  render() {
    const { conversation = [] } = this.state
    const { username } = this.props.match.params

    const children = conversation.length? (
      <ul>
        {conversation.map((message, i) => (
          <li>
            {message.from === 'you' ? 'you' : message.from }:
            {message.message}
          </li>
        ))}
      </ul>
    ) : <h2>No conversation with {username} yet.</h2>
  }
}

export default Conversation
