import React from "react";
import mockThreads from "../mocks/threads.js"; // we'll replace this mock data with data from an API in a further exercise

function Threads({ selectThread, currentUsername }) {
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
        {mockThreads.map((user) => (
          <li
            key={user.username}
            className={
              currentUsername === user.username ? "active-thread" : ""
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
