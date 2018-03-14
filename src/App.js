import React, { Component } from "react"
import "./App.css"
import Modal from "./Modal"

import users from "./mocks/users.js"
import messages from "./mocks/messages.js"

const filterMessageByUsername = ({ username } = {}) => message => (
  message.from === username ||
  message.to === username
)

class App extends Component {
  constructor() {
    super()
    const selectedUser = users[0]
    this.state = {
      selectedUser: selectedUser,
      conversation: messages.filter(filterMessageByUsername(selectedUser)),
      showModal: false,
    }
  }

  selectUser = (user = {}) => {
    this.setState({
      ...this.state,
      selectedUser: user,
      conversation: messages.filter(filterMessageByUsername(user))
    })
  }

  newMessage = () => {

  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal,
    })
  }

  showSettings = () => {
    this.toggleModal()
  }

  render() {
    const selectedUser = this.state.selectedUser
    const styledConversation = this.state.conversation.map((message, i) => (
      <div
        key={i}
        className={`message-wrapper ${
          message.from === "you" ? "sent" : "received"
        }`}
      >
        {message.to === "you" && (
          <img
            src={`images/${selectedUser.username}_lg.jpg`}
            alt={`${selectedUser.username}`}
            className="avatar medium"
          />
        )}
        <div className="message">{message.message}</div>
        {message.from === "you" && (
          <div className="message-read">
            <i className="icon fa fa-check-circle" />
          </div>
        )}
      </div>
    ))

    const loggedUser = { name: 'Alex' }
    const { showModal } = this.state

    return (
      <div className="app">
        <Modal
          show={showModal}
          toggleModal={this.toggleModal}
        />
        <div className="top-bar">
          <i className="icon fab fa-facebook-messenger" />
          <span
            onClick={this.toggleModal}
            className={`username ${this.userPosition || 'left'}`}
          >
            {this.selectUser.name}
          </span>
        </div>
        <div className="messenger">
          <div className="threads">
            <div className="thread-bar">
              <h2>
                <a onClick={this.showSettings}>
                  <i className="icon fas fa-cog" />
                </a>
                Messenger
                <a onClick={this.newMessage}>
                  <i className="icon fas fa-edit" />
                </a>
              </h2>
            </div>
            <ul className="thread-list">
              {users.map((user, i) => (
                <li key={i} onClick={() => this.selectUser(user)}>
                  <img
                    src={`images/${user.username}_lg.jpg`}
                    alt={`${user.username}`}
                    className="avatar large"
                  />
                  <div className="user-name">
                    <span>{`${user.name.first} ${user.name.last}`}</span>
                    <small>message preview</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="conversation">
            <div className="conversation-bar">
              <h2>
                  {selectedUser.name &&
                    `${selectedUser.name.first} ${selectedUser.name.last}`}
              </h2>
              <div className="conversation-menu">
                <i className="icon fas fa-phone" />
                <i className="icon fas fa-video" />
                <i className="icon fas fa-info-circle" />
              </div>
            </div>
            <div className="conversation-content">
              <div className="messages">
                <div className="list">
                  {styledConversation || <p>You have no messages</p>}
                </div>
                <div className="new-message">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="message-box"
                  />
                  <button>Send</button>
                </div>
              </div>
              <div className="user-detail">
                <div className="user">
                  <div>
                    <img
                      className="avatar large"
                      src={`images/${selectedUser.username}_lg.jpg`}
                      alt={`${selectedUser.username}`}
                    />
                    <div className="user-title">
                      <div className="user-name">
                        {selectedUser.name &&
                          `${selectedUser.name.first} ${selectedUser.name.last}`}
                      </div>
                      <div className="last-active">
                        Active {Math.floor(Math.random() * 3) + 1}m ago
                      </div>
                    </div>
                  </div>
                  <i className="icon fas fa-cog" />
                </div>
                <div>Options</div>
                <div>Facebook Profile</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          ReactJS Academy
        </div>
      </div>
    )
  }
}

export default App
