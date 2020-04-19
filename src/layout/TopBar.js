import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import colours from "../App.css";

const TopBarWrapper = styled.div`
  background: ${colours.darkBlue};
  padding: 1em;
  text-align: center;
  border-bottom: 1px solid #29487d;
  color: ${colours.white};
  a {
    color: ${colours.white};
  }
  .fa-facebook-messenger {
    font-size: 1.5em;
    margin: 0 auto;
  }
`;

const UsernameLink = styled(Link)`
  position: absolute;
  right: 20px;
  top: 20px;
`;

const VIEWER = gql`
  query {
    viewer {
      fullname
      work {
        # remove id in the exercise so students need to find the bug
        id
        company
      }
    }
  }
`;

const TopBar = () => {
  const { data, loading, error } = useQuery(VIEWER);

  return (
    <TopBarWrapper>
      <div></div>
      <Link to="/messages">
        <i className="fab fa-facebook-messenger" />
      </Link>
      <UsernameLink to="/profile">
        {loading
          ? "..."
          : error
          ? "Oops 😬"
          : `${data.viewer.fullname} @ ${data.viewer.work.company}`}
      </UsernameLink>
    </TopBarWrapper>
  );
};

export default TopBar;
