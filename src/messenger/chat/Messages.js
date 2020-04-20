import React, { useRef, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { GET_THREADS } from "../Threads";
import Avatar from "../../layout/Avatar";
import Icon from "../../layout/Icon";
import {
  MessagesWrapper,
  MessagesList,
  NewMessageForm,
  MessageBox,
  MessageWrapper,
  MessageRead,
  Message
} from "./Messages.styles";

const GET_MESSAGES = gql`
  query messages($username: String!) {
    messages(username: $username) {
      edges {
        node {
          # remove this so students need to fix https://github.com/apollographql/apollo-client/issues/2510
          # ask they what that id means for Apollo.
          id
          from
          text
        }
      }
    }
  }
`;

const SEND_MESSAGES = gql`
  mutation sendMessage($from: String!, $to: String!, $text: String!) {
    sendMessage(message: { from: $from, to: $to, text: $text }) {
      message {
        id
        from
        to
        text
      }
    }
  }
`;

const Messages = ({ username }) => {
  const [newMessage, setNewMessage] = React.useState("");
  const messageListDiv = useRef(null);
  const [sendMessageMutation] = useMutation(SEND_MESSAGES, {
    refetchQueries: [
      {
        query: GET_THREADS
      }
    ],
    update(
      cache,
      {
        data: {
          sendMessage: { message }
        }
      }
    ) {
      const { messages } = cache.readQuery({
        query: GET_MESSAGES,
        variables: { username }
      });

      const data = {
        messages: {
          ...messages,
          edges: [
            ...messages.edges,
            { node: message, __typename: "MessageEdge" }
          ]
        }
      };

      cache.writeQuery({
        query: GET_MESSAGES,
        variables: { username },
        data
      });
    }
  });

  const { error, data: { messages } = {}, loading } = useQuery(GET_MESSAGES, {
    variables: { username }
  });

  useEffect(() => {
    if (messageListDiv.current)
      messageListDiv.current.scrollTop = messageListDiv.current.scrollHeight;
  }, [messages]);

  const sendMessage = async e => {
    e.preventDefault();
    await sendMessageMutation({
      variables: {
        to: username,
        from: "me",
        text: newMessage
      }
    });

    setNewMessage("");
  };

  if (error) {
    return <h2>{error.message}</h2>;
  } else if (loading) {
    return <h2>Loading...</h2>;
  }

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
          onChange={e => setNewMessage(e.target.value)}
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
