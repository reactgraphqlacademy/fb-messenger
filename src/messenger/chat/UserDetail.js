import React from "react";
import Avatar from "../../layout/Avatar";
import Icon from "../../layout/Icon";
import {
  UserDetailWrapper,
  User,
  UserName,
  LastActive,
  UserBio,
} from "./UserDetail.styles";

const UserDetail = ({ username }) => (
  // TODO CAN WE ADD FRAGMENTS HERE?
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
