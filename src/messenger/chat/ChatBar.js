import React from "react";
import styled from "styled-components";

import Icon from "../../layout/Icon";
import colours from "../../App.css";

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

const ChatBar = ({ username }) => (
  <ChatBarWrapper>
    <h2>{username}</h2>
    <ChatMenu>
      <Icon name="phone" style={{ margin: "0 0.5em" }} />
      <Icon name="video" style={{ margin: "0 0.5em" }} />
      <Icon name="info-circle" style={{ margin: "0 0.5em" }} />
    </ChatMenu>
  </ChatBarWrapper>
);

export default ChatBar;
