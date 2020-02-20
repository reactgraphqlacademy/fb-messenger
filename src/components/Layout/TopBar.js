import React from "react";
import { Link } from "react-router-dom";

const MyLink = ({ to, ...rest }) => {
  if (to.startsWith("http")) {
    return <a href={to} {...rest} />;
  } else {
    return <Link to={to} {...rest} />;
  }
};

const TopBar = props => (
  <div className="top-bar">
    <MyLink to="/messages">
      <i className="icon fab fa-facebook-messenger" />
    </MyLink>
    <MyLink
      to="/profile"
      className={`username ${props.userPosition || "right"}`}
    >
      profile <img src="/images/default.jpg" />
    </MyLink>
  </div>
);

export default TopBar;
