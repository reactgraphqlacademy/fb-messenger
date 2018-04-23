import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'

import ConversationBar from './ConversationBar'
import ConversationContent from './Content'

const Conversation = ({ data, match }) => {
  const { username } = match.params

  return ([
    <ConversationBar
      key="bar"
      username={username}
    />
    ,
    <ConversationContent
      key="content"
      username={username}
    />
  ])
}

Conversation.propTypes = {
  data: PropTypes.array,
  match: PropTypes.object.isRequired,
}

export default withRouter(Conversation)
