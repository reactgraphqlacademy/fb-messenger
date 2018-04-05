import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ConversationContainer from './ConversationContainer'

const Conversation = styled.div`
      display: flex;
      flex-direction: column;
      flex:3;
`

const ConversationSection = ({ match, setLastMessage }) => (
  <Conversation>
    <Route path={`${match.url}/:username`} render={props => (
      <ConversationContainer setLastMessage={setLastMessage} {...props} />
    )} />
  </Conversation>
)

ConversationSection.propTypes = {
  match: PropTypes.object.isRequired,
  setLastMessage: PropTypes.func.isRequired,
}

export default withRouter(ConversationSection)
