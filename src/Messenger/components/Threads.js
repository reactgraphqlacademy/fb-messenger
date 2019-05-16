import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import colours from "../../App/styles/colours.js";
import Avatar from "../../App/components/Layout/Avatar";
import Icon from "../../App/components/Layout/Icon";

const ThreadsWrapper = styled.div`
  display: flex;
  border-right: 1px solid ${colours.mediumGrey};
  flex-direction: column;
  flex-basis: 30%;
`;

const ThreadBar = styled.div`
  border-bottom: 1px solid ${colours.mediumGrey};
  padding: 1.05em;
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

const UserNameLink = styled(Link)`
  font-size: 0.9rem;
  &:hover {
    text-decoration: none;
  }
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

const Threads = ({ history, match, data }) => {
  let content;
  if (data.loading) {
    content = <p>Loading...</p>;
  } else if (data.error) {
    content = <p>Oops, there was a problem</p>;
  } else {
    const { edges = [] } = data.threadsConnection;
    content = edges.length ? (
      <ThreadList>
        {edges.map(({ node: thread }) => (
          <li key={thread.username}>
            <Link to={`${match.url}/${thread.username}`}>
              <Avatar username={thread.username} size="large" />
            </Link>
            <UserNameLink to={`${match.url}/${thread.username}`}>
              <span>{`${thread.firstName} ${thread.lastName}`}</span>
              <small>{thread.lastMessage.message}</small>
            </UserNameLink>
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

Threads.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export const THREADS_QUERY = gql`
  query fetchThreads {
    threadsConnection {
      edges {
        node {
          username
          firstName
          lastName
          lastMessage {
            message
            id
          }
        }
      }
    }
  }
`;
const fetchThreads = graphql(THREADS_QUERY);

export default fetchThreads(withRouter(Threads));
