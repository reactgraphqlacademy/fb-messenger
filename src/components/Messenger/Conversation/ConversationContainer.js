import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  fetchConversation,
} from '../../../actions/conversation'
import Conversation from './Conversation'
import { makeGetConversation } from '../../../reducers/conversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchConversation()
  }

  componentDidUpdate(prevProps, prevState) {
    const { conversation = {} } = this.props
    if (
      this.props.match.params.username !== prevProps.match.params.username
      && !conversation.data.length && !conversation.loading
    ) {
      this.fetchConversation(this.props.match.params.username)
    }
  }

  fetchConversation = () => {
    this.props.dispatchFetchConversation(this.props.match.params.username)
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
  dispatchFetchConversation: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => {
  const getConversation = makeGetConversation()
  const conversation = getConversation(state, props)

  return {
    conversation
  }
}

const mapStateToDispatch = {
  dispatchFetchConversation: fetchConversation,
}

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(ConversationContainer))
