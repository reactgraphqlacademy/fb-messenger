// Libraries
import React from "react";
import PropTypes from "prop-types";

const Threads = props => {
  // Props
  const { showSettings, users, selectUser } = props;
  return (
    <div className="threads">
      <div className="thread-bar">
        <h2>
          <a onClick={showSettings}>
            <i className="icon fas fa-cog" />
          </a>
          Messenger
          <i className="icon fas fa-edit" />
        </h2>
      </div>
      <ul className="thread-list">
        {users.map((user, i) => (
          <li key={i} onClick={() => selectUser(user)}>
            <img
              src={`images/${user.username}_lg.jpg`}
              alt={`${user.username}`}
              className="avatar large"
            />
            <div className="user-name">
              <span>{`${user.name.first} ${user.name.last}`}</span>
              <small>message preview</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Threads.propTypes = {
  showSettings: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      gender: PropTypes.string,
      name: PropTypes.shape({
        title: PropTypes.string,
        first: PropTypes.string,
        last: PropTypes.string
      }),
      email: PropTypes.string,
      username: PropTypes.string
    })
  ),
  selectUser: PropTypes.func
};

export default Threads;
