import React from "react";
import PropTypes from "prop-types";

import Avatar from "../../Layout/Avatar";
import Icon from "../../Layout/Icon";

const UserDetail = ({ username }) => (
  <div className="user-detail">
    <div className="user">
      <div>
        <Avatar username={username} size="large" />
        <div className="user-title">
          <div className="user-name">{username}</div>
          <div className="last-active">
            Active {Math.floor(Math.random() * 3) + 1}m ago
          </div>
        </div>
      </div>
      <Icon name="cog" />
    </div>
    <div>Options</div>
    <div>Facebook Profile</div>
  </div>
);

UserDetail.propTypes = {
  username: PropTypes.string.isRequired
};

export default UserDetail;
