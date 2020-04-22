import React from "react";
import Avatar from "../../layout/Avatar";
import Icon from "../../layout/Icon";
import {
  UserDetailWrapper,
  User,
  UserName,
  LastActive,
  UserDetailContent,
} from "./UserDetail.styles";

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

    <UserDetailContent>
      <p>Last message: BONUS EXERCISE</p>
      <p>Bio: BONUS EXERCISE</p>
      <p>Work: BONUS EXERCISE</p>
    </UserDetailContent>
  </UserDetailWrapper>
);

export default UserDetail;
