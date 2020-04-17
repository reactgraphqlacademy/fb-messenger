import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import colours from "../App.css";

const TopBarWrapper = styled.div`
  background: ${colours.darkBlue};
  padding: 1em;
  text-align: center;
  border-bottom: 1px solid #29487d;
  color: ${colours.white};
  .fab {
    color: ${colours.white};
    font-size: 1.5em;
  }
`;

const TopBar = ({ userPosition }) => (
  <TopBarWrapper>
    <Link to="/messages">
      <i className="icon fab fa-facebook-messenger" />
    </Link>
  </TopBarWrapper>
);

export default TopBar;
