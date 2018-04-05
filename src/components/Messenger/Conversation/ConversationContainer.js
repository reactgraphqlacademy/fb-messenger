import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

  addNewMessage = (messageText) => {
    const message = {
      from: 'you',
      to: this.props.match.params.username,
      message: messageText,
      time: Date.now(),
    }
    this.setState({ conversation: [...this.state.conversation, message ]})
  }

  render() {
    const { conversation } = this.state
    const { match, setLastMessage } = this.props

    return (
      <Conversation
        addNewMessageToConversation={this.addNewMessage}
        conversation={conversation}
        setLastMessage={setLastMessage}
        match={match}
      />
    )
  }
}

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
  setLastMessage: PropTypes.func.isRequired,
}

export default ConversationContainer
