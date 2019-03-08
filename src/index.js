import React from "react";
import ReactDOM from "react-dom";
// TODO part 3, replace the apollo-link-http with apollo-link-batch-http
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { injectGlobal } from "styled-components";

import { configureStore } from "./App/store";
import Root from "./App/components/Root";

injectGlobal`
html,
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 100%;
  height: 100%;
}
a:link,
a:focus,
a:hover {
  cursor: pointer;
}
button {
  color: #0084ff;
  border: none;
  cursor: pointer;
  font-weight: bolder;
}
h2 {
  font-weight: 300;
  text-align: center;
  margin: auto;
  font-size: 1rem;
}
.page-center {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

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
