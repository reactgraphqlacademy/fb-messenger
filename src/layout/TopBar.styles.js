import styled from "styled-components";
import colours from "../App.css";

export const TopBarWrapper = styled.div`
  background: ${colours.darkBlue};
  padding: 1em;
  text-align: center;
  border-bottom: 1px solid #29487d;
  color: ${colours.white};
  a {
    color: ${colours.white};
    text-decoration: none;
  }
  .fa-facebook-messenger {
    font-size: 1.5em;
    margin: 0 auto;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  right: 20px;
  top: 5px;
  > ul {
    list-style: none;
    > li {
      margin: 0 15px;
      display: inline;
    }
    li:last-child {
      margin-right: 0;
    }
    li:first-child {
      margin-left: 0;
    }
  }
`;
