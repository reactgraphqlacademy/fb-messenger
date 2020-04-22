import React, { useRef, useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Avatar from "../../layout/Avatar";
import Icon from "../../layout/Icon";
import {
  MessagesWrapper,
  MessagesList,
  NewMessageForm,
  MessageBox,
  MessageWrapper,
  MessageRead,
  Message,
} from "./Messages.styles";

const Messages = ({ username }) => {
  const [newMessage, setNewMessage] = useState("");
  const messageListDiv = useRef(null);

  // you don't need this hardcoded messages variable once you implement the useQuery to fetch messages
  // 🚧 messages should come from useQuery
  let messages = { edges: [] };

  useEffect(() => {
    if (messageListDiv.current)
      messageListDiv.current.scrollTop = messageListDiv.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    // 🚧 you need to send a mutation here
    setNewMessage("");
  };

  const conversation = messages.edges.map(({ node }, i) => (
    <MessageWrapper key={i} from={node.from === "you" ? "sent" : "received"}>
      {node.to === "you" && <Avatar username={username} size="medium" />}
      <Message from={node.from === "you" ? "sent" : "received"}>
        {node.text}
      </Message>
      {node.from === "you" && (
        <MessageRead>
          <Icon name="check-circle" size={0.6} />
        </MessageRead>
      )}
    </MessageWrapper>
  ));

  return (
    <MessagesWrapper>
      <MessagesList ref={messageListDiv}>
        {conversation.length ? conversation : <p>You have no messages</p>}
      </MessagesList>
      <NewMessageForm onSubmit={sendMessage}>
        <MessageBox
          onChange={(e) => setNewMessage(e.target.value)}
          type="text"
          value={newMessage}
          required
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </NewMessageForm>
    </MessagesWrapper>
  );
};

export default Messages;
