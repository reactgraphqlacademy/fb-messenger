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
    }, 1000)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.username !== prevProps.match.params.username) {
      this.fetchConversation(prevProps.match.params.username)
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

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
}

export default ConversationContainer
