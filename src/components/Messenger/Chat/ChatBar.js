import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../../Layout/Icon'

const ConversationBar = ({ username, match, totalMessages }) => (
  <div className="conversation-bar">
    <h2>
      {username}
      {totalMessages ? <i> ({totalMessages})</i> : ''}
    </h2>
    <div className="conversation-menu">
      <Icon name="phone" />
      <Icon name="video" />
      <Link to={`${match.url}/detail`}>
        <Icon name="info-circle" />
      </Link>
    </div>
  </div>
)

export default ConversationBar
