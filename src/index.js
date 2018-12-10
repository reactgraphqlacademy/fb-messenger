import React from "react";
import ReactDOM from "react-dom";
// TODO part 3, replace the apollo-link-http with apollo-link-batch-http
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

import { configureStore } from "./App/store";
import "./App/styles/index.css";
import Root from "./App/components/Root";

const configLink = {
  uri: `/graphql`,
  credentials: "include"
};

const graphqlClient = new ApolloClient({
  link: ApolloLink.from([createHttpLink(configLink)]),
  cache: new InMemoryCache()
});

const store = configureStore();

ReactDOM.render(
  <Root store={store} graphqlClient={graphqlClient} />,
  document.getElementById("root")
);
