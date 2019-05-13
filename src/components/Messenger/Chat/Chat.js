import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import UserDetail from "./UserDetail";
import Messages from "./Messages";
import ChatBar from "./ChatBar";

const Chat = ({ messages, match }) => {
  const { username } = match.params;

  if (!messages.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="chat">
      <ChatBar key="bar" username={username} match={match} />
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
