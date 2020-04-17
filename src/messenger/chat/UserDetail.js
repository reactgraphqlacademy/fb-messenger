import React from "react";
import styled from "styled-components";

import colours from "../../App.css";
import Avatar from "../../layout/Avatar";
import Icon from "../../layout/Icon";
// import USER_DETAIL_QUERY from "./UserDetail.graphql";

const UserDetailWrapper = styled.div`
  width: 33.3%;
  border-left: 1px solid ${colours.mediumGrey};
  > div {
    padding: 1em;
    font-size: 0.9em;
    color: ${colours.darkGrey};
    border-bottom: 1px solid ${colours.mediumGrey};
    &:last-child {
      border-bottom: none;
    }
  }
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
`;

const UserName = styled.div`
  font-size: 0.9rem;
  text-transform: capitalize;
`;

const LastActive = styled.div`
  font-size: 0.75rem;
  color: ${colours.darkGrey};
`;

const UserBio = styled.p`
  padding: 1em;
`;

const UserDetail = ({ username }) => (
  <UserDetailWrapper>
    <User>
      <div>
        <Avatar username={username} size="large" />
        <div>
          <UserName>{username}</UserName>
          <LastActive>
            Active {Math.floor(Math.random() * 3) + 1}m ago
          </LastActive>
        </div>
      </div>
      <Icon name="cog" />
    </User>

    <UserBio>BONUS! add the bio here</UserBio>
  </UserDetailWrapper>
);

export default UserDetail;
