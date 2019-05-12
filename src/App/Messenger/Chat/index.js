import React from "react";

import UserDetail from "./UserDetail";
import Messages from "./Messages";
import ChatBar from "./ChatBar";

const Chat = ({ selectedUser, messages }) => (
  <div className="conversation">
    <ChatBar selectedUser={selectedUser} />
    <div className="conversation-content">
      <Messages selectedUser={selectedUser} messages={messages} />
      <UserDetail selectedUser={selectedUser} />
    </div>
  </div>
);

export default Chat;
