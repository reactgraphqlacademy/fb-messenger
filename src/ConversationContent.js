import React from 'react'

import UserDetail from './UserDetail'
import Messages from './Messages'

const ConversationContent = ({ conversation = [], selectedUser }) => (
        <div className="conversation-content">
            <Messages
                selectedUser={selectedUser}
                conversation={conversation}
            />
            <UserDetail selectedUser={selectedUser} />
        </div>
    )

export default ConversationContent