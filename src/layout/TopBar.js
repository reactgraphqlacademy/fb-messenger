import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { TopBarWrapper, Nav } from "./TopBar.styles";

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
      <Link to="/messages">
        <i className="fab fa-facebook-messenger" />
      </Link>
      <Nav>
        <ul>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/profile">
              {loading
                ? "..."
                : error
                ? "Oops 😬"
                : `${data.viewer.fullname}@${data.viewer.work.company}`}
            </Link>
          </li>
        </ul>
      </Nav>
    </TopBarWrapper>
  );
};

export default TopBar;
