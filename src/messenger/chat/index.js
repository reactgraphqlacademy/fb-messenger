import React from "react";
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

const Chat = ({ match }) => {
  const { username } = match.params;

  return (
    <ChatWrapper>
      <ChatBar username={username} />
      <MessagesWrapper>
        <Messages username={username} />
        <UserDetail username={username} />
      </MessagesWrapper>
    </ChatWrapper>
  );
};

export default Chat;
