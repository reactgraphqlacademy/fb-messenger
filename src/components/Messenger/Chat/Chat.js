import React from 'react'

import { fetchMessagesWithLatency, fetchMessages } from '../../../api/message'
import UserDetail from './UserDetail'
import Messages from './Messages'
import ChatBar from './ChatBar'

export default function Chat({ match }) {
  const { username } = match.params
  const [messages, setMessages] = React.useState([])

  // 👩‍🏫 you need to add an effect here to fetch the messages
  //   React.useEffect(() => {
  //     fetchMessages(username).then(messages => {
  //       setMessages(messages)
  //     })
  //   }, [username])

  //   if (!messages.length) {
  //     return <h2>Loading...</h2>
  //   }

  return (
    <div className="chat">
      <ChatBar username={username} match={match} />
      <div className="chat-content">
        <Messages messages={messages} username={username} />
        <UserDetail username={username} />
      </div>
    </div>
  )
}
