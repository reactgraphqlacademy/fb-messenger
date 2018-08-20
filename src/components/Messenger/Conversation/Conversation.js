import React, { Component } from 'react'

import * as api from '../../../api/message'
import ConversationBar from './ConversationBar'
import ConversationContent from './Content'
import ConversationSection from './ConversationSection'

class Conversation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conversation: []
    }
  }

  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = (username) => {
    this.setState({
      conversation: []
    })
    // the following setTimeout is to simulate network latency in order to show a "loading" component
    setTimeout(() => {
      api.fetchConversation(username)
        .then(messages => {
          this.setState({
            conversation: messages
          })
        })
    }, 1000)
  }

  render() {
    const { match } = this.props
    const { username } = match.params
    const { conversation } = this.state

    // QUESTION 6. Do you think this is a good place to have this needsToFetchUser logic?
    // Can you please move needsToFetchUser condition to ConversationContainer.componentDidUpdate method?
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    const needsToFetchUser = conversation.length && !conversation.find(({ from, to }) => (
      to === username || from === username
    ))
    if (needsToFetchUser) {
      this.fetchConversation(this.props.match.params.username)
    }

    return (
      <ConversationSection>
        <ConversationBar username={username} match={match} />
        <ConversationContent
          match={match}
          conversation={conversation}
          username={username}
        />
      </ConversationSection>
    )
  }
}

export default Conversation
