import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { fetchThreads } from '../../api/thread'
import Avatar from '../Layout/Avatar'
import Icon from '../Layout/Icon'

class Threads extends Component {
  constructor(props) {
    super(props)

    this.state = {
      threads: []
    }
  }

  componentDidMount() {
    fetchThreads().then(({ threads }) => {
      this.setState({ threads })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { history, match } = this.props
    const { threads } = this.state

    return (
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
  }
}

export default withRouter(Threads)
