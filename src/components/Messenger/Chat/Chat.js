import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChatBar from "./ChatBar";
import UserDetail from "./UserDetail";
import Messages from "./Messages";

const MessagesWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Chat = ({ messages = [], match, isMessageDetailOpen }) => {
  const { username } = match.params;

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

const mapStateToProps = state => ({
  isMessageDetailOpen: state.ui.isMessageDetailOpen
});

Chat.propTypes = {
  messages: PropTypes.array,
  isMessageDetailOpen: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Chat);
