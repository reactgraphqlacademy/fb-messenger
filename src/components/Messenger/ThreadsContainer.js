import React, { Component } from "react";

import Threads from "./Threads";
import { fetchThreads } from "../../api/thread";
import { logErrorToMyService } from "../../utils";

class ThreadsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      threads: [],
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    fetchThreads()
      .then(({ threads }) => {
        this.setState({ threads, loading: false });
      })
      .catch(error => {});
  }

  render() {
    const { threads, error, loading } = this.state;

    return <Threads loading={loading} error={error} threads={threads} />;
  }
}

export default ThreadsContainer;
