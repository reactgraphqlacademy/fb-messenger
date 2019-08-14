import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logOut, getSession } from "../../auth";

const TopBar = props => {
  const session = getSession();
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} clicks`;
  });

  return (
    <div className="top-bar">
      <a onClick={() => setCount(count + 1)}>
        CLICK ME AND LOOK AT THE DOCUMENT TITLE (TAB)
      </a>
      <ul className={`${props.userPosition || "right"}`}>
        <li>
          <Link to="/login" onClick={logOut}>
            log out
          </Link>
        </li>
        <li>
          <Link to="/profile">
            {session ? session.username : ""}{" "}
            <img alt="profile" src="/images/default.jpg" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
