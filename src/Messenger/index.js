import React, { useState } from "react";

import mockMessages from "../mocks/messages.js"; // we'll replace this mock data with data from an API in a further exercise
import mockUsers from "../mocks/users.js"; // we'll replace this mock data with data from an API in a further exercise

// showSettings
// selectedUser

// we'll replace this mockUsers initial state with data from an API in a further exercise
const selectedUserInitialState = mockUsers[0];

// helper function for the exercise
const filterMessageByUsername = ({ username } = {}) => (message) =>
  message.from === username || message.to === username;

function Messenger({ showSettings }) {
  // TODO MOVE THIS OUTSIDE THE RENDER AND SHOW WHY
  const messagesInitialState = mockMessages.filter(
    filterMessageByUsername(selectedUserInitialState)
  );

  const [selectedUser, setSelectedUser] = useState(selectedUserInitialState);

  const [messages, setMessages] = useState(messagesInitialState);

  function selectUser(user = {}) {
    setSelectedUser(user);
    setMessages(mockMessages.filter(filterMessageByUsername(user)));
  }

  const conversation = messages.map((message) => (
    <div
      key={message.id}
      className={`message-wrapper ${
        message.from === "you" ? "sent" : "received"
      }`}
    >
      {message.to === "you" && (
        <img
          src={`/images/${selectedUser.username}.jpg`}
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
  ));

  return (
    <div className="messenger">
      <div className="threads">
        <div className="thread-bar">
          <h2>
            <a onClick={showSettings}>
              <i className="icon fas fa-cog" />
            </a>
            Threads
            <i className="icon fas fa-edit" />
          </h2>
        </div>
        <ul className="thread-list">
          {mockUsers.map((user) => (
            <li
              key={user.username}
              className={
                selectedUser.username === user.username ? "active-thread" : ""
              }
              onClick={() => selectUser(user)}
            >
              <img
                src={`/images/${user.username}.jpg`}
                alt={`${user.username}`}
                className="avatar large"
              />
              <div className="user-name">
                <span>{`${user.name.first} ${user.name.last}`}</span>
                <small>{user.lastMessage}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat">
        <div className="chat-bar">
          <h2>
            {selectedUser.name &&
              `${selectedUser.name.first} ${selectedUser.name.last}`}
          </h2>
          <div className="chat-menu">
            <i className="icon fas fa-phone" />
            <i className="icon fas fa-video" />
            <i className="icon fas fa-info-circle" />
          </div>
        </div>
        <div className="chat-content">
          <div className="messages">
            <div className="list">
              {conversation || <p>You have no messages</p>}
            </div>
            <div className="new-message">
              <input
                type="text"
                disabled={true}
                placeholder="🚧 work in progress..."
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
                  src={`/images/${selectedUser.username}.jpg`}
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
            <div>User profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messenger;
