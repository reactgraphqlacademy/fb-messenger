import React from 'react'

import ConversationBar from './ConversationBar'
import ConversationContent from './Content'

const Conversation = ({ selectedUser, conversation }) => (
  <div className="conversation">
    <ConversationBar
      selectedUser={selectedUser}
    />
    <ConversationContent
      selectedUser={selectedUser}
      conversation={conversation}
    />
  </div>
)

export default Conversation
