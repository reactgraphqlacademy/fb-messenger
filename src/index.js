import React from "react";
import ReactDOM from "react-dom";
// TODO part 3, replace the apollo-link-http with apollo-link-batch-http
// import { createHttpLink } from "apollo-link-http";
// import { ApolloLink } from "apollo-link";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { ApolloClient } from "apollo-client";
import ApolloClient from "apollo-boost";

import Root from "./Root";

const client = new ApolloClient({
  uri: `/graphql`
});

ReactDOM.render(
  <Root graphqlClient={client} />,
  document.getElementById("root")
);
