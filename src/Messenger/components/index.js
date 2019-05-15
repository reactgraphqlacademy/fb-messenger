import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colours from "App/styles/export/colours.css";

import Threads from "./Threads";
import Chat from "./Chat";

const MessengerWrapper = styled.div`
  display: flex;
  flex: 1;
  border-right: 1px solid ${colours.mediumGrey};
`;

const Messenger = ({ match, history }) => (
  <MessengerWrapper>
    <Threads match={match} history={history} />
    <Chat username={match.params.username} />
  </MessengerWrapper>
);

Messenger.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Messenger;
