import React from 'react'

import ThreadsContainer from './ThreadsContainer'
import ConversationSection from './Conversation/ConversationSection'

const Messenger = () => (
  <div className="messenger">
    <ThreadsContainer />
    <ConversationSection />
  </div>
)

export default Messenger
