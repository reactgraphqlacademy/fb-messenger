import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";

const Root = ({ graphqlClient }) => (
  <Router>
    <ApolloProvider client={graphqlClient}>
      <Route path="/" component={App} />
    </ApolloProvider>
  </Router>
);

export default Root;
