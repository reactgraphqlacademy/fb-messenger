import React from "react";

function TopBar(props) {
  return (
    <div className="top-bar">
      <i className="icon fab fa-facebook-messenger" />
      <a onClick={props.toggleModal} className="username right">
        Profile
      </a>
    </div>
  );
}

export default TopBar;
