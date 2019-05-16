import React from "react";
import express from "express";
import cookieParser from "cookie-parser";
import verifyJWT from "express-jwt";
import Helmet from "react-helmet";
import { StaticRouter as Router } from "react-router";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { createSSRMiddleware } from "react-scripts-ssr";
import { renderToString } from "react-dom/server";
import fetch from "node-fetch";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getDataFromTree } from "react-apollo";

import Root from "./App/components/Root";
import { configureStore } from "./App/store";
import { API_BASE_URL } from "./App/config";

const TOKEN = "__session";

const ErrorPage = ({ error }) => (
  <div>
    <h1>Oops there was an error</h1>
    {process.env.NODE_ENV !== "production" ? (
      <div>
        <h2>{error.toString()}</h2>
        <p>{error.stack}</p>
      </div>
    ) : null}
  </div>
);

const server = express();

server.use(cookieParser());
server.use(
  verifyJWT({
    secret: "this_is_my_secret_key ^^",
    credentialsRequired: false,
    getToken: req => req.cookies[TOKEN]
  })
);

server.get("*", (req, res, next) => {
  if (!req.user && req.path !== "/login") {
    res.redirect("/login");
  } else {
    next();
  }
});

server.use(
  createSSRMiddleware(async (req, res, next) => {
    const initialState = { session: req.user };
    const store = configureStore(initialState);
    const sheet = new ServerStyleSheet();
    const graphqlClient = new ApolloClient({
      link: createHttpLink({ uri: `${API_BASE_URL}/api/graphql`, fetch }),
      cache: new InMemoryCache()
    });

    let body = "",
      graphqlInitialState = "",
      linkHelmet = "";

    try {
      const App = (
        <StyleSheetManager sheet={sheet.instance}>
          <Router context={{}} location={req.url}>
            <Root store={store} graphqlClient={graphqlClient} />
          </Router>
        </StyleSheetManager>
      );

      await getDataFromTree(App);
      body = renderToString(App);
      const helmet = Helmet.renderStatic();
      linkHelmet = helmet.link.toString();
      graphqlInitialState = JSON.stringify(graphqlClient.extract()).replace(
        /</g,
        "\\u003c"
      );
    } catch (error) {
      body = renderToString(<ErrorPage error={error} />);
    }

    next(
      {
        body,
        meta: [linkHelmet, sheet.getStyleTags()],
        state: graphqlInitialState
      },
      req,
      res
    );
  })
);

const PORT = process.env.REACT_APP_SERVER_SIDE_RENDERING_PORT || 8888;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
