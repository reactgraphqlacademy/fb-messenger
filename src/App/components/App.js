import React from "react";
import { Route, Switch, Redirect } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import { createGlobalStyle } from "styled-components";

import Login from "../../User/components/Login";
import Messenger from "../../Messenger/components";
import Profile from "../../User/components/Profile";
import colours from "../styles/export/colours.css";

import NotFound from "./NotFound";
import Home from "./Home";
import TopBar from "./Layout/TopBar";
import Footer from "./Layout/Footer";

const GlobalStyle = createGlobalStyle`
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

const AppWrapper = styled.div`
  background-color: ${colours.white};
  overflow: hidden;
  flex: 1;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  order: 0;
  flex-flow: column nowrap;
  align-items: stretch;
  flex-direction: column;
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

const App = ({ session }) => (
  <React.Fragment>
    <GlobalStyle />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route
        render={props =>
          session ? (
            <AppWrapper>
              <TopBar userPosition="right" />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/messages" component={Messenger} />
                <Route path="/profile" component={Profile} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </AppWrapper>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    </Switch>
  </React.Fragment>
);

const masStateToProps = state => ({
  session: state.session
});

export default connect(masStateToProps)(App);
