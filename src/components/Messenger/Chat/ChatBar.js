import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { toggleMessageDetail } from "../../../actions";
import Icon from "../../Layout/Icon";
import colours from "../../../styles/export/colours.css";

const ChatBarWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${colours.mediumGrey};
  padding: 1.05em;
  align-items: center;
  h2 {
    text-transform: capitalize;
  }
`;

const ChatMenu = styled.div`
  position: absolute;
  right: 5px;
  top: 15px;
  & > div {
    display: inline-block;
  }
`;

const ChatBar = ({ username, messages }) => {
  const dispatch = useDispatch();

  return (
    <ChatBarWrapper>
      <h2>
        {username}
        {messages.length ? (
          <em>
            &nbsp; (<strong>{messages.length}</strong> messages)
          </em>
        ) : (
          ""
        )}
      </h2>
      <ChatMenu>
        <Icon name="phone" style={{ margin: "0 0.5em" }} />
        <Icon name="video" style={{ margin: "0 0.5em" }} />
        <a onClick={() => dispatch(toggleMessageDetail())}>
          <Icon name="info-circle" active style={{ margin: "0 0.5em" }} />
        </a>
      </ChatMenu>
    </ChatBarWrapper>
  );
};

export default ChatBar;
