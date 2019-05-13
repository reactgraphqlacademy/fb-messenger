import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import ChatBar from "./ChatBar";
import UserDetail from "./UserDetail";
import Messages from "./Messages";

const Chat = ({ messages, match }) => {
  const { username } = match.params;

  if (!messages.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="chat">
      <ChatBar username={username} match={match} />
      <div className="chat-content">
        <Messages messages={messages} username={username} />
        <Route
          path={`${match.url}/detail`}
          component={() => <UserDetail username={username} />}
        />
      </div>
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.array,
  match: PropTypes.object.isRequired
};

export default Chat;
