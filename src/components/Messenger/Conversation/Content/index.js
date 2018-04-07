import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { connect } from '../../../../react-redux/connect'

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
    const { conversation = [], username, match, isMessageDetailOpen } = this.props
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
        { isMessageDetailOpen && <UserDetail
          username={username}
          toggleModal={this.toggleModal}
        /> }
      </ConversationContentWrapper>
    )
  }
}

ConversationContent.propTypes = {
  conversation: PropTypes.array,
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  isMessageDetailOpen: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isMessageDetailOpen: state.ui.isMessageDetailOpen
})

export default connect(mapStateToProps)(ConversationContent)
