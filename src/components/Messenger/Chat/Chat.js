import React from "react";
import { useSelector } from "react-redux";
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

function selectIsMessageDetailOpen(state) {
  return state.ui.isMessageDetailOpen;
}

const Chat = ({ messages = [], match }) => {
  const { username } = match.params;
  const isMessageDetailOpen = useSelector(selectIsMessageDetailOpen);

  if (!messages.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <ChatWrapper>
      <ChatBar messages={messages} username={username} match={match} />
      <MessagesWrapper>
        <Messages messages={messages} username={username} />
        {isMessageDetailOpen && <UserDetail username={username} />}
      </MessagesWrapper>
    </ChatWrapper>
  );
};

export default Chat;
