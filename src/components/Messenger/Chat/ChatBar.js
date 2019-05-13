import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Icon from "../../Layout/Icon";

const ChatBar = ({ username, match }) => (
  <div className="chat-bar">
    <h2>{username}</h2>
    <div className="chat-menu">
      <Icon name="phone" />
      <Icon name="video" />
      <Link to={`${match.url}/detail`}>
        <Icon name="info-circle" />
      </Link>
    </div>
  </div>
);

ChatBar.propTypes = {
  match: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
};

export default ChatBar;
