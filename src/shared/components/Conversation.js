import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

    return (
      <div>
        <h1>Conversation with {username}</h1>
        <hr />
        {conversation.length? (
          <ul>
            <li><h2><Link to="/">Go Home</Link></h2></li>
            {conversation.map((message, i) => (
              <li key={message.id}>
                <strong>{message.from === 'you' ? 'you' : message.from }: </strong>
                {message.message}
              </li>
            ))}
          </ul>
        ) : <h2>No conversation with {username} yet</h2> }
      </div>
    )
  }
}

export default Conversation
