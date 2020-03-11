import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import ThreadsContainer from "./ThreadsContainer";
import ChatContainer from "./Chat/ChatContainer";
import ErrorBoundary from "../ErrorBoundary";

const Messenger = ({ match }) => (
  <div className="messenger">
    <ThreadsContainer />
    <Route path={`${match.url}/:username`} component={ChatContainer} />
  </div>
);

Messenger.propTypes = {
  match: PropTypes.object
};

export default Messenger;
