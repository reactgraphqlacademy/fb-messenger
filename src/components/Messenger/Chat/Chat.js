import React, { Component } from "react";
import { Route } from "react-router";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChatBar from "./ChatBar";
import UserDetail from "./UserDetail";
import Messages from "./Messages";

const MessagesWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
`;

const Chat = ({ messages = [], match }) => {
  const { username } = match.params;

  if (!messages.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <ChatWrapper>
      <ChatBar username={username} match={match} />
      <MessagesWrapper>
        <Messages messages={messages} username={username} />
        <Route
          path={`${match.url}/detail`}
          component={() => <UserDetail username={username} />}
        />
      </MessagesWrapper>
    </ChatWrapper>
  );
};

Chat.propTypes = {
  messages: PropTypes.array,
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

export default Chat;
