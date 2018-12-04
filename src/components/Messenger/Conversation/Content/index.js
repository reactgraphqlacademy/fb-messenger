import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import UserDetail from "./UserDetail";
import Messages from "./Messages";
import Modal from "../../../Modal";

class ConversationContent extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { conversation = [], username, match } = this.props;
    const { showModal } = this.state;

    if (!conversation.length) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className="conversation-content">
        <Modal show={showModal} toggleModal={this.toggleModal} />
        <Messages
          conversation={conversation}
          username={username}
          toggleModal={this.toggleModal}
        />
        <Route
          path={`${match.url}/detail`}
          component={props => (
            <UserDetail username={username} toggleModal={this.toggleModal} />
          )}
        />
      </div>
    );
  }
}

ConversationContent.propTypes = {
  conversation: PropTypes.array,
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

export default ConversationContent;
