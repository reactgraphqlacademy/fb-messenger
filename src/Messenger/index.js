import React, { useState } from "react";

import mockMessages from "../mocks/messages.js"; // we'll replace this mock data with data from an API in a further exercise
import Threads from "./Threads";

// helper function for this exercise. You don't have to understand how this function is implemented at this point
const filterMessageByUsername = (username) => (message) =>
  message.from === username || message.to === username;

// we'll replace this initial state with a real implementation in the next unit
const currentUsernameInitialState = "thetraveler";

// we'll replace this mockedMessages initial state with data from an API in the next unit
const messagesInitialState = mockMessages.filter(
  filterMessageByUsername(currentUsernameInitialState)
);

function Messenger() {
  const [currentUsername, setCurrentUsername] = useState(
    currentUsernameInitialState
  );
  const [messages, setMessages] = useState(messagesInitialState);

  function selectThread(user = {}) {
    setCurrentUsername(user.username);
    setMessages(mockMessages.filter(filterMessageByUsername(user.username)));
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
    <div className="messenger">
      <Threads
        selectThread={selectThread}
        currentUsername={currentUsername}
      />
      <div className="chat">
        <div className="chat-bar">
          <h2>
            {currentUsername}
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
                  src={`/images/${currentUsername}.jpg`}
                  alt={currentUsername}
                />
                <div className="user-title">
                  <div className="user-name">
                    {currentUsername}
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
