import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import Avatar from "../Layout/Avatar";
import Icon from "../Layout/Icon";

const Threads = ({ threads }) => (
  <div className="threads">
    <div className="thread-bar">
      <h2>
        <Icon name="cog" />
        Messenger
        <Icon name="edit" />
      </h2>
    </div>
    <Route
      render={({ match, history }) => (
        <ul className="thread-list">
          {threads.map((thread, i) => (
            <li
              key={i}
              onClick={() => history.push(`${match.url}/${thread.username}`)}
            >
              <Avatar username={thread.username} size="large" />
              <p className="user-name">
                <span>{`${thread.name.first} ${thread.name.last}`}</span>
                <small>{`${thread.lastMessage.message}`}</small>
              </p>
            </li>
          ))}
        </ul>
      )}
    />
  </div>
);

Threads.propTypes = {
  threads: PropTypes.array
};

export default Threads;
