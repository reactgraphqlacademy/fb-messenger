import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  receiveConversation,
  loadingConversation,
} from '../../../actions/conversation'
import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = async (username) => {
    const {
      api,
      loadingConversation,
      receiveConversation,
      conversation
    } = this.props

    try {
      if(conversation.loading) {
        return
      }
      loadingConversation(true)
      const nextConversation = await api.fetchConversation(username)
      receiveConversation(nextConversation)
      loadingConversation(false)
    } catch (error) {
      loadingConversation(false)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { match, conversation } = this.props

    return (
      <Conversation
        conversation={conversation}
        fetchNextPage={this.fetchConversation}
        match={match}
      />
    )
  }
}

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
  conversation: PropTypes.object.isRequired,
  receiveConversation: PropTypes.func.isRequired,
}

ConversationContainer.defaultProps = {
  api
}

const mapStateToProps = (state) => ({
  conversation: state.conversation,
})

const mapStateToDispatch = {
  receiveConversation,
  loadingConversation,
}

export default connect(mapStateToProps, mapStateToDispatch)(ConversationContainer)
