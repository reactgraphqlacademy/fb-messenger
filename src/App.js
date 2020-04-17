import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import Messenger from "./messenger";
import colours from "./App.css";

import TopBar from "./layout/TopBar";
import Footer from "./layout/Footer";

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

const App = () => (
  <AppWrapper>
    <TopBar userPosition="right" />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/messages" />} />
      <Route path="/messages" component={Messenger} />
    </Switch>
    <Footer />
  </AppWrapper>
);

export default App;
