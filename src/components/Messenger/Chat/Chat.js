import React from "react";

import ChatBar from "./ChatBar";
import UserDetail from "./UserDetail";
import Messages from "./Messages";

const Chat = ({ messages = [], match }) => {
  const { username } = match.params;

  if (!messages.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="chat">
      <ChatBar
        username={username}
        match={match}
        totalMessages={messages.length}
      />
      <div className="chat-content">
        <Messages messages={messages} username={username} />
        <UserDetail username={username} />
      </div>
    </div>
  );
};

export default Chat;
