import React from "react";
import { Link } from "react-router-dom";

import Icon from "../../Layout/Icon";

const ChatBar = ({ username, match, totalMessages }) => (
  <div className="chat-bar">
    <h2>
      {username}
      {totalMessages ? <i> ({totalMessages})</i> : ""}
    </h2>
    <div className="chat-menu">
      <Icon name="phone" />
      <Icon name="video" />
      <Link to={`${match.url}/detail`}>
        <Icon name="info-circle" />
      </Link>
    </div>
  </div>
);

export default ChatBar;
