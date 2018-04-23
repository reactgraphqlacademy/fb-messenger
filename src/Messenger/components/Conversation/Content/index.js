import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import UserDetail from './UserDetail'
import Messages from './Messages'

const ConversationContentWrapper = styled.div`
  display: flex;
  height: 100%;
`

const ConversationContent = ({
  username, isMessageDetailOpen
}) => {
  // if (loading) {
  //   return <h2>Loading...</h2>
  // }

  return (
    <ConversationContentWrapper>
      <Messages
        username={username}
      />
      { isMessageDetailOpen && <UserDetail
        username={username}
      /> }
    </ConversationContentWrapper>
  )
}

ConversationContent.propTypes = {
  username: PropTypes.string.isRequired,
  isMessageDetailOpen: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isMessageDetailOpen: state.ui.isMessageDetailOpen
})

export default connect(mapStateToProps)(ConversationContent)
