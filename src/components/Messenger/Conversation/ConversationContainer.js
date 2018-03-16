import React, { Component } from 'react'
import { fetchConversation } from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conversation: []
    }
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }

  fetchUser = (username) => {
    fetchConversation(username)
    .then(messages => {
      this.setState({ conversation: messages })
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchUser(nextProps.match.params.username)
    }
  }

  newMessage = () => {}

  render() {
    const { conversation } = this.state
    const { match } = this.props

    return (
      <Conversation
        conversation={conversation}
        match={match}
      />
    )
  }
}

export default ConversationContainer
