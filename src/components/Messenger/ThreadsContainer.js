import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Threads from './Threads'
import { fetchThreads } from '../../api/thread'

class ThreadsContainer extends Component {
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
    const { showSettings, newMessage, history, match } = this.props
    const { threads } = this.state

    return (
      <Threads
        threads={threads}
        history={history}
        match={match}
      />
    )
  }
}

export default withRouter(ThreadsContainer)
