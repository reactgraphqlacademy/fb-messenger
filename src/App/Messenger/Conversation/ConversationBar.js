import React from 'react'
import Icon from '../../Layout/Icon'

const ConversationBar = ({ selectedUser }) => (
  <div className="conversation-bar">
    <h2>
      {selectedUser.name &&
        `${selectedUser.name.first} ${selectedUser.name.last}`}
    </h2>
    <div className="conversation-menu">
      <Icon name="phone" />
      <Icon name="video" />
      <Icon name="info-circle" />
    </div>
  </div>
)

export default ConversationBar
