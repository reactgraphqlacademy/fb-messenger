import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  state = {
    conversation: []
  }

  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = async (username) => {
    const conversation = await api.fetchConversation(username)
    this.setState({ conversation })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { match } = this.props
    const { conversation } = this.state

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
