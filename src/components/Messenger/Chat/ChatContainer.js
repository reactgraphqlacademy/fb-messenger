import React, { Component } from 'react'

import * as api from '../../../api/message'
import Chat from './Chat'

class ChatContainer extends Component {
  constructor(props) {
    super(props)

    // hint, add some state here
  }

  componentDidMount() {
    // hint, you should fetch the threads here
  }

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps) {
    /* Hint. Now you don't need to iterate the messages array
    to see if the username in the url is different from the username's conversation you
    are displaying. Use the prevProps parameter and the this.props in the following condition to
    replace the hardcoded false  */
    const needsToFetchUser =  false 
    if (needsToFetchUser) {
      this.fetchMessages(this.props.match.params.username)
    }
  }

  render() {
    const { messages } = this.state
    const { match } = this.props

    return (
      // hint, which component and props do you think we should return here?
    )
  }
}

export default ChatContainer
