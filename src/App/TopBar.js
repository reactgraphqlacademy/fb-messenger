import React from 'react';

const TopBar = ({ user, toggleModal, userPosition = 'left' }) => (
  <div className="top-bar">
    <i className="icon fab fa-facebook-messenger" />
    <a onClick={toggleModal} className={`username ${userPosition}`}>
      {user.name}
    </a>
  </div>
);

export default TopBar;
