import React from 'react'
import { useParams } from 'react-router-dom'

import { fetchMessagesWithLatency, fetchMessages } from '../../../api/message'
import UserDetail from './UserDetail'
import Messages from './Messages'
import ChatBar from './ChatBar'

export default function Chat() {
  const { username } = useParams()
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    fetchMessages(username).then(messages => {
      setMessages(messages)
    })
  }, [username])

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
