import React from 'react'
import { Route } from 'react-router-dom'

import Threads from './Threads'
import Conversation from './Conversation/Conversation'

const Messenger = () => (
  <div className="messenger">
    <Threads />
    <Route path={`/messages/:username`} component={Conversation} />
  </div>
)

export default Messenger
