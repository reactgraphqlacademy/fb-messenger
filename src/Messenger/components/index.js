import React from 'react'
import styled from 'styled-components'

import colours from '../../App/styles/export/colours.css'

import ThreadsContainer from './ThreadsContainer'
import ConversationSection from './Conversation/ConversationSection'

const MessengerWrapper = styled.div`
    display: flex;
    flex: 1;
  border-right: 1px solid ${colours.mediumGrey};
`

const Messenger = () => (
  <MessengerWrapper>
    <ThreadsContainer />
    <ConversationSection />
  </MessengerWrapper>
)

export default Messenger
