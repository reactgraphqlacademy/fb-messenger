import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  receiveConversation
} from '../../../actions/conversation'
import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = async (username) => {
    const { api } = this.props
    const conversation = await api.fetchConversation(username)
    this.props.receiveConversation(conversation)
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
        match={match}
      />
    )
  }
}

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
  conversation: PropTypes.array.isRequired,
  receiveConversation: PropTypes.func.isRequired,
}

ConversationContainer.defaultProps = {
  api
}

const mapStateToProps = (state) => ({
  conversation: state.conversation
})

const mapStateToDispatch = {
  receiveConversation
}

export default connect(mapStateToProps, mapStateToDispatch)(ConversationContainer)
