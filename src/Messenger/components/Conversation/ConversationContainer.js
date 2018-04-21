import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Conversation from './Conversation'

class ConversationContainer extends Component {
  // componentDidMount() {
  //   this.fetchConversation(this.props.match.params.username)
  // }

  // fetchConversation = async (username) => {
  //   const conversation = await api.fetchConversation(username)
  //   this.props.receiveConversation(conversation)
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      //this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { match, conversation = [] } = this.props

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
  conversation: PropTypes.array.isRequired,
}

export default ConversationContainer
