import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'

import CONVERSATION_QUERY from './Conversation.graphql'
import ConversationBar from './ConversationBar'
import ConversationContent from './Content'

const Conversation = ({ data, match }) => {
  const { username } = match.params

  return ([
    <ConversationBar
      key="bar"
      username={username}
      match={match}
      conversation={data.conversation}
      loading={data.loading}
    />
    ,
    <ConversationContent
      key="content"
      match={match}
      conversation={data.conversation}
      loading={data.loading}
      username={username}
    />
  ])
}

Conversation.propTypes = {
  data: PropTypes.array,
  match: PropTypes.object.isRequired,
}

const fetchConversation = graphql(CONVERSATION_QUERY, {
  options: props => ({
    variables: { username: props.match.params.username }
  })
})

export default fetchConversation(withRouter(Conversation))
