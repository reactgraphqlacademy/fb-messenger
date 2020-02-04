import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { receiveMessages } from "../../../actions/messages";
import * as api from "../../../api/message";
import Chat from "./Chat";

function selectMessages(state) {
  return state.messages;
}

const ChatContainer = props => {
  const { match } = props;
  const { username } = match.params;

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .fetchMessages(username)
      .then(messages => dispatch(receiveMessages(messages)));
  }, [username]);

  return <Chat messages={messages} match={match} />;
};

export default ChatContainer;
