import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Threads from './Threads'
import { fetchThreads } from '../../actions/thread'

class ThreadsContainer extends Component {
  componentDidMount () {
    this.props.dispatchFetchThreads()
  }

  render() {
    const { history, match, threads } = this.props

    return (
      <Threads
        threads={threads}
        history={history}
        match={match}
      />
    )
  }
}

const mapStateToProps = state => ({
  threads: state.threads
})

const mapDispatchToProps = {
  dispatchFetchThreads: fetchThreads,
}

ThreadsContainer.propTypes = {
  dispatchFetchThreads: PropTypes.func.isRequired,
  thread: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThreadsContainer))
