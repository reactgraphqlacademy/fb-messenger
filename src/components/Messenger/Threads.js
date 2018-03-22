import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colours from '../../styles/export/colours.css'

import Avatar from '../Layout/Avatar'
import Icon from '../Layout/Icon'

const Threads = ({ history, match, threads }) => (
  <div className="threads">
    <div className="thread-bar">
      <h2>
        <Icon name="cog" />
        Messenger
        <Icon name="edit" />
      </h2>
    </div>
    <ul className="thread-list">
      {threads.map((thread, i) => (
        <li key={i} onClick={() => history.push(`${match.url}/${thread.username}`)}>
          <Avatar username={thread.username} size="large" />
          <div className="user-name">
            <span>{`${thread.name.first} ${thread.name.last}`}</span>
            <small>{`${thread.lastMessage.message}`}</small>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

Threads.propTypes = {
  threads: PropTypes.array,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default Threads
