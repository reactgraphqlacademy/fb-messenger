import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Threads from './Threads'
import { fetchThreads } from '../../api/thread'

import { receiveThreads } from '../../actions/threads'

class ThreadsContainer extends Component {
  await componentDidMount() {
    const { threads } = async fetchThreads()
    this.props.dispatch(receiveThreads(threads))
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

const mapStateToProps = (state) => ({
  threads: state.threads
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThreadsContainer))
