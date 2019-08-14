import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as api from "../../../api/message";
import Chat from "./Chat";

const ChatContainer = ({ match }) => {
  const [messages, setMessages] = useState([]);
  const {
    params: { username }
  } = match;

  useEffect(() => {
    fetchMessages(username);
  }, [username]);

  const fetchMessages = username => {
    setMessages([]);
    setTimeout(() => {
      api.fetchMessages(username).then(messages => {
        setMessages(messages);
      });
    }, 1000);
  };

  return <Chat messages={messages} match={match} />;
};

export default ChatContainer;
