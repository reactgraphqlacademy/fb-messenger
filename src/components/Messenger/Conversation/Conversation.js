import React from 'react'
import PropTypes from 'prop-types'
import ConversationBar from './ConversationBar'
import ConversationContent from './Content'

const Conversation = ({
  conversation, match, setLastMessage, addNewMessageToConversation
}) => {
  const { username } = match.params

  return ([
    <ConversationBar key="bar" username={username} match={match} />
    ,
    <ConversationContent
      addNewMessageToConversation={addNewMessageToConversation}
      key="content"
      match={match}
      conversation={conversation}
      username={username}
      setLastMessage={setLastMessage}
    />
  ])
}

Conversation.propTypes = {
  conversation: PropTypes.array,
  match: PropTypes.object.isRequired,
  setLastMessage: PropTypes.func.isRequired,
  addNewMessageToConversation: PropTypes.func.isRequired,
}

export default Conversation
