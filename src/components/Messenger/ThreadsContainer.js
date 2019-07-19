import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Threads from "./Threads";
import { fetchFirstThread } from "../../api/thread";

import { receiveThread } from "../../actions/thread";

class ThreadsContainer extends Component {
  componentDidMount() {
    fetchFirstThread().then(thread => {
      this.props.receiveThread(thread);
    });
  }

  render() {
    const { thread } = this.props;

    return <Threads thread={thread} />;
  }
}

const mapStateToProps = state => ({
  thread: state.thread
});

const mapDispatchToProps = {
  receiveThread
};

ThreadsContainer.propTypes = {
  receiveThread: PropTypes.func.isRequired,
  thread: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadsContainer);

/*
// SOME EXPLANATION AND TIPS ABOUT USING CONNECT

// This is the simplest way to connect our component to the store.dispatch method
// and probably not the best
const mapDispatchToProps = dispatch => ({
  dispatch
});

// We can also connect directly an action with dispatch by doing this.
// This is nice because you provide the component just with the actions it can dispatch
// You might think that it's maybe a lot of typing, and you might be right.
const mapDispatchToProps = dispatch => ({
  dispatchReceiveThread: thread => {
    dispatch(actions.receiveThread(thread));
  }
});

// So then we would do this:
this.props.dispatch(receiveThread(thread));

// but we an also do just this:
this.props.dispatchReceiveThread(thread);
// This helps get the best of the previous ones:
// Not much typing, and we just provide to the component the actions it can dispatch
const mapDispatchToProps = {
  dispatchReceiveThread: receiveThread
};

// try to use the last one :)
*/
