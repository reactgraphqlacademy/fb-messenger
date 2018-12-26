import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Conversation from './Conversation'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex:3;
`

const ConversationSection = ({ match }) => (
  <Section>
    <Route path={`${match.url}/:username`} component={Conversation} />
  </Section>
)

ConversationSection.propTypes = {
  match: PropTypes.object.isRequired,
}

export default withRouter(ConversationSection)
