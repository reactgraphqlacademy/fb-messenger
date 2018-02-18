import React, { Component } from 'react'
import Threads from './Threads'
import {fetchUsers} from '../../api/users'

class ThreadsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetchUsers().then(({users}) => {
      this.setState({ users })
    })
  }

  render() {
    const { showSettings, newMessage, selectUser } = this.props
    const { users } = this.state
    return (
      <Threads
        showSettings={showSettings}
        newMessage={newMessage}
        selectUser={selectUser}
        users={users}
      />
    )
  }
}

export default ThreadsContainer;
