import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import colours from '../../styles/export/colours.css'
import Avatar from '../Layout/Avatar'
import Icon from '../Layout/Icon'

const ThreadsWrapper = styled.div`
  display: flex;
  border-right: 1px solid ${colours.mediumGrey};
  flex-direction: column;
  flex:1;
`

const ThreadBar = styled.div`
  border-bottom: 1px solid ${colours.mediumGrey};
  padding: 0.85em;
  h2 {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
`

const ThreadList = styled.ul`
    overflow-y: auto;
    width: 100%;
    list-style: none inside none;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      align-items: center;
      padding: 0.4em 0.75em;
      &:hover {
        background: ${colours.lightGrey};
        cursor: pointer;
      }

    }
`

const UserName = styled.div`
  font-size: 0.9rem;
  span {
    font-size: 0.9em;
    text-transform: capitalize;
  }
  small {
    font-size: 0.8em;
    color: ${colours.darkGrey};
    margin: 2px 0;
    display: block;
  }
`

const Threads = ({ history, match, threads }) => (
  <ThreadsWrapper>
    <ThreadBar>
      <h2>
        <Icon name="cog" />
        Messenger
        <Icon name="edit" />
      </h2>
    </ThreadBar>
    <ThreadList>
      {threads.map((thread, i) => (
        <li key={i} onClick={() => history.push(`${match.url}/${thread.username}`)}>
          <Avatar username={thread.username} size="large" />
          <UserName>
            <span>{`${thread.name.first} ${thread.name.last}`}</span>
            <small>{`${thread.lastMessage.message}`}</small>
          </UserName>
        </li>
      ))}
    </ThreadList>
  </ThreadsWrapper>
)

Threads.propTypes = {
  threads: PropTypes.array,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default withRouter(Threads)
