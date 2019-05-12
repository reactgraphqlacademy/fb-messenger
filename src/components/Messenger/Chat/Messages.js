import React from 'react'
import Avatar from '../../Layout/Avatar'
import Icon from '../../Layout/Icon'

const Messages = ({ messages = [], username }) => {
  const conversation = messages.map((message, i) => (
    <div
      key={i}
      className={`message-wrapper ${
        message.from === 'you' ? 'sent' : 'received'
      }`}
    >
      {message.to === 'you' && <Avatar username={username} size="medium" />}
      <div className="message">{message.message}</div>
      {message.from === 'you' && (
        <div className="message-read">
          <Icon name="check-circle" />
        </div>
      )}
    </div>
  ))

  return (
    <div className="messages">
      <div className="list">
        {conversation.length ? conversation : <p>You have no messages</p>}
      </div>
      <div className="new-message">
        <input
          type="text"
          placeholder="Type your message..."
          className="message-box"
        />
        <button>Send</button>
      </div>
    </div>
  )
}

export default Messages
