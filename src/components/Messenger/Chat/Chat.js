import React from 'react'

import { fetchMessagesWithLatency, fetchMessages } from '../../../api/message'
import UserDetail from './UserDetail'
import Messages from './Messages'
import ChatBar from './ChatBar'

export default function Chat() {
  const username = ''
  const [messages, setMessages] = React.useState([])

  // 👩‍🏫 you need to add an effect here to fetch the messages

  // 👩‍🏫 You need to use the dependencies array (https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) in the effect so the effect runs everytime the username in the URL changes

  return (
    <div className="chat">
      <ChatBar />
      <div className="chat-content">
        <Messages messages={messages} username={username} />
        <UserDetail username={username} />
      </div>
    </div>
  )
}
