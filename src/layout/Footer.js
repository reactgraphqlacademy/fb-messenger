import React from "react";
import styled from "styled-components";
import colours from "../App.css";

const FooterWrapper = styled.div`
  padding: 8px;
  text-align: center;
  background: ${colours.lightGrey};
  border-top: 1px solid ${colours.mediumGrey};
  font-size: 0.8rem;
`;

const Footer = (props) => <FooterWrapper>React GraphQL Academy</FooterWrapper>;

export default Footer;
