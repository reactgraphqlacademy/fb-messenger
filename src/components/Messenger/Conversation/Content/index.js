import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
    const {
      conversation = [], username, isMessageDetailOpen, fetchNextPage
    } = this.props
    const { showModal } = this.state

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
          fetchNextPage={fetchNextPage}
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
  fetchNextPage: PropTypes.func.isRequired,
  conversation: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  isMessageDetailOpen: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isMessageDetailOpen: state.ui.isMessageDetailOpen
})

export default connect(mapStateToProps)(ConversationContent)
