import React, { Component } from "react"
import "./App.css"

import users from "./mocks/users.js"
import messages from "./mocks/messages.js"

const filterMessageByUsername = username => message => (
  message.from === username ||
  message.to === username
)

class App extends Component {
  constructor() {
    super()
    const selectedUser = users[0]
    this.state = {
      selectedUser: selectedUser,
      messages: messages.filter(filterMessageByUsername(selectedUser.username))
    }
  }

  selectUser = user => {
    this.setState({
      selectedUser: user,
      messages: messages.filter(filterMessageByUsername(user.username))
    })
  }

  newMessage = () => {
    console.log("new msg clicked")
  }

  showSettings = () => {
    console.log("settings clicked")
  }

  render() {
    const selectedUser = this.state.selectedUser
    const conversation = this.state.messages.map((message, i) => (
      <div
        key={i}
        className={`message-wrapper ${
          message.from === "you" ? "sent" : "received"
        }`}
      >
        {message.to === "you" && (
          <img
            src={`images/${this.state.selectedUser.username}_lg.jpg`}
            alt={`${this.state.selectedUser.username}`}
            className="avatar medium"
          />
        )}
        <div className="message">{message.message}</div>
        {message.from === "you" && (
          <div className="message-read">
            <i class="icon fa fa-check-circle" />
          </div>
        )}
      </div>
    ))

    return (
      <div className="App">
        <div className="top-bar">
          <i class="icon fab fa-facebook-messenger" />
        </div>

        <div className="content">
          <div className="messenger">
            <div className="messenger-info-bar">
              <div className="info-bar-content">
                <div onClick={this.showSettings}>
                  <i class="icon fas fa-cog" />
                </div>
                Messenger
                <div onClick={this.newMessage}>
                  <i class="icon fas fa-edit" />
                </div>
              </div>
            </div>
            <div className="messenger-list">
              <ul>
                {users.map((user, i) => (
                  <li
                    key={i}
                    onClick={() => this.selectUser(user)}
                    className="preview"
                  >
                    <img
                      src={`images/${user.username}_lg.jpg`}
                      alt={`${user.username}`}
                      className="avatar large"
                    />
                    <div>
                      <div className="user-name">{`${user.name.first} ${
                        user.name.last
                      }`}</div>
                      <div className="message-preview">message preview</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="conversation">
            <div className="conversation-info-bar">
              <div className="info-bar-content">
                <div>&nbsp;</div>
                <div className="conversation-title">
                  <div className="user-name">
                    {selectedUser.name &&
                      `${selectedUser.name.first} ${selectedUser.name.last}`}
                  </div>
                  <div className="last-active">Active 20m ago</div>
                </div>
                <div className="conversation-menu">
                  <div>
                    <i class="icon fas fa-phone" />
                  </div>
                  <div>
                    <i class="icon fas fa-video" />
                  </div>
                  <div>
                    <i class="icon fas fa-info-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div className="conversation-content-wrapper">
              <div className="conversation-detail">
                <div className="messages">
                  {conversation || <p>You have no messages</p>}
                </div>
                <div className="type-message-wrapper">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="message-box"
                  />
                  <div className="send-button">Send</div>
                </div>
              </div>
              <div className="user-detail-wrapper">
                <div className="user-detail-content">
                  <div className="user-detail">
                    <div className="avatar large">
                      <img
                        src={`images/${selectedUser.username}_lg.jpg`}
                        alt={`${selectedUser.username}`}
                        className="avatar large"
                      />
                    </div>
                    <div className="user-title">
                      <div className="user-name">
                        {selectedUser.name &&
                          `${selectedUser.name.first} ${selectedUser.name.last}`}
                      </div>
                      <div className="last-active">Active 20m ago</div>
                    </div>
                  </div>
                  <div>
                    <i class="icon fas fa-cog" />
                  </div>
                </div>
                <div className="options">Options</div>
                <div className="facebook-profile">Facebook Profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
