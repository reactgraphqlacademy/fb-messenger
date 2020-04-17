import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// import { graphql } from "react-apollo";
// import gql from "graphql-tag";

// import MESSAGES_QUERY from './Messages.graphql'
// import { THREADS_QUERY } from '../Threads'
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
  overflow-y: auto;
  p {
    color: ${colours.darkGrey};
    font-size: 0.9em;
  }
`;

const NewMessage = styled.div`
  min-height: 20px;
  padding: 1em;
  border-top: 1px solid ${colours.mediumGrey};
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  height: 60px;
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
          from
          message
        }
      }
    }
  }
`;

const Messages = ({ username }) => {
  const [newMessage, setNewMessage] = React.useState("");

  const sendMessage = async () => {
    // await this.props.sendMessage({
    //   variables: {
    //     to: username,
    //     from: "me",
    //     message: newMessage
    //   }
    // });

    setNewMessage("");
  };

  const { error, data, loading } = useQuery(GET_MESSAGES, {
    variables: { username }
  });

  if (error) {
    return <h2>{error.message}</h2>;
  } else if (loading) {
    return <h2>Loading...</h2>;
  }

  const conversation = data.messages.edges.map(({ node }, i) => (
    <MessageWrapper key={i} from={node.from === "you" ? "sent" : "received"}>
      {node.to === "you" && <Avatar username={username} size="medium" />}
      <Message from={node.from === "you" ? "sent" : "received"}>
        {node.message}
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
      <MessagesList>
        {conversation.length ? conversation : <p>You have no messages</p>}
      </MessagesList>
      <NewMessage>
        <MessageBox
          onChange={e => setNewMessage(e.target.value)}
          type="text"
          value={newMessage}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </NewMessage>
    </MessagesWrapper>
  );
};

// use the following function to send a message
// const sendMessage = graphql(gql`
//     TODO add a mutation here
// `,
// {
//   options: (props) => ({
//     refetchQueries: // TODO https://www.apollographql.com/docs/react/advanced/caching.html#after-mutations
//     update: (store, { data: { sendMessage } }) => {
//       // TODO you need to update a thread and write the Query again in the cache
//       // Hint https://www.apollographql.com/docs/react/advanced/caching.html#writequery-and-writefragment
//     }
//   }),
//   name: 'sendMessage',
// })

export default Messages;
