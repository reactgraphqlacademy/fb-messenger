import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import colours from "../../styles/export/colours.css";
import ThreadsContainer from "./ThreadsContainer";
import ChatContainer from "./Chat/ChatContainer";

const MessengerWrapper = styled.div`
  display: flex;
  flex: 1;
  border-right: 1px solid ${colours.mediumGrey};
`;

const Messenger = ({ match }) => (
  <MessengerWrapper>
    <ThreadsContainer />
    <Route path={`${match.url}/:username`} component={ChatContainer} />
  </MessengerWrapper>
);

export default Messenger;
