import React from "react";
import ReactDOM from "react-dom";
// import ApolloClient from "apollo-boost";
import { createPersistedQueryLink } from "apollo-link-persisted-queries";
// import { BatchHttpLink } from "apollo-link-batch-http";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import ApolloClient from "apollo-client";

import Root from "./Root";

const link = ApolloLink.from([
  // https://www.apollographql.com/docs/apollo-server/performance/apq/
  // createPersistedQueryLink({ useGETForHashedQueries: true }),

  // https://www.apollographql.com/docs/link/links/batch-http/
  // new BatchHttpLink({ uri: "/graphql" })

  createHttpLink({ uri: "/graphql" })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

// Apollo Boost
// const client = new ApolloClient({
//   uri: `/graphql`
// });

ReactDOM.render(
  <Root graphqlClient={client} />,
  document.getElementById("root")
);
