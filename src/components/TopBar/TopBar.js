import React from "react";
import PropTypes from "prop-types";

const TopBar = props => {
  // Props
  const { name, toggleModal, userPosition } = props;
  return (
    <div className="top-bar">
      <i className="icon fab fa-facebook-messenger" />
      <a onClick={toggleModal} className={`username ${userPosition || "left"}`}>
        {name}
      </a>
    </div>
  );
};

TopBar.propTypes = {
  name: PropTypes.string,
  toggleModal: PropTypes.func,
  userPosition: PropTypes.number
};

export default TopBar;
