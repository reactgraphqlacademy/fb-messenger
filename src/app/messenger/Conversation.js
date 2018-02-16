import React from 'react'

import ConversationBar from './conversation/ConversationBar'
import ConversationContent from './conversation/ConversationContent'

const Conversation = ({ selectedUser, conversation = [] }) => {

    return(
        <div className="conversation">
            <ConversationBar
                selectedUser={selectedUser}
            />
            <ConversationContent
                selectedUser={selectedUser}
                conversation={conversation}
            />
        </div>
    )
}

export default Conversation