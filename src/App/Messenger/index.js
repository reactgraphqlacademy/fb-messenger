import React, { Component } from "react";
import Threads from "./Threads";
import Chat from "./Chat";
import messages from "../../mocks/messages";
import users from "../../mocks/users";

const filterMessageByUsername = ({ username } = {}) => message =>
  message.from === username || message.to === username;

class Messenger extends Component {
  constructor() {
    super();
    const selectedUser = users[0];
    this.state = {
      selectedUser: selectedUser,
      messages: messages.filter(filterMessageByUsername(selectedUser))
    };
  }

  selectUser = (user = {}) => {
    this.setState({
      selectedUser: user,
      messages: messages.filter(filterMessageByUsername(user))
    });
  };

  showSettings = () => {
    this.props.toggleModal();
  };

  render() {
    const { selectedUser, messages } = this.state;

    return (
      <div className="messenger">
        <Threads
          showSettings={this.showSettings}
          selectUser={this.selectUser}
        />
        <Chat selectedUser={selectedUser} messages={messages} />
      </div>
    );
  }
}

export default Messenger;
