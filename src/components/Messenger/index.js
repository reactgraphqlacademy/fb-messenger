import React from 'react'
import { Route } from 'react-router-dom'

import Threads from './Threads'
import Chat from './Chat/Chat'

const Messenger = () => (
  <div className="messenger">
    <Threads />
    <Route path="/messages/crazypeacock512" component={Chat} />
    <Route path="/messages/crazytiger134" component={Chat} />
    <Route path="/messages/blueelephant847" component={Chat} />
  </div>
)

export default Messenger
