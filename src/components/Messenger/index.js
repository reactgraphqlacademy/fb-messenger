import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import ThreadsContainer from "./ThreadsContainer";
import ChatContainer from "./Chat/ChatContainer";
import ErrorBoundary from "../ErrorBoundary";

const Messenger = ({ match }) => (
  <div className="messenger">
    <ErrorBoundary>
      <ThreadsContainer />
    </ErrorBoundary>
    <ErrorBoundary fallback={<h2>Chat failed 😢</h2>}>
      <Route path={`${match.url}/:username`} component={ChatContainer} />
    </ErrorBoundary>
  </div>
);

Messenger.propTypes = {
  match: PropTypes.object
};

export default Messenger;
