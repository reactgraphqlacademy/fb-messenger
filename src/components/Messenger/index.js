import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Threads from './Threads'
import Conversation from './Conversation/Conversation'

const Messenger = ({ showSettings, toggleModal, match }) => (
  <div className="messenger">
    <Threads />
    <Route path={`${match.url}/:username`} component={Conversation} />
  </div>
)

Messenger.propTypes = {
  showSettings: PropTypes.func,
  newMessage: PropTypes.func,
}

export default Messenger
