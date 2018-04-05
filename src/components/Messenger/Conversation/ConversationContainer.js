import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  receiveConversations
} from "../../../actions/conversation"
import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = (username) => {
    setTimeout(() => {
      api.fetchConversation(username)
      .then(conversation => {
        this.props.dispatch(receiveConversations(conversation))
      })
    },500)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { match, setLastMessage, conversation } = this.props

    return (
      <Conversation
        conversation={conversation}
        setLastMessage={setLastMessage}
        match={match}
      />
    )
  }
}

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
  conversation: PropTypes.array.isRequired,
  setLastMessage: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  conversation: state.conversation
})

const mapStateToDispatch = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapStateToDispatch)(ConversationContainer)
