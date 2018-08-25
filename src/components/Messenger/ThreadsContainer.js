import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Threads from './Threads'
import { fetchThread } from '../../actions/thread'

class ThreadsContainer extends Component {
  componentDidMount () {
    // fetchFirstThread().then(thread => {
    //   this.props.receiveThread(thread)
    // })
    this.props.dispatchFetchThread()
  }

  render() {
    const { history, match, thread } = this.props

    return (
      <Threads
        thread={thread}
        history={history}
        match={match}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  thread: state.thread
})

const mapDispatchToProps = {
  dispatchFetchThread: fetchThread,
}

ThreadsContainer.propTypes = {
  dispatchFetchThread: PropTypes.func.isRequired,
  thread: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThreadsContainer))
