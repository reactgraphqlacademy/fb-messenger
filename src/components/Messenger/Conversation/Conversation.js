import React from 'react'

import ConversationBar from './ConversationBar'
import ConversationContent from './Content'
import ConversationSection from './ConversationSection'

const Conversation = ({ conversation = [], match }) => {
  const {  username } = match.params

  return (
    <ConversationSection>
      <ConversationBar username={username} match={match} totalMessages={conversation.length} />
      <ConversationContent
        match={match}
        conversation={conversation}
        username={username}
      />
    </ConversationSection>
  )
}

export default Conversation
