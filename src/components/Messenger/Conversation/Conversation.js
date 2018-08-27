import React from 'react'
import PropTypes from 'prop-types'
import ConversationBar from './ConversationBar'
import ConversationContent from './Content'

const Conversation = ({
  conversation, match, fetchNextPage
}) => {
  const { username } = match.params

  return ([
    <ConversationBar
      key="bar"
      username={username}
      match={match}
      conversation={conversation}
    />
    ,
    <ConversationContent
      key="content"
      fetchNextPage={fetchNextPage}
      match={match}
      conversation={conversation}
      username={username}
    />
  ])
}

Conversation.propTypes = {
  fetchNextPage: PropTypes.func.isRequired,
  conversation: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default Conversation
