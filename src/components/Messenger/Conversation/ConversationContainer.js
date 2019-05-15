import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { receiveMessages } from "../../../actions/conversation";
import * as api from "../../../api/message";
import Conversation from "./Conversation";

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchMessages(this.props.match.params.username);
  }

  fetchMessages = async username => {
    const conversation = await api.fetchMessages(username);
    this.props.receiveMessages(conversation);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchMessages(nextProps.match.params.username);
    }
  }

  render() {
    const { match, conversation } = this.props;

    return <Conversation conversation={conversation} match={match} />;
  }
}

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
  conversation: PropTypes.array.isRequired,
  receiveMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  conversation: state.conversation
});

const mapStateToDispatch = {
  receiveMessages
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(ConversationContainer);
