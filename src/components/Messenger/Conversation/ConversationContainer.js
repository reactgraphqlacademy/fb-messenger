import React, { Component } from 'react'
import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
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
    this.setState({ conversation: [] })
    setTimeout(() => {
      api.fetchConversation(username)
      .then(messages => {
        this.setState({ conversation: messages })
      })
    },1000)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { conversation } = this.state
    const { match } = this.props

    return (
      <Conversation
        conversation={conversation}
        match={match}
      />
    )
  }
}

export default ConversationContainer
