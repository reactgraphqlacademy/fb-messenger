import React, { Component } from 'react'

import * as api from '../../../api/message'
import UserDetail from './UserDetail'
import Messages from './Messages'
import ChatBar from './ChatBar'

class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.fetchMessages(this.props.match.params.username)
  }

  fetchMessages = username => {
    this.setState({
      messages: [],
    })
    // the following setTimeout is to simulate network latency in order to show a "loading" component
    setTimeout(() => {
      api.fetchMessages(username).then(messages => {
        this.setState({
          messages,
        })
      })
    }, 1000)
  }

  render() {
    const { match } = this.props
    const { username } = match.params
    const { messages } = this.state

    if (!messages.length) {
      return <h2>Loading...</h2>
    }

    // QUESTION 6. Do you think this is a good place to have this needsToFetchUser logic?
    // Can you please move needsToFetchUser condition to ChatContainer.componentDidUpdate method?
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    const needsToFetchUser =
      messages.length &&
      !messages.find(({ from, to }) => to === username || from === username)
    if (needsToFetchUser) {
      this.fetchMessages(this.props.match.params.username)
    }

    return (
      <div className="chat">
        <ChatBar username={username} match={match} />
        <div className="chat-content">
          <Messages messages={messages} username={username} />
          <UserDetail username={username} />
        </div>
      </div>
    )
  }
}

export default Chat
