import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Avatar from "../layout/Avatar";
import Icon from "../layout/Icon";
import {
  ThreadsWrapper,
  ThreadBar,
  ThreadList,
  UserName,
} from "./Threads.styles";

export const GET_THREADS = gql`
  query {
    threads {
      edges {
        node {
          firstName
          lastName
          lastMessage {
            text
          }
          username
        }
      }
    }
  }
`;

const Threads = ({ history, match }) => {
  const { data, error, loading } = useQuery(GET_THREADS);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Oops, there was a problem</p>;
  } else {
    const {
      threads: { edges },
    } = data;
    content = edges.length ? (
      <ThreadList>
        {edges.map(({ node: thread }) => (
          <li
            onClick={() => history.push(`${match.url}/${thread.username}`)}
            key={thread.username}
          >
            <Avatar username={thread.username} size="large" />
            <UserName>
              <span>{`${thread.firstName} ${thread.lastName}`}</span>
              <small>{thread.lastMessage.text}</small>
            </UserName>
          </li>
        ))}
      </ThreadList>
    ) : (
      <p>There are no messages</p>
    );
  }

  return (
    <ThreadsWrapper>
      <ThreadBar>
        <h2>
          <Icon name="cog" />
          Messenger
          <Icon name="edit" />
        </h2>
      </ThreadBar>
      {content}
    </ThreadsWrapper>
  );
};

export default Threads;
