import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import reselect from 'reselect'

import {
  fetchConversation,
} from '../../../actions/conversation'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchConversation()
  }

  componentDidUpdate(prevProps, prevState) {
    
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

const mapStateToProps = (state) => ({
  conversation: state.conversation,
})

const mapStateToDispatch = {
  dispatchFetchConversation: fetchConversation,
}

export default connect(mapStateToProps, mapStateToDispatch)(ConversationContainer)
