import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { toggleMessageDetail } from '../../../App/actions/ui'
import Icon from '../../../App/components/Layout/Icon'
import colours from '../../../App/styles/export/colours.css'

const ConversationBarWrapper = styled.div`
    position: relative;
    border-bottom: 1px solid ${colours.mediumGrey};
    padding: 1.05em;
    align-items: center;
    h2 {
      text-transform: capitalize;
    }
`

const ConversationMenu = styled.div`
  position: absolute;
  right: 5px;
  top: 15px;
  & > div {
    display: inline-block;
  }
`

const ConversationBar = ({
  username, dispatchToggleMessageDetail
}) => (
  <ConversationBarWrapper>
    <h2>
      {username}
    </h2>
    <ConversationMenu>
      <Icon name="phone" style={{margin: '0 0.5em'}}/>
      <Icon name="video" style={{margin: '0 0.5em'}}/>
      <a onClick={dispatchToggleMessageDetail}>
        <Icon name="info-circle" active style={{margin: '0 0.5em'}}/>
      </a>
    </ConversationMenu>
  </ConversationBarWrapper>
)

ConversationBar.propTypes = {
  username: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  conversationConnection: PropTypes.object,
}

const mapDispatchToProps = {
  dispatchToggleMessageDetail: toggleMessageDetail
}

export default connect(null, mapDispatchToProps)(ConversationBar)
