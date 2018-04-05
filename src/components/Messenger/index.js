import React from 'react'
import styled from 'styled-components'
import colours from '../../styles/export/colours.css'

import { fetchThreads } from '../../api/thread'
import Threads from './Threads'
import ConversationSection from './Conversation/ConversationSection'

const MessengerWrapper = styled.div`
    display: flex;
    flex: 1;
  border-right: 1px solid ${colours.mediumGrey};
`

class Messenger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      threads: []
    }
  }

  componentDidMount() {
    fetchThreads().then(({ threads }) => {
      this.setState({ threads })
    })
    .catch(err => {
      console.log(err)
    })
  }

  setLastMessage = (message) => {
    const threads = this.state.threads.map(thread => {
      if(thread.username === message.username){
        thread.lastMessage = message.lastMessage
      }
      return thread
    })

    this.setState({ threads })
  }

  render () {
    return (
      <MessengerWrapper>
        <Threads threads={this.state.threads} />
        <ConversationSection setLastMessage={this.setLastMessage} />
      </MessengerWrapper>
    )
  }
}

export default Messenger
