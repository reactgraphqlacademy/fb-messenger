import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import ThreadsContainer from './ThreadsContainer'
import ConversationContainer from './Conversation/ConversationContainer'

const Messenger = ({ showSettings, newMessage }) => (
  <div className="messenger">
    <Route path="/messages" component={ThreadsContainer}/>
    <Route path="/messages/:username" component={ConversationContainer} />
  </div>
)

Messenger.propTypes = {
  showSettings: PropTypes.func,
  newMessage: PropTypes.func,
}

export default Messenger
