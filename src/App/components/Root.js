import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import colours from "../styles/colours";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    font-family: sans-serif !important;
    font-size: 100% !important;
    height: 100% !important;
  }

  a:link, a:focus, a:hover {
    cursor: pointer;
  }

  button {
    color: ${colours.lightBlue} !important;
    border: none !important;
    cursor: pointer !important;
    font-weight: bolder !important;
  }

  h2 {
    font-weight: 300 !important;
    text-align: center !important;
    margin: auto !important;
    font-size: 1rem !important;
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

const Root = ({ store, graphqlClient }) => (
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <GlobalStyle />
      <Helmet
        link={[
          {
            rel: "stylesheet",
            href:
              "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          }
        ]}
      />
      <Route path="/" component={App} />
    </ApolloProvider>
  </Provider>
);

export default Root;
