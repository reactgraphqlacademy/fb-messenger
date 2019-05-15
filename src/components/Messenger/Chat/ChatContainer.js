import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { receiveMessages } from "../../../actions/messages";
import * as api from "../../../api/message";
import Chat from "./Chat";

class ChatContainer extends Component {
  componentDidMount() {
    this.fetchMessages(this.props.match.params.username);
  }

  fetchMessages = async username => {
    const messages = await api.fetchMessages(username);
    this.props.receiveMessages(messages);
  };

  componentDidUpdate(prevProps) {
    const { username } = this.props.match.params;
    if (username !== prevProps.match.params.username) {
      this.fetchMessages(username);
    }
  }

  render() {
    const { match, messages } = this.props;

    return <Chat messages={messages} match={match} />;
  }
}

ChatContainer.propTypes = {
  match: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  receiveMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages
});

const mapStateToDispatch = {
  receiveMessages
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ChatContainer);
