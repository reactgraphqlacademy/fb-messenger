import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Threads from './Threads'
import { fetchFirstThread } from '../../api/thread'

import { receiveThread } from '../../actions'

class ThreadsContainer extends Component {
  componentDidMount() {
    fetchFirstThread().then(thread => {
      // Here we dispatch the RECEIVE_THREAD action created by the receiveThread action creator
      // The dispatch props is injected by `connect` at the bottom of the file
      this.props.dispatch(receiveThread(thread))
    })
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

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

ThreadsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  thread: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThreadsContainer))

/*
SOME EXPLANATION AND TIPS ABOUT USING CONNECT

// This is the simplest way to connect our component to the store.dispatch method
// and probably not the best
const mapDispatchToProps = dispatch => ({
  dispatch
})

// We can also connect directly an action with dispatch by doing this.
// This is nice because you provide the component just with the actions it can dispatch
// You might think that it's maybe a lot of typing, and you might be right.
const mapDispatchToProps = dispatch => ({
  dispatchReceiveThread: thread => {
    dispatch(actions.receiveThread(thread))
  }
})

// Then instead of this
this.props.dispatch(actions.receiveThread(thread))
// we can simply do this
this.props.dispatchReceiveThread(thread)
// It helps get the best of the previous ones:
// Not much typing, and we just provide to the component the actions it can dispatch
const mapDispatchToProps = {
  dispatchReceiveThread: actions.receiveThread
}

// try to use the last one :)
*/
