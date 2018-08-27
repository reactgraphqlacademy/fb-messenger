import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  fetchConversation,
} from '../../../actions/conversation'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = username => {
    this.props.dispatchFetchConversation(username)
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
  fetchConversation: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  conversation: state.conversation,
})

const mapStateToDispatch = {
  dispatchFetchConversation: fetchConversation,
}

export default connect(mapStateToProps, mapStateToDispatch)(ConversationContainer)
