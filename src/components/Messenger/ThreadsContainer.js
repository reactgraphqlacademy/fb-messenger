import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Threads from './Threads'
import { fetchFirstThread } from '../../api/thread'

import { receiveThread } from '../../actions/thread'

class ThreadsContainer extends Component {
  componentDidMount () {
    fetchFirstThread().then(thread => {
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

// The following technique is not implemented in our simplified react-redux,
// but { connect } from 'react-redux' does. It helps get the best of the previous ones:
// Not much typing, and we just provide to the component the actions it can dispatch
const mapDispatchToProps = {
  dispatchReceiveThread: actions.receiveThread
}

// try to use the last one :)
*/

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
