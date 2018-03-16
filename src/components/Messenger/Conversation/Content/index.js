import React from 'react'

import UserDetail from './UserDetail'
import Messages from './Messages'

const ConversationContent = ({ conversation = [], username }) => {
  if (!conversation.length) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="conversation-content">
      <Messages conversation={conversation} username={username} />
      <UserDetail username={username} />
    </div>
  )
}

export default ConversationContent
