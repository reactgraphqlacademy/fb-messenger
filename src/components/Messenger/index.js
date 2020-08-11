import React from 'react'
import { Route } from 'react-router-dom'

import ThreadsContainer from './ThreadsContainer'
import Chat from './Chat/Chat'

const Messenger = () => (
  <div className="messenger">
    <ThreadsContainer />
    <Route path="/messages/:username" component={Chat} />
  </div>
)

export default Messenger
