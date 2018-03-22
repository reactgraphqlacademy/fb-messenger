import React, { Component } from 'react'
import { Route } from 'react-router'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import UserDetail from './UserDetail'
import Messages from './Messages'
import Modal from '../../../Modal'

const ConversationContentWrapper = styled.div`
  display: flex;
  height: 100%;
`

class ConversationContent extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { conversation = [], username, match } = this.props
    const { showModal } = this.state

    if (!conversation.length) {
      return <h2>Loading...</h2>
    }

    return (
      <ConversationContentWrapper>
        <Modal
          show={showModal}
          toggleModal={this.toggleModal}
        />
        <Messages
          conversation={conversation}
          username={username}
          toggleModal={this.toggleModal}
        />
        <Route path={`${match.url}/detail`} component={props => (
          <UserDetail
            username={username}
            toggleModal={this.toggleModal}
          />
        )} />
      </ConversationContentWrapper>
    )
  }
}

ConversationContent.propTypes = {
  conversation: PropTypes.array,
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
}

export default ConversationContent
