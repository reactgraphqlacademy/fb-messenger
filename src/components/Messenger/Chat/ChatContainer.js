import React, { Component } from "react";
import PropTypes from "prop-types";

import * as api from "../../../api/message";
import Chat from "./Chat";
import { logErrorToMyService } from "../../../utils";

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchMessages(this.props.match.params.username);
  }

  fetchMessages = username => {
    this.setState({ messages: [], loading: true });
    setTimeout(() => {
      api.fetchMessages(username).then(messages => {
        this.setState({ messages, loading: false });
      });
    }, 1000);
  };

  componentDidUpdate(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchMessages(nextProps.match.params.username);
    }
  }

  render() {
    const { messages, error, loading } = this.state;
    const { match } = this.props;

    return (
      <Chat error={error} loading={loading} messages={messages} match={match} />
    );
  }
}

ChatContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default ChatContainer;
