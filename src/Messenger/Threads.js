import React from "react";

function Threads({ threadList, selectThread, currentThread }) {
  return (
    <div className="threads">
      <div className="thread-bar">
        <h2>
          <i className="icon fas fa-cog" />
          Threads
          <i className="icon fas fa-edit" />
        </h2>
      </div>
      <ul className="thread-list">
        {threadList.map((user) => (
          <li
            key={user.username}
            className={
              currentThread.username === user.username ? "active-thread" : ""
            }
            onClick={() => selectThread(user)}
          >
            <img
              src={`/images/${user.username}.jpg`}
              alt={`${user.username}`}
              className="avatar large"
            />
            <div className="user-name">
              <span>{`${user.name.first} ${user.name.last}`}</span>
              <small>{user.lastMessage}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Threads;
