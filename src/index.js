import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

import { configureStore } from "./App/store";
import Root from "./App/components/Root";

const configLink = {
  uri: `/api/graphql`,
  credentials: "include"
};

const graphqlClient = new ApolloClient({
  link: ApolloLink.from([createHttpLink(configLink)]),
  cache: new InMemoryCache().restore(window.__PRELOADED_STATE__)
});

const store = configureStore();

ReactDOM.hydrate(
  <Router>
    <Root store={store} graphqlClient={graphqlClient} />
  </Router>,
  document.getElementById("root")
);
