import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// import GET_MESSAGES from './Messages.graphql'
import { GET_THREADS } from "../Threads";
import colours from "../../App.css";
import Avatar from "../../layout/Avatar";
import Icon from "../../layout/Icon";

const MessagesWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
`;

const MessagesList = styled.div`
  padding: 1em;
  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;
  p {
    color: ${colours.darkGrey};
    font-size: 0.9em;
  }
`;

const NewMessageForm = styled.form`
  min-height: 20px;
  padding: 0.5em;
  border-top: 1px solid ${colours.mediumGrey};
  display: flex;
  justify-content: space-between;
  height: 40px;
  input,
  button {
    font-size: 0.9em;
  }
`;

const MessageBox = styled.input`
  border-color: transparent;
  width: 90%;
`;

const MessageWrapper = styled.div`
  padding: 0.5em;
  display: flex;

  ${props =>
    props.from === "sent" &&
    `
      justify-content: flex-end;
    `}
`;

const MessageRead = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`;

const Message = styled.div`
  border-radius: 20px;
  padding: 0.5em 1em;
  display: inline-block;
  font-size: 0.9rem;
  background: ${props =>
    props.from === "received" ? colours.lightGrey : colours.lightBlue};
  color: ${props =>
    props.from === "received" ? colours.black : colours.white};
`;

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
