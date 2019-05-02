import React, { Component } from "react";

import Threads from "./Threads";
import { fetchThreads } from "../../api/thread";

class ThreadsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      threads: []
    };
  }

  componentDidMount() {
    fetchThreads()
      .then(({ threads }) => {
        this.setState({ threads });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { threads } = this.state;

    return <Threads threads={threads} />;
  }
}

export default ThreadsContainer;
