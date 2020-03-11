import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import ChatBar from "./ChatBar";
import UserDetail from "./UserDetail";
import Messages from "./Messages";

const Chat = ({ messages, match, error, loading }) => {
  const { username } = match.params;

  if (error) {
    return <h2>Oops something went wrong fetching messages...</h2>;
  } else if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="chat">
      <ChatBar key="bar" username={username} match={match} />
      <div className="chat-content">
        <Messages messages={messages} username={username} />
        <Route
          path={`${match.url}/detail`}
          component={props => <UserDetail {...props} username={username} />}
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
