import React from 'react'
import { Route, Link } from 'react-router-dom'

import Avatar from '../Layout/Avatar'
import Icon from '../Layout/Icon'

export default function Threads({ threads }) {
  return (
    <div className="threads">
      <div className="thread-bar">
        <h2>
          <Icon name="cog" />
          Messenger
          <Icon name="edit" />
        </h2>
      </div>
      <Route
        render={({ match }) => (
          <ul className="thread-list">
            {threads.map(thread => (
              <li key={thread.id}>
                <Link
                  className="user-name"
                  to={`${match.url}/${thread.username}`}
                >
                  <Avatar username={thread.username} size="large" />
                  <span>
                    {`${thread.name.first} ${thread.name.last}`}
                    <small>{`${thread.lastMessage.message}`}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  )
}
