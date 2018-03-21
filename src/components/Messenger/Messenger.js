// Libraries
import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Threads from "./Threads/Threads";
import Conversation from "./Conversation/Conversation";

class Messenger extends Component {
  render() {
    // Props
    const {
      showSettings,
      users,
      selectUser,
      selectedUser,
      conversation
    } = this.props;

    return (
      <div className="messenger">
        <Threads
          showSettings={showSettings}
          users={users}
          selectUser={selectUser}
        />
        <Conversation selectedUser={selectedUser} conversation={conversation} />
      </div>
    );
  }
}

Messenger.propTypes = {
  showSettings: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      gender: PropTypes.string,
      name: PropTypes.shape({
        title: PropTypes.string,
        first: PropTypes.string,
        last: PropTypes.string
      }),
      email: PropTypes.string,
      username: PropTypes.string
    })
  ),
  selectUser: PropTypes.func,
  selectedUser: PropTypes.shape({
    gender: PropTypes.string,
    name: PropTypes.shape({
      title: PropTypes.string,
      first: PropTypes.string,
      last: PropTypes.string
    }),
    email: PropTypes.string,
    username: PropTypes.string
  }),
  conversation: PropTypes.arrayOf(PropTypes.object)
};

export default Messenger;
