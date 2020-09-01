import React, { useState } from "react";
import Modal from "./Layout/Modal";
import LeanJSLogo from "./Layout/LeanJSLogo";
import mockUsers from "./mocks/threads"; // we'll replace this mock data with data from an API in a further exercise
import mockMessages from "./mocks/messages"; // we'll replace this mock data with data from an API in a further exercise

// helper function for this exercise. You don't have to understand how this function is implemented at this point
const filterMessageByUsername = (username) => (message) =>
  message.from === username || message.to === username;

// we'll replace this mockUsers initial state with real data in the next unit
const currentUsernameInitialState = mockUsers[0].username;

// we'll replace this mockedMessages initial state with data from an API in the next unit
const messagesInitialState = mockMessages.filter(
  filterMessageByUsername(currentUsernameInitialState)
);

function App() {
  const [showModal, setShowModal] = useState();
  const [currentUsername, setCurrentUsername] = useState(
    currentUsernameInitialState
  );
  const [messages, setMessages] = useState(messagesInitialState);

  function selectThread(user) {
    setCurrentUsername(user.username);
    setMessages(mockMessages.filter(filterMessageByUsername(user.username)));
  }

  function toggleModal() {
    setShowModal(!showModal);
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
          src={`/images/${currentUsername}.jpg`}
          alt={`${currentUsername}`}
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
    <div className="app">
      <Modal show={showModal} toggleModal={toggleModal} />
      <div className="top-bar">
        <i className="icon fab fa-facebook-messenger" />
        <a onClick={toggleModal} className="username right">
          Profile
        </a>
      </div>
      <div className="messenger">
        <div className="threads">
          <div className="thread-bar">
            <h2>
              <i className="icon fas fa-cog" />
              Threads
              <i className="icon fas fa-edit" />
            </h2>
          </div>
          <ul className="thread-list">
            {mockUsers.map((user) => (
              <li
                key={user.username}
                className={
                  currentUsername.username === user.username
                    ? "active-thread"
                    : ""
                }
                onClick={() => selectThread(user)}
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
            <h2>{currentUsername}</h2>
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
                    src={`/images/${currentUsername}.jpg`}
                    alt={`${currentUsername}`}
                  />
                  <div className="user-title">
                    <div className="user-name">
                      {currentUsername.name &&
                        `${currentUsername.name.first} ${currentUsername.name.last}`}
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
      <footer className="footer">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactgraphql.academy"
            >
              React GraphQL Academy
            </a>
          </li>
          <li>by</li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leanjs.com"
            >
              <LeanJSLogo width={25} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
