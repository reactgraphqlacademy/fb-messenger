import React, { useState } from "react";

import mockMessages from "../mocks/messages.js"; // we'll replace this mock data with data from an API in a further exercise
import mockThreads from "../mocks/threads.js"; // we'll replace this mock data with data from an API in a further exercise
import Threads from "./Threads";

// currentThread

// we'll replace this mockThreads initial state with data from an API in a further exercise
const selectedUserInitialState = mockThreads[0];

// helper function for the exercise
const filterMessageByUsername = ({ username } = {}) => (message) =>
  message.from === username || message.to === username;

function Messenger() {
  // TODO MOVE THIS OUTSIDE THE RENDER AND SHOW WHY
  const messagesInitialState = mockMessages.filter(
    filterMessageByUsername(selectedUserInitialState)
  );

  const [currentThread, setSelectedUser] = useState(selectedUserInitialState);
  const [messages, setMessages] = useState(messagesInitialState);
  //   const [{ currentThread, messages }, setState] = useState({
  //     currentThread: selectedUserInitialState,
  //     messages: messagesInitialState,
  //   });

  function selectThread(user = {}) {
    setSelectedUser(user);
    setMessages(mockMessages.filter(filterMessageByUsername(user)));
  }

  //   function selectThread(user = {}) {
  //     setState({
  //       currentThread: user,
  //       messages: mockMessages.filter(filterMessageByUsername(user)),
  //     });
  //   }

  const conversation = messages.map((message) => (
    <div
      key={message.id}
      className={`message-wrapper ${
        message.from === "you" ? "sent" : "received"
      }`}
    >
      {message.to === "you" && (
        <img
          src={`/images/${currentThread.username}.jpg`}
          alt={`${currentThread.username}`}
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
        threadList={mockThreads}
        currentThread={currentThread}
      />
      <div className="chat">
        <div className="chat-bar">
          <h2>
            {currentThread.name &&
              `${currentThread.name.first} ${currentThread.name.last}`}
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
                  src={`/images/${currentThread.username}.jpg`}
                  alt={`${currentThread.username}`}
                />
                <div className="user-title">
                  <div className="user-name">
                    {currentThread.name &&
                      `${currentThread.name.first} ${currentThread.name.last}`}
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
