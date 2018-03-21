// Libraries
import React, { Component } from "react";

// Styles
import "./App.css";

// Modals
import Modal from "../../Modal";

// Components
import TopBar from "../TopBar/TopBar";
import Messenger from "../Messenger/Messenger";
import Footer from "../Footer/Footer";

// Mocks
import users from "../../mocks/users.js";
import messages from "../../mocks/messages.js";

const filterMessageByUsername = ({ username } = {}) => message =>
  message.from === username || message.to === username;

class App extends Component {
  constructor() {
    super();
    const selectedUser = users[0];
    this.state = {
      selectedUser: selectedUser,
      conversation: messages.filter(filterMessageByUsername(selectedUser)),
      showModal: false
    };
  }

  selectUser = (user = {}) => {
    this.setState({
      ...this.state,
      selectedUser: user,
      conversation: messages.filter(filterMessageByUsername(user))
    });
  };

  toggleModal = () => {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal
    });
  };

  render() {
    const loggedUser = { name: "Alex" };

    return (
      <div className="app">
        <Modal show={this.state.showModal} toggleModal={this.toggleModal} />
        <TopBar
          name={loggedUser.name}
          toggleModal={this.toggleModal}
          userPosition={this.userPosition}
        />
        <Messenger
          showSettings={this.toggleModal}
          users={users}
          selectUser={this.selectUser}
          selectedUser={this.state.selectedUser}
          conversation={this.state.conversation}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
