import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

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
    const { history, match, thread } = this.props;

    return <Threads thread={thread} history={history} match={match} />;
  }
}

const mapStateToProps = state => ({
  thread: state.thread
});

const mapDispatchToProps = {
  receiveThread
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ThreadsContainer)
);
