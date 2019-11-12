import React, { useState, useEffect } from "react";
import { fetchMessages } from "../../../api/message";
import Chat from "./Chat";

const ChatContainer = ({ match }) => {
  const [messages, setMessages] = useState([]);
  const {
    params: { username }
  } = match;

  useEffect(() => {
    setMessages([]);
    setTimeout(() => {
      fetchMessages(username).then(messages => {
        setMessages(messages);
      });
    }, 1000);
  }, [username, fetchMessages]);

  return <Chat messages={messages} match={match} />;
};

export default ChatContainer;
