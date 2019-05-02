import React, { Component } from 'react'

import Threads from './Threads'
import { fetchThreads } from '../../api/thread'

class ThreadsContainer extends Component {
  constructor(props) {
    super(props)

    // hint, add some state here
  }

  componentDidMount() {
    // hint, you should fetch the threads here
  }

  render() {
    const { history, match } = this.props
    const { threads } = this.state

    return (
      // hint, which component and props do you think we should return here?
    )
  }
}

export default ThreadsContainer
