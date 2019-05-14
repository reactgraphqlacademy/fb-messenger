import React, { Component } from "react";
import PropTypes from "prop-types";

import * as api from "../../../api/message";
import Chat from "./Chat";

class ChatContainer extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.fetchMessages(this.props.match.params.username);
  }

  fetchMessages = async username => {
    const messages = await api.fetchMessages(username);
    this.setState({ messages });
  };

  componentDidUpdate(prevProps) {
    const { username } = this.props.match.params;
    if (username !== prevProps.match.params.username) {
      this.fetchMessages(username);
    }
  }

  render() {
    const { match } = this.props;
    const { messages } = this.state;

    return <Chat messages={messages} match={match} />;
  }
}

ChatContainer.propTypes = {
  match: PropTypes.object.isRequired
};

export default ChatContainer;
