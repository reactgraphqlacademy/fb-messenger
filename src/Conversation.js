import React from 'react'
import Avatar from './Avatar'
import Icon from './Icon'

const Conversation = ({ selectedUser, conversation = [] }) => {

    const styledConversation = conversation.map((message, i) => (
        <div
            key={i}
            className={`message-wrapper ${
                message.from === "you" ? "sent" : "received"
                }`}
        >
            {message.to === "you" && (
                <Avatar
                    user={selectedUser}
                    size="medium"
                />
            )}
            <div className="message">{message.message}</div>
            {message.from === "you" && (
                <div className="message-read">
                    <Icon name="check-circle" />
                </div>
            )}
        </div>
    ))

    return(
        <div className="conversation">
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
            <div className="conversation-content">
                <div className="messages">
                    <div className="list">
                        {styledConversation.length ? styledConversation : <p>You have no messages</p>}
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
                <div className="user-detail">
                    <div className="user">
                        <div>
                            <Avatar
                                user={selectedUser}
                                size="large"
                            />
                            <div className="user-title">
                                <div className="user-name">
                                    {selectedUser.name &&
                                    `${selectedUser.name.first} ${selectedUser.name.last}`}
                                </div>
                                <div className="last-active">
                                    Active {Math.floor(Math.random() * 3) + 1}m ago
                                </div>
                            </div>
                        </div>
                        <Icon name="cog" />
                    </div>
                    <div>Options</div>
                    <div>Facebook Profile</div>
                </div>
            </div>
        </div>
    )
}

export default Conversation