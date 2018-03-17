import React from 'react'
import PropTypes from 'prop-types'

import ConversationBar from './ConversationBar'
import ConversationContent from './Content'
import ConversationSection from './ConversationSection'

const Conversation = ({ conversation, match }) => {
  const { username } = match.params

  return ([
    <ConversationBar username={username} match={match} />
    ,
    <ConversationContent
      match={match}
      conversation={conversation}
      username={username}
    />
  ])
}

Conversation.propTypes = {
  conversation: PropTypes.array,
  match: PropTypes.object.isRequired,
}

export default Conversation
