import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import colours from "../App.css";

import Threads from "./Threads";
import Chat from "./chat";

const MessengerWrapper = styled.div`
  display: flex;
  flex: 1;
  border-right: 1px solid ${colours.mediumGrey};
`;

const Messenger = ({ match, history }) => (
  <MessengerWrapper>
    <Threads match={match} history={history} />
    <Route path={`${match.url}/:username`} component={Chat} />
  </MessengerWrapper>
);

export default Messenger;
