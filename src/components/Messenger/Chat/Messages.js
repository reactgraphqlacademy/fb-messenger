import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

import colours from "../../../styles/export/colours.css";
import { receiveMessage } from "../../../actions/messages";
import * as api from "../../../api/message";
import Avatar from "../../Layout/Avatar";

const Wrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
`;

const MessagesList = styled.div`
  padding: 1em;
  overflow-y: auto;
  p {
    color: ${colours.darkGrey};
    font-size: 0.9em;
  }
`;

const NewMessage = styled.div`
  min-height: 60px;
  padding: 1em;
  border-top: 1px solid ${colours.mediumGrey};
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export const InputMessage = styled.input`
  border-color: transparent;
  width: 90%;
`;

const MessageWrapper = styled.div`
  padding: 0.5em;
  display: flex;
  ${props =>
    props.from === "sent" &&
    css`
      justify-content: flex-end;
    `}
`;

export const Message = styled.div`
  border-radius: 20px;
  padding: 0.5em 1em;
  display: inline-block;
  font-size: 0.9rem;
  background: ${props =>
    props.from === "received" ? colours.lightGrey : colours.lightBlue};
  color: ${props =>
    props.from === "received" ? colours.black : colours.white};
`;

const Messages = ({ username, receiveMessage, messages = [], api }) => {
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    const message = await api.sendMessage({
      message: newMessage,
      to: username
    });

    receiveMessage(message);

    setNewMessage("");
  };

  const styledConversation = messages.map((message, i) => (
    <MessageWrapper key={i} from={message.from === "you" ? "sent" : "received"}>
      {message.to === "you" && <Avatar username={username} size="medium" />}
      <Message from={message.from === "you" ? "sent" : "received"}>
        {message.message}
      </Message>
    </MessageWrapper>
  ));

  return (
    <Wrapper>
      <MessagesList>
        {styledConversation.length ? (
          styledConversation
        ) : (
          <p>You have no messages</p>
        )}
      </MessagesList>
      <NewMessage>
        <InputMessage
          onChange={e => setNewMessage(e.target.value)}
          type="text"
          value={newMessage}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </NewMessage>
    </Wrapper>
  );
};

Messages.defaultProps = {
  api
};

Messages.propTypes = {
  messages: PropTypes.array,
  username: PropTypes.string.isRequired,
  api: PropTypes.object.isRequired,
  receiveMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = {
  receiveMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
