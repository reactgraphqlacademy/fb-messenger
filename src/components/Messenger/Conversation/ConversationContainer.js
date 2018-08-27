import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  fetchConversation,
} from '../../../actions/conversation'
import Conversation from './Conversation'
import { selectLoading, selectMessages } from '../../../reducers/conversation'

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
  fetchConversation: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
  conversation: {
    data: selectMessages(state, props.match.params.username),
    loading: selectLoading(state),
  }
})

const mapStateToDispatch = {
  dispatchFetchConversation: fetchConversation,
}

export default connect(mapStateToProps, mapStateToDispatch)(ConversationContainer)
