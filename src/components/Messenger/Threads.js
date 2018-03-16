import React from 'react'

import Avatar from '../Layout/Avatar'
import Icon from '../Layout/Icon'

const Threads = ({ history, match, threads }) => (
  <div className="threads">
    <div className="thread-bar">
      <h2>
        <a onClick={() => alert('Not implemented') }>
          <Icon name="cog" />
        </a>
        Messenger
        <a onClick={() => alert('Not implemented') }>
          <Icon name="edit" />
        </a>
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

export default Threads
