import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Threads from './Threads'
import Conversation from './Conversation/Conversation'

const Messenger = ({ showSettings, toggleModal }) => (
  <div className="messenger">
    <Threads />
    <Route path={`messages/:username`} component={Conversation} />
  </div>
)

Messenger.propTypes = {
  showSettings: PropTypes.func,
  newMessage: PropTypes.func,
}

export default Messenger
