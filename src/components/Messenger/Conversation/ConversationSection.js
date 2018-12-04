import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import ConversationContainer from "./ConversationContainer";

const ConversationSection = ({ match }) => (
  <div className="conversation">
    <Route path={`${match.url}/:username`} component={ConversationContainer} />
  </div>
);

ConversationSection.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(ConversationSection);
