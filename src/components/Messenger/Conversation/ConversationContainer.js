import React, { Component } from 'react'

import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  constructor(props) {
    super(props)

    // hint, add some state here
  }

  componentDidMount() {
    // hint, you should fetch the threads here
  }

  componentWillReceiveProps(nextProps) {
    const needsToFetchUser = `Hint. Now you don't need to iterate the messages array
    to see if the username in the url is different from the username's conversation you
    are displaying. Use the nextProps parameter and the this.props in the following condition `
    if (needsToFetchUser) {
      this.fetchConversation(this.props.match.params.username)
    }
  }

  render() {
    const { conversation } = this.state
    const { match } = this.props

    return (
      // hint, which component and props do you think we should return here?
    )
  }
}

export default ConversationContainer
