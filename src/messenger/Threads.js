import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import colours from "../App.css";
import Avatar from "../layout/Avatar";
import Icon from "../layout/Icon";

const ThreadsWrapper = styled.div`
  display: flex;
  border-right: 1px solid ${colours.mediumGrey};
  flex-direction: column;
  flex-basis: 30%;
`;

const ThreadBar = styled.div`
  border-bottom: 1px solid ${colours.mediumGrey};
  padding: 0.85em;
  h2 {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
`;

const ThreadList = styled.ul`
  overflow-y: auto;
  width: 100%;
  list-style: none inside none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    align-items: center;
    padding: 0.4em 0.75em;
    &:hover {
      background: ${colours.lightGrey};
      cursor: pointer;
    }
  }
`;

const UserName = styled.div`
  font-size: 0.9rem;
  span {
    font-size: 0.9em;
    text-transform: capitalize;
  }
  small {
    font-size: 0.8em;
    color: ${colours.darkGrey};
    margin: 2px 0;
    display: block;
  }
`;

const GET_THREADS = gql`
  query {
    threads {
      edges {
        node {
          firstName
          lastName
          lastMessage {
            message
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
          <li onClick={() => history.push(`${match.url}/${thread.username}`)}>
            <Avatar username={thread.username} size="large" />
            <UserName>
              <span>{`${thread.firstName} ${thread.lastName}`}</span>
              <small>{thread.lastMessage.message}</small>
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

Threads.defaultProps = {
  data: {
    loading: true,
  },
};

export default Threads;
