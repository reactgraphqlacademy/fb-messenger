import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import colours from '../../../../styles/export/colours.css'

import Avatar from '../../../Layout/Avatar'
import Icon from '../../../Layout/Icon'

const UserDetailWrapper = styled.div`
    width: 33.3%; 
    border-left: 1px solid $medium-grey;
    > div {
    padding: 1em;
    font-size: 0.9em;
    color: $dark-grey;
    border-bottom: 1px solid $medium-grey;
    &:last-child {
      border-bottom: none;
    }
`

const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
`

const UserName = styled.div`
    font-size: 0.9rem;
    text-transform: capitalize;
`

const LastActive = styled.div`
    font-size: 0.75rem;
    color: ${colours.darkGrey};
`

const UserDetail = ({ username, toggleModal }) => (
  <UserDetail>
    <User>
      <div>
        <Avatar username={username} size="large" />
        <div>
          <UserName>
            { username }
          </UserName>
          <LastActive>
            Active {Math.floor(Math.random() * 3) + 1}m ago
          </LastActive>
        </div>
      </div>
      <a onClick={toggleModal}>
        <Icon name="cog" />
      </a>
    </User>
    <div>Options</div>
    <div>Facebook Profile</div>
  </UserDetail>
)

UserDetail.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

export default UserDetail
