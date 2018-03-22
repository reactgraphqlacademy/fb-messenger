import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Icon from '../../Layout/Icon'

import styled from 'styled-components'
import colours from '../../../styles/export/colours.css'

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

const ConversationBar = ({ username, match }) => (
  <ConversationBarWrapper>
    <h2>
      {username}
    </h2>
    <ConversationMenu>
      <Icon name="phone" style={{margin: '0 0.5em'}}/>
      <Icon name="video" style={{margin: '0 0.5em'}}/>
      <Link to={`${match.url}/detail`}>
        <Icon name="info-circle" active style={{margin: '0 0.5em'}}/>
      </Link>
    </ConversationMenu>
  </ConversationBarWrapper>
)

ConversationBar.propTypes = {
  match: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
}

export default ConversationBar
