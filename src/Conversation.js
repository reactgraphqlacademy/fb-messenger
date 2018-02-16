import React from 'react'

import ConversationBar from './ConversationBar'
import ConversationContent from './ConversationContent'

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